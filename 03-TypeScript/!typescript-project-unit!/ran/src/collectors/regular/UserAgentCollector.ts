import { Collector } from '../../interfaces/Collector';

export class UserAgentCollector implements Collector<string> {
  public interval: number;
  private data: string | null = null;

  constructor(interval: number) {
    this.interval = interval;
  }

  getData(): string | null {
    return this.data;
  }

  getKey(): string {
    return 'userAgent';
  }

  startCollect(): void {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting user agent:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start user agent collection:', error);
    }
  }

  finishCollect(): void {
    this.data = null;
  }

  private collectData(): void {
    try {
      this.data = navigator.userAgent;
    } catch (error) {
      console.error('Error getting user agent:', error);
      this.data = null;
    }
  }
}