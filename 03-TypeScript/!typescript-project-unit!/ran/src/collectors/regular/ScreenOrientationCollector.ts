import { Collector } from '../../interfaces/Collector';

export class ScreenOrientationCollector implements Collector<string> {
  public interval: number;
  private data: string | null = null;

  constructor(interval: number) {
    this.interval = interval;
  }

  getData(): string | null {
    return this.data;
  }

  getKey(): string {
    return 'screenOrientation';
  }

  startCollect(): void {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting screen orientation:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start screen orientation collection:', error);
    }
  }

  finishCollect(): void {
    this.data = null;
  }

  private collectData(): void {
    try {
      if (screen.orientation) {
        this.data = screen.orientation.type;
      } else {
        this.data = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
      }
    } catch (error) {
      console.error('Error getting screen orientation:', error);
      this.data = null;
    }
  }
}