import { Collector } from './Collector-Interface';



export class JavaScriptEnabledCollector implements Collector<boolean> {
    public interval: number;
    private data: boolean;

    constructor(interval: number) {
        this.interval = interval || 60000;
    }

    getData(): boolean {
        return this.data;
    }

    getKey(): string {
        return 'javaScriptEnabled';
    }

    startCollect(): void {
        this.data = typeof navigator.javaEnabled === 'function' && navigator.javaEnabled();
    }

    finishCollect(): void {
        this.data = null;
    }

}
