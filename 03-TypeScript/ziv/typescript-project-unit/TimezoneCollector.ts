import { Collector } from './Collector';

export class TimezoneCollector implements Collector<string> {
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
        return 'timeZone';
    }

    startCollect(): void {
        this.intervalId = window.setInterval(() => {
            try {
                this.data = Intl.DateTimeFormat().resolvedOptions().timeZone;
            } catch (error) {
                console.error('Error collecting time zone:', error);
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
