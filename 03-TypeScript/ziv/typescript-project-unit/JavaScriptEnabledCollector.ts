import { Collector } from './Collector';

export class JavaScriptEnabledCollector implements Collector<boolean> {
    private data: boolean | null = null;
    private intervalId: number | null = null;
    private interval: number;

    constructor(interval: number) {
        this.interval = interval;
    }

    getData(): boolean | null {
        return this.data;
    }

    getKey(): string {
        return 'javaScriptEnabled';
    }

    startCollect(): void {
        this.data = typeof navigator.javaEnabled === 'function' && navigator.javaEnabled();
        this.intervalId = window.setInterval(() => {
            try {
                this.data = typeof navigator.javaEnabled === 'function' && navigator.javaEnabled();
            } catch (error) {
                console.error('Error collecting JavaScript enabled data:', error);
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
