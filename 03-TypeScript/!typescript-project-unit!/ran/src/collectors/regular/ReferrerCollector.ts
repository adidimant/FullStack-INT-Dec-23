import { Collector } from '../../interfaces/Collector';

export class ReferrerCollector implements Collector<string> {
  public interval: number;
  private data: string | null = null;

  constructor(interval: number) {
    this.interval = interval;
  }

  getData(): string | null {
    return this.data;
  }

  getKey(): string {
    return 'referrer';
  }

  startCollect(): void {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting referrer:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start referrer collection:', error);
    }
  }

  finishCollect(): void {
    this.data = null;
  }

  private collectData(): void {
    try {
      this.data = document.referrer;
    } catch (error) {
      console.error('Error getting referrer:', error);
      this.data = null;
    }
  }
}