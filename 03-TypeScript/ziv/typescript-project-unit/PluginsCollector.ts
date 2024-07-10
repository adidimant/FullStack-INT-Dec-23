import { Collector } from './Collector';

export class PluginsCollector implements Collector<string[] | null> {
    private data: string[] | null = null;
    private intervalId: number | null = null;
    private interval: number;

    constructor(interval: number = 60000) {
        this.interval = interval;
    }

    getData(): string[] | null {
        return this.data;
    }

    getKey(): string {
        return 'plugins';
    }

    startCollect(): void {
        this.intervalId = window.setInterval(() => {
            try {
                this.data = Array.from(navigator.plugins).map(plugin => plugin.name);
            } catch (error) {
                console.error('Error collecting plugins data:', error);
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
