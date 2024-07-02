import { Collector } from './Collector';

export class JavaScriptEnabledCollector implements Collector<boolean> {
  private data: boolean | null = null;

  getData(): boolean | null {
    return this.data;
  }

  getKey(): string {
    return 'javaScriptEnabled';
  }

  startCollect(): void {
    this.data = typeof navigator.javaEnabled === 'function' && navigator.javaEnabled();
  }

  finishCollect(): void {
    this.data = null;
  }
}
