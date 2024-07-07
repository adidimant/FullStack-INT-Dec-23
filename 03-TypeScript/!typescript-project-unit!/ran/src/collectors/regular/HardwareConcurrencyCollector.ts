import { Collector } from '../../interfaces/Collector';

export class HardwareConcurrencyCollector implements Collector<number> {
  public interval: number;
  private data: number | null = null;

  constructor(interval: number) {
    this.interval = interval;
  }

  getData(): number | null {
    return this.data;
  }

  getKey(): string {
    return 'hardwareConcurrency';
  }

  startCollect(): void {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting hardware concurrency:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start hardware concurrency collection:', error);
    }
  }

  finishCollect(): void {
    this.data = null;
  }

  private collectData(): void {
    try {
      this.data = navigator.hardwareConcurrency;
    } catch (error) {
      console.error('Error getting hardware concurrency:', error);
      this.data = null;
    }
  }
}