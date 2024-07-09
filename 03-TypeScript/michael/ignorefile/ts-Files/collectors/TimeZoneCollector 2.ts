import { Collector } from './Collector';

export class TimeZoneCollector implements Collector<string> {
  private data: string | null = null;

  getData(): string | null {
    return this.data;
  }

  getKey(): string {
    return 'timeZone';
  }

  startCollect(): void {
    this.data = Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  finishCollect(): void {
    this.data = null;
  }
}
