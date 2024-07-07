
import { ContinuousCollector } from '../../interfaces/ContinuousCollector';
import { Utils } from '../../utils/Utils';

export class KeyboardPressCollector implements ContinuousCollector<KeyboardEvent> {
  public interval: number;
  public bufferSize: number;
  private data: KeyboardEvent[] = [];

  constructor(interval: number, bufferSize: number) {
    this.interval = interval;
    this.bufferSize = bufferSize;
  }

  getData(): KeyboardEvent[] {
    return this.data;
  }

  getKey(): string {
    return 'keyboardPress';
  }

  startCollect(): void {
    try {
      document.addEventListener('keyup', this.handleKeyPress);
    } catch (error) {
      console.error('Failed to start keyboard press collection:', error);
    }
  }

  finishCollect(): void {
    try {
      document.removeEventListener('keyup', this.handleKeyPress);
      this.data = [];
    } catch (error) {
      console.error('Error finishing keyboard press collection:', error);
    }
  }

  private handleKeyPress = (event: KeyboardEvent): void => {
    try {
      this.data = Utils.maintainLastXItems(this.data, this.bufferSize, event);
    } catch (error) {
      console.error('Error handling key press:', error);
    }
  }
}