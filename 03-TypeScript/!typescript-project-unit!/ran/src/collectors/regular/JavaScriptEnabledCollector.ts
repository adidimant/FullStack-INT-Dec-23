import { Collector } from '../../interfaces/Collector';

export class JavaScriptEnabledCollector implements Collector<boolean> {
  public interval: number;
  private data: boolean | null = null;

  constructor(interval: number) {
    this.interval = interval;
  }

  getData(): boolean | null {
    return this.data;
  }

  getKey(): string {
    return 'javaScriptEnabled';
  }

  startCollect(): void {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting JavaScript enabled status:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start JavaScript enabled collection:', error);
    }
  }

  finishCollect(): void {
    this.data = null;
  }

  private collectData(): void {
    try {
      this.data = true;  // If this code is running, JavaScript is enabled
    } catch (error) {
      console.error('Error getting JavaScript enabled status:', error);
      this.data = null;
    }
  }
}