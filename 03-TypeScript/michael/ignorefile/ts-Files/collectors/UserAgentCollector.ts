import { Collector } from './Collector';

export class UserAgentCollector implements Collector<string> {
  private data: string | null = null;

  getData(): string | null {
    return this.data;
  }

  getKey(): string {
    return 'userAgent';
  }

  startCollect(): void {
    this.data = navigator.userAgent;
  }

  finishCollect(): void {
    this.data = null;
  }
}
