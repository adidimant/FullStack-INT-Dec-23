// collectors/ScreenWidthCollector.ts

import { Collector } from '../interfaces';

export class ScreenWidthCollector implements Collector<number> {
  private data: number | null = null;

  constructor() {
    this.data = window.screen.width;
  }

  getData(): number | null {
    return this.data;
  }

  interval: number = 10000; // Example interval, adjust as needed

  getKey(): string {
    return 'screenWidth';
  }

  startCollect(): void {
    // Example implementation to start collecting
    setInterval(() => {
      this.data = window.screen.width;
    }, this.interval);
  }

  finishCollect(): void {
    // Example implementation to finish collecting
    this.data = null;
  }
}
