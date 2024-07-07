import { Collector } from '../../interfaces/Collector';

export class ScreenHeightCollector implements Collector<number> {
  public interval: number;
  private data: number | null = null;

  constructor(interval: number) {
    this.interval = interval;
  }

  getData(): number | null {
    return this.data;
  }

  getKey(): string {
    return 'screenHeight';
  }

  startCollect(): void {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting screen height:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start screen height collection:', error);
    }
  }

  finishCollect(): void {
    this.data = null;
  }

  private collectData(): void {
    try {
      this.data = window.screen.height;
    } catch (error) {
      console.error('Error getting screen height:', error);
      this.data = null;
    }
  }
}