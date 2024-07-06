
import { Collector } from '../../interfaces/Collector';

export class HistoryLengthCollector implements Collector<number> {
  public interval: number;
  private data: number | null = null;

  constructor(interval: number) {
    this.interval = interval;
  }

  getData(): number | null {
    return this.data;
  }

  getKey(): string {
    return 'historyLength';
  }

  startCollect(): void {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting history length:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start history length collection:', error);
    }
  }

  finishCollect(): void {
    this.data = null;
  }

  private collectData(): void {
    try {
      this.data = window.history.length;
    } catch (error) {
      console.error('Error getting history length:', error);
      this.data = null;
    }
  }
}