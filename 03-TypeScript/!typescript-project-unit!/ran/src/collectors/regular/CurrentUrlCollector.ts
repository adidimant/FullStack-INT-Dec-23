import { Collector } from '../../interfaces/Collector';

export class CurrentUrlCollector implements Collector<string> {
  public interval: number;
  private data: string | null = null;

  constructor(interval: number) {
    this.interval = interval;
  }

  getData(): string | null {
    return this.data;
  }

  getKey(): string {
    return 'currentUrl';
  }

  startCollect(): void {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting current URL:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start current URL collection:', error);
    }
  }

  finishCollect(): void {
    this.data = null;
  }

  private collectData(): void {
    try {
      this.data = window.location.href;
    } catch (error) {
      console.error('Error getting current URL:', error);
      this.data = null;
    }
  }
}