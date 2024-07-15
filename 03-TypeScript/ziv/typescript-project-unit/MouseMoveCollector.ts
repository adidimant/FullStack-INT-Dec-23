import { Collector } from './Collector';

export class MouseMoveCollector implements Collector<MouseEvent | null> {
    private data: (MouseEvent | null)[];
    private bufferSize: number;

    constructor(bufferSize: number = 50) {
        this.bufferSize = bufferSize;
        this.data = [];
    }

    getData(): MouseEvent | null {
        return this.data.length > 0 ? this.data[this.data.length - 1] : null;
    }

    getKey(): string {
        return 'mouseMove';
    }

    startCollect(): void {
        document.addEventListener('mousemove', (event) => {
            try {
                if (this.data.length >= this.bufferSize) {
                    this.data.shift();
                }
                this.data.push(event);
                console.log('Mouse move event collected:', event);
            } catch (error) {
                console.error('Error collecting mouse move event:', error);
                this.data.push(null);
            }
        });
    }

    finishCollect(): void {
        this.data = [];
    }
}
