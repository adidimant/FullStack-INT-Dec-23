import { Collector } from './Collector';

export class ClipboardCollector implements Collector<string> {
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
        return 'clipboard';
    }

    startCollect(): void {
        this.intervalId = window.setInterval(async () => {
            try {
                if (navigator.clipboard) {
                    this.data = await navigator.clipboard.readText();
                }
            } catch (error) {
                console.error('Error collecting clipboard data:', error);
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
