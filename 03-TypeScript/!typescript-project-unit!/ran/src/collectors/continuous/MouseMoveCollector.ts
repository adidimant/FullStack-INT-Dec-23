import { ContinuousCollector } from '../../interfaces/ContinuousCollector';
import { Utils } from '../../utils/Utils';

export class MouseMoveCollector implements ContinuousCollector<MouseEvent> {
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
    return 'mouseMove';
  }

  startCollect(): void {
    try {
      document.addEventListener('mousemove', this.handleMouseMove);
    } catch (error) {
      console.error('Failed to start mouse move collection:', error);
    }
  }

  finishCollect(): void {
    try {
      document.removeEventListener('mousemove', this.handleMouseMove);
      this.data = [];
    } catch (error) {
      console.error('Error finishing mouse move collection:', error);
    }
  }

  private handleMouseMove = (event: MouseEvent): void => {
    try {
      this.data = Utils.maintainLastXItems(this.data, this.bufferSize, event);
    } catch (error) {
      console.error('Error handling mouse move:', error);
    }
  }
}