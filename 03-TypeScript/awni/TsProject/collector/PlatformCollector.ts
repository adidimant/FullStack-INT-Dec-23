import { Collector } from './Collector-Interface';


export class PlatformCollector implements Collector<string> {
    public interval: number;
    private data: string;

    constructor(interval: number) {
        this.interval = interval || 60000;
    }

    getData(): string {
        return this.data;
    }

    getKey(): string {
        return 'platform';
    }

    startCollect(): void {
        this.data = navigator.platform;
    }

    finishCollect(): void {
        this.data = null;
    }

}