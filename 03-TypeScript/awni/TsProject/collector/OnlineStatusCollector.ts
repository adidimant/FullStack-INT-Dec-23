import { Collector } from './Collector-Interface';


export class OnlineStatusCollector implements Collector<boolean> {
    public interval: number;
    private data: boolean;

    constructor(interval: number) {
        this.interval = interval || 60000;
    }

    getData(): boolean {
        return this.data;
    }

    getKey(): string {
        return 'onlineStatus';
    }

    startCollect(): void {
        this.data = navigator.onLine;
    }

    finishCollect(): void {
        this.data = null;
    }

}