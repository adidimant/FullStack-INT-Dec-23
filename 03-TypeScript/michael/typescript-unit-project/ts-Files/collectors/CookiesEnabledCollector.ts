import { Collector } from './Collector';

export class CookiesEnabledCollector implements Collector<boolean> {
  private data: boolean | null = null;

  getData(): boolean | null {
    return this.data;
  }

  getKey(): string {
    return 'cookiesEnabled';
  }

  startCollect(): void {
    this.data = navigator.cookieEnabled;
  }

  finishCollect(): void {
    this.data = null;
  }
}
