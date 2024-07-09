import { Collector } from './Collector';

export class ClickCollector implements Collector<MouseEvent | null> {
    private data: (MouseEvent | null)[];
    private bufferSize: number;

    constructor(bufferSize: number = 10) {
        this.bufferSize = bufferSize;
        this.data = [];
    }

    getData(): MouseEvent | null {
        return this.data.length > 0 ? this.data[this.data.length - 1] : null;
    }

    getKey(): string {
        return 'click';
    }

    startCollect(): void {
        document.addEventListener('click', (event) => {
            try {
                if (this.data.length >= this.bufferSize) {
                    this.data.shift();
                }
                this.data.push(event);
                console.log('Click event collected:', event);
            } catch (error) {
                console.error('Error collecting click event:', error);
                this.data.push(null);
            }
        });
    }

    finishCollect(): void {
        this.data = [];
    }
}
