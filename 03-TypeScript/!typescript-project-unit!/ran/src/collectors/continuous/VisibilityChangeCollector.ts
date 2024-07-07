import { ContinuousCollector } from '../../interfaces/ContinuousCollector';
import { Utils } from '../../utils/Utils';

interface VisibilityData {
  isVisible: boolean;
  timestamp: number;
}

export class VisibilityChangeCollector implements ContinuousCollector<VisibilityData> {
  public interval: number;
  public bufferSize: number;
  private data: VisibilityData[] = [];

  constructor(interval: number, bufferSize: number) {
    this.interval = interval;
    this.bufferSize = bufferSize;
  }

  getData(): VisibilityData[] {
    return this.data;
  }

  getKey(): string {
    return 'visibilityChange';
  }

  startCollect(): void {
    try {
      document.addEventListener('visibilitychange', this.handleVisibilityChange);
    } catch (error) {
      console.error('Failed to start visibility change collection:', error);
    }
  }

  finishCollect(): void {
    try {
      document.removeEventListener('visibilitychange', this.handleVisibilityChange);
      this.data = [];
    } catch (error) {
      console.error('Error finishing visibility change collection:', error);
    }
  }

  private handleVisibilityChange = (): void => {
    try {
      const visibilityData: VisibilityData = {
        isVisible: !document.hidden,
        timestamp: Date.now()
      };
      this.data = Utils.maintainLastXItems(this.data, this.bufferSize, visibilityData);
    } catch (error) {
      console.error('Error handling visibility change:', error);
    }
  }
}