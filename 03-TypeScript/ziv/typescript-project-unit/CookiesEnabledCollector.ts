import { Collector } from './Collector';

export class CookiesEnabledCollector implements Collector<boolean> {
    private data: boolean | null = null;
    private intervalId: number | null = null;
    private interval: number;

    constructor(interval: number = 60000) {
        this.interval = interval;
    }

    getData(): boolean | null {
        return this.data;
    }

    getKey(): string {
        return 'cookiesEnabled';
    }

    startCollect(): void {
        this.intervalId = window.setInterval(() => {
            try {
                this.data = navigator.cookieEnabled;
            } catch (error) {
                console.error('Error collecting cookies enabled:', error);
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
