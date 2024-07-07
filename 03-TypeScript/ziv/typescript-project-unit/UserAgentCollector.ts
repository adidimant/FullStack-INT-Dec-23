import { Collector } from './Collector';

export class UserAgentCollector implements Collector<string> {
    private data: string | null = null;
    private intervalId: number | null = null;
    private interval: number;

    constructor(interval: number = 60000) {
        this.interval = interval;
    }

    getData(): string | null {
        return this.data;
    }

    getKey(): string {
        return 'userAgent';
    }

    startCollect(): void {
        this.intervalId = window.setInterval(() => {
            try {
                this.data = navigator.userAgent;
            } catch (error) {
                console.error('Error collecting user agent:', error);
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
