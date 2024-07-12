import { Collector } from './collector';



export class CookiesEnabledCollector implements Collector<boolean> {
    public interval: number;
    private data: boolean;

    constructor(interval: number) {
        this.interval = interval || 60000;
    }

    getData(): boolean {
        return this.data;
    }

    getKey(): string {
        return 'cookiesEnabled';
    }

    startCollect(): void {
        this.data = navigator.cookieEnabled;
    }

    finishCollect(): void {
        this.data = null;
    }
}