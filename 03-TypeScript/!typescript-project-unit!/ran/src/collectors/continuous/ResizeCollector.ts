import { ContinuousCollector } from '../../interfaces/ContinuousCollector';
import { Utils } from '../../utils/Utils';

interface ResizeData {
  width: number;
  height: number;
  timestamp: number;
}

export class ResizeCollector implements ContinuousCollector<ResizeData> {
  public interval: number;
  public bufferSize: number;
  private data: ResizeData[] = [];

  constructor(interval: number, bufferSize: number) {
    this.interval = interval;
    this.bufferSize = bufferSize;
  }

  getData(): ResizeData[] {
    return this.data;
  }

  getKey(): string {
    return 'resize';
  }

  startCollect(): void {
    try {
      window.addEventListener('resize', this.handleResize);
    } catch (error) {
      console.error('Failed to start resize collection:', error);
    }
  }

  finishCollect(): void {
    try {
      window.removeEventListener('resize', this.handleResize);
      this.data = [];
    } catch (error) {
      console.error('Error finishing resize collection:', error);
    }
  }

  private handleResize = (): void => {
    try {
      const resizeData: ResizeData = {
        width: window.innerWidth,
        height: window.innerHeight,
        timestamp: Date.now()
      };
      this.data = Utils.maintainLastXItems(this.data, this.bufferSize, resizeData);
    } catch (error) {
      console.error('Error handling resize:', error);
    }
  }
}