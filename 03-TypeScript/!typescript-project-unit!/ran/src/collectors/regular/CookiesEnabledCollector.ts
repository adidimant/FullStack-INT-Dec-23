import { Collector } from '../../interfaces/Collector';

export class CookiesEnabledCollector implements Collector<boolean> {
  public interval: number;
  private data: boolean | null = null;

  constructor(interval: number) {
    this.interval = interval;
  }

  getData(): boolean | null {
    return this.data;
  }

  getKey(): string {
    return 'cookiesEnabled';
  }

  startCollect(): void {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting cookies enabled status:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start cookies enabled collection:', error);
    }
  }

  finishCollect(): void {
    this.data = null;
  }

  private collectData(): void {
    try {
      this.data = navigator.cookieEnabled;
    } catch (error) {
      console.error('Error getting cookies enabled status:', error);
      this.data = null;
    }
  }
}