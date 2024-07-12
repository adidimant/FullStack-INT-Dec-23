
import { Collector } from './Collector-Interface';

export class UserAgentCollector implements Collector<string> {
    public interval: number;
    private data: string;

    constructor(interval: number) {
        this.interval = interval || 60000;
    }

    getData(): string {
        return this.data;
    }

    getKey(): string {
        return 'userAgent';
    }

    startCollect(): void {
        this.data = navigator.userAgent;
    }

    finishCollect(): void {
        this.data = '';
    }

}