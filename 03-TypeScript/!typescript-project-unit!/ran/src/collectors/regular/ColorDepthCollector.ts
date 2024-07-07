import { Collector } from '../../interfaces/Collector';

export class ColorDepthCollector implements Collector<number> {
  public interval: number;
  private data: number | null = null;

  constructor(interval: number) {
    this.interval = interval;
  }

  getData(): number | null {
    return this.data;
  }

  getKey(): string {
    return 'colorDepth';
  }

  startCollect(): void {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting color depth:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start color depth collection:', error);
    }
  }

  finishCollect(): void {
    this.data = null;
  }

  private collectData(): void {
    try {
      this.data = screen.colorDepth;
    } catch (error) {
      console.error('Error getting color depth:', error);
      this.data = null;
    }
  }
}