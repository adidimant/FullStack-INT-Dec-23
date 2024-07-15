import { Collector } from '../../interfaces/Collector';

export class LanguageCollector implements Collector<string> {
  public interval: number;
  private data: string | null = null;

  constructor(interval: number) {
    this.interval = interval;
  }

  getData(): string | null {
    return this.data;
  }

  getKey(): string {
    return 'language';
  }

  startCollect(): void {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting language:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start language collection:', error);
    }
  }

  finishCollect(): void {
    this.data = null;
  }

  private collectData(): void {
    try {
      this.data = navigator.language || (navigator as any).userLanguage;
    } catch (error) {
      console.error('Error getting language:', error);
      this.data = null;
    }
  }
}