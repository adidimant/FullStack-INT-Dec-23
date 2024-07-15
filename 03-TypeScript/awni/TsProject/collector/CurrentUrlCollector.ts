
import { Collector } from './Collector-Interface';



export class CurrentUrlCollector implements Collector<string> {
    public interval: number;
    private data: string;

    constructor(interval: number) {
        this.interval = interval || 60000;
    }

    getData(): string {
        return this.data;
    }

    getKey(): string {
        return 'currentUrl';
    }

    startCollect(): void {
        this.data = window.location.href;
    }

    finishCollect(): void {
        this.data = null;
    }

}