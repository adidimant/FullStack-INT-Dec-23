import { Collector } from '../../interfaces/Collector';

export class PluginsCollector implements Collector<string[]> {
  public interval: number;
  private data: string[] | null = null;

  constructor(interval: number) {
    this.interval = interval;
  }

  getData(): string[] | null {
    return this.data;
  }

  getKey(): string {
    return 'plugins';
  }

  startCollect(): void {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting plugins:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start plugins collection:', error);
    }
  }

  finishCollect(): void {
    this.data = null;
  }

  private collectData(): void {
    try {
      this.data = Array.from(navigator.plugins).map(plugin => plugin.name);
    } catch (error) {
      console.error('Error getting plugins:', error);
      this.data = null;
    }
  }
}