import { ContinuousCollector } from '../../interfaces/ContinuousCollector';
import { Utils } from '../../utils/Utils';

export class ClicksCollector implements ContinuousCollector<MouseEvent> {
  public interval: number;
  public bufferSize: number;
  private data: MouseEvent[] = [];

  constructor(interval: number, bufferSize: number) {
    this.interval = interval;
    this.bufferSize = bufferSize;
  }

  getData(): MouseEvent[] {
    return this.data;
  }

  getKey(): string {
    return 'clicks';
  }

  startCollect(): void {
    try {
      document.addEventListener('click', this.handleClick);
    } catch (error) {
      console.error('Failed to start clicks collection:', error);
    }
  }

  finishCollect(): void {
    try {
      document.removeEventListener('click', this.handleClick);
      this.data = [];
    } catch (error) {
      console.error('Error finishing clicks collection:', error);
    }
  }

  private handleClick = (event: MouseEvent): void => {
    try {
      this.data = Utils.maintainLastXItems(this.data, this.bufferSize, event);
    } catch (error) {
      console.error('Error handling click:', error);
    }
  }
}