import { Collector } from '../../interfaces/Collector';

export class OnlineStatusCollector implements Collector<boolean> {
  public interval: number;
  private data: boolean | null = null;

  constructor(interval: number) {
    this.interval = interval;
  }

  getData(): boolean | null {
    return this.data;
  }

  getKey(): string {
    return 'onlineStatus';
  }

  startCollect(): void {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting online status:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start online status collection:', error);
    }
  }

  finishCollect(): void {
    this.data = null;
  }

  private collectData(): void {
    try {
      this.data = navigator.onLine;
    } catch (error) {
      console.error('Error getting online status:', error);
      this.data = null;
    }
  }
}