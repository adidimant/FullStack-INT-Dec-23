
import { Collector } from './Collector-Interface';

export class TimeZoneCollector implements Collector<string> {
    public interval: number;
    private data: string;

    constructor(interval: number) {
        this.interval = interval || 60000;
    }

    getData(): string {
        return this.data;
    }

    getKey(): string {
        return 'timeZone';
    }

    startCollect(): void {
        this.data = Intl.DateTimeFormat().resolvedOptions().timeZone;
    }

    finishCollect(): void {
        this.data = '';
    }

}