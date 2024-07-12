import { Collector } from './Collector-Interface';



export class TouchSupportCollector implements Collector<boolean> {
    public interval: number;
    private data: boolean;

    constructor(interval: number) {
        this.interval = interval || 60000;
    }

    getData(): boolean {
        return this.data;
    }

    getKey(): string {
        return 'touchSupport';
    }

    startCollect(): void {
        this.data = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    finishCollect(): void {
        this.data = null;
    }

}