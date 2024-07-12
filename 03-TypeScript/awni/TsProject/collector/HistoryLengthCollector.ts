import { Collector } from './Collector-Interface';



export class HistoryLengthCollector implements Collector<number> {
    public interval: number;
    private data: number;

    constructor(interval: number) {
        this.interval = interval || 60000;
    }

    getData(): number {
        return this.data;
    }

    getKey(): string {
        return 'historyLength';
    }

    startCollect(): void {
        this.data = window.history.length;
    }

    finishCollect(): void {
        this.data = null;
    }

}