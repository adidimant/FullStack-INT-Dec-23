import { Collector } from '../../interfaces/Collector';

export class PlatformCollector implements Collector<string> {
  public interval: number;
  private data: string | null = null;

  constructor(interval: number) {
    this.interval = interval;
  }

  getData(): string | null {
    return this.data;
  }

  getKey(): string {
    return 'platform';
  }

  startCollect(): void {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting platform:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start platform collection:', error);
    }
  }

  finishCollect(): void {
    this.data = null;
  }

  private collectData(): void {
    try {
      this.data = navigator.platform;
    } catch (error) {
      console.error('Error getting platform:', error);
      this.data = null;
    }
  }
}