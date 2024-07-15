
import { Collector } from './Collector-Interface';


export class ReferrerCollector implements Collector<string> {
    public interval: number;
    private data: string;

    constructor(interval: number) {
        this.interval = interval || 60000;
    }

    getData(): string {
        return this.data;
    }

    getKey(): string {
        return 'referrer';
    }

    startCollect(): void {
        this.data = document.referrer;
    }

    finishCollect(): void {
        this.data = null;
    }
}