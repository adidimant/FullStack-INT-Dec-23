import { Collector } from '../../interfaces/Collector';

interface WindowSize {
  width: number;
  height: number;
}

export class WindowSizeCollector implements Collector<WindowSize> {
  public interval: number;
  private data: WindowSize | null = null;

  constructor(interval: number) {
    this.interval = interval;
  }

  getData(): WindowSize | null {
    return this.data;
  }

  getKey(): string {
    return 'windowSize';
  }

  startCollect(): void {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting window size:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start window size collection:', error);
    }
  }

  finishCollect(): void {
    this.data = null;
  }

  private collectData(): void {
    try {
      this.data = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    } catch (error) {
      console.error('Error getting window size:', error);
      this.data = null;
    }
  }
}