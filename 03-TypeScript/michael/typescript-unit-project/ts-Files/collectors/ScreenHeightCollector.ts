
import { Collector } from './Collector';

export class ScreenHeightCollector implements Collector<number> {
  private data: number | null = null;

  getData(): number | null {
    return this.data;
  }

  getKey(): string {
    return 'screenHeight';
  }

  startCollect(): void {
    this.data = screen.height;
  }

  finishCollect(): void {
    this.data = null;
  }
}
