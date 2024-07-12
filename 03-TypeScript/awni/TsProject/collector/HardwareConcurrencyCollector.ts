import { Collector } from './Collector-Interface';


export class HardwareConcurrencyCollector implements Collector<number> {
    public interval: number;
    private data: number;

    constructor(interval: number) {
        this.interval = interval || 60000;
    }

    getData(): number {
        return this.data;
    }

    getKey(): string {
        return 'hardwareConcurrency';
    }

    startCollect(): void {
        this.data = navigator.hardwareConcurrency;
    }

    finishCollect(): void {
        this.data = null;
    }

}
