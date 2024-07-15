import { Collector } from '../../interfaces/Collector';

export class ScreenWidthCollector implements Collector<number> {
  public interval: number;
  private data: number | null = null;

  constructor(interval: number) {
    this.interval = interval;
  }

  getData(): number | null {
    return this.data;
  }

  getKey(): string {
    return 'screenWidth';
  }

  startCollect(): void {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting screen width:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start screen width collection:', error);
    }
  }

  finishCollect(): void {
    this.data = null;
  }

  private collectData(): void {
    try {
      this.data = window.screen.width;
    } catch (error) {
      console.error('Error getting screen width:', error);
      this.data = null;
    }
  }
}