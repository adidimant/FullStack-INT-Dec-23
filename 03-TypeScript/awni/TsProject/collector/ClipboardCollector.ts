import { Collector } from './Collector-Interface';


export class ClipboardCollector implements Collector<any> {
    public interval: number;
    private data: any;

    constructor(interval: number) {
        this.interval = interval || 60000;
    }

    getData(): any {
        return this.data;
    }

    getKey(): string {
        return 'clipboard';
    }

    startCollect(): void {
        this.data = navigator.clipboard;
    }

    finishCollect(): void {
        this.data = null;
    }

}