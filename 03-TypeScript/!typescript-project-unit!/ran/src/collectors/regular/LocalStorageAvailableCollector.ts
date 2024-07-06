import { Collector } from '../../interfaces/Collector';

export class LocalStorageAvailableCollector implements Collector<boolean> {
  public interval: number;
  private data: boolean | null = null;

  constructor(interval: number) {
    this.interval = interval;
  }

  getData(): boolean | null {
    return this.data;
  }

  getKey(): string {
    return 'localStorageAvailable';
  }

  startCollect(): void {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting local storage availability:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start local storage availability collection:', error);
    }
  }

  finishCollect(): void {
    this.data = null;
  }

  private collectData(): void {
    try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      this.data = true;
    } catch (error) {
      console.error('Error checking local storage availability:', error);
      this.data = false;
    }
  }
}