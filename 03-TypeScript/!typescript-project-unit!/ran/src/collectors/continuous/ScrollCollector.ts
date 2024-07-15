import { ContinuousCollector } from '../../interfaces/ContinuousCollector';
import { Utils } from '../../utils/Utils';

interface ScrollData {
  scrollX: number;
  scrollY: number;
  timestamp: number;
}

export class ScrollCollector implements ContinuousCollector<ScrollData> {
  public interval: number;
  public bufferSize: number;
  private data: ScrollData[] = [];

  constructor(interval: number, bufferSize: number) {
    this.interval = interval;
    this.bufferSize = bufferSize;
  }

  getData(): ScrollData[] {
    return this.data;
  }

  getKey(): string {
    return 'scroll';
  }

  startCollect(): void {
    try {
      window.addEventListener('scroll', this.handleScroll);
    } catch (error) {
      console.error('Failed to start scroll collection:', error);
    }
  }

  finishCollect(): void {
    try {
      window.removeEventListener('scroll', this.handleScroll);
      this.data = [];
    } catch (error) {
      console.error('Error finishing scroll collection:', error);
    }
  }

  private handleScroll = (): void => {
    try {
      const scrollData: ScrollData = {
        scrollX: window.scrollX,
        scrollY: window.scrollY,
        timestamp: Date.now()
      };
      this.data = Utils.maintainLastXItems(this.data, this.bufferSize, scrollData);
    } catch (error) {
      console.error('Error handling scroll:', error);
    }
  }
}