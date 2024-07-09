import { Collector } from './Collector';

export class KeyUpCollector implements Collector<KeyboardEvent | null> {
    private data: (KeyboardEvent | null)[];
    private bufferSize: number;

    constructor(bufferSize: number = 50) {
        this.bufferSize = bufferSize;
        this.data = [];
    }

    getData(): KeyboardEvent | null {
        return this.data.length > 0 ? this.data[this.data.length - 1] : null;
    }

    getKey(): string {
        return 'keyUp';
    }

    startCollect(): void {
        document.addEventListener('keyup', (event) => {
            try {
                if (this.data.length >= this.bufferSize) {
                    this.data.shift();
                }
                this.data.push(event);
                console.log('Key up event collected:', event);
            } catch (error) {
                console.error('Error collecting key up event:', error);
                this.data.push(null);
            }
        });
    }

    finishCollect(): void {
        this.data = [];
    }
}
