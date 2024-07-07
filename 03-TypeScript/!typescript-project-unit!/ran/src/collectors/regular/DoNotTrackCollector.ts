import { Collector } from '../../interfaces/Collector';

export class DoNotTrackCollector implements Collector<string | null> {
  public interval: number;
  private data: string | null = null;

  constructor(interval: number) {
    this.interval = interval;
  }

  getData(): string | null {
    return this.data;
  }

  getKey(): string {
    return 'doNotTrack';
  }

  startCollect(): void {
    try {
      this.collectData();
      setInterval(() => {
        try {
          this.collectData();
        } catch (error) {
          console.error('Error collecting Do Not Track status:', error);
          this.data = null;
        }
      }, this.interval);
    } catch (error) {
      console.error('Failed to start Do Not Track collection:', error);
    }
  }

  finishCollect(): void {
    this.data = null;
  }

  private collectData(): void {
    try {
      this.data = navigator.doNotTrack || (window as any).doNotTrack || (navigator as any).msDoNotTrack;
    } catch (error) {
      console.error('Error getting Do Not Track status:', error);
      this.data = null;
    }
  }
}