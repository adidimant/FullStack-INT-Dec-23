import { Collector } from './Collector';

export class ScreenWidthCollector implements Collector<number> {
    private data: number | null = null;
    private intervalId: number | null = null;
    private interval: number;

    constructor(interval: number = 60000) {
        this.interval = interval;
    }

    getData(): number | null {
        return this.data;
    }

    getKey(): string {
        return 'screenWidth';
    }

    startCollect(): void {
        this.intervalId = window.setInterval(() => {
            try {
                this.data = screen.width;
            } catch (error) {
                console.error('Error collecting screen width:', error);
                this.data = null;
            }
        }, this.interval);
    }

    finishCollect(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.data = null;
    }
}
