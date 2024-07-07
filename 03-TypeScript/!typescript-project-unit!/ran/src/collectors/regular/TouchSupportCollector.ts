import { Collector } from '../../interfaces/Collector';

export class TouchSupportCollector implements Collector<boolean> {
  public interval: number;
  private data: boolean | null = null;

  constructor(interval: number) {
    this.interval = interval;
  }

  getData(): boolean | null {
    return this.data;
  }

  getKey(): string {
    return 'touchSupport';
  }

  startCollect(): void {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting touch support:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start touch support collection:', error);
    }
  }

  finishCollect(): void {
    this.data = null;
  }

  private collectData(): void {
    try {
      this.data = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || (navigator as any).msMaxTouchPoints > 0;
    } catch (error) {
      console.error('Error getting touch support:', error);
      this.data = null;
    }
  }
}