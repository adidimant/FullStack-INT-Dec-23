import { Collector } from './Collector';

export class DoNotTrackCollector implements Collector<string | null> {
    public interval: number;
    private data: string | null;
    private intervalId: number | null = null;

    constructor(interval: number) {
        this.interval = interval;
        this.data = null;
    }

    getData(): string | null {
        return this.data;
    }

    getKey(): string {
        return 'doNotTrack';
    }

    startCollect(): void {
        this.intervalId = window.setInterval(() => {
            try {
                this.data = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack || 'unknown';
            } catch (error) {
                console.error('Error collecting do not track data:', error);
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
