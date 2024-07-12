import { Collector } from './Collector-Interface';


export class LocalStorageEnabledCollector implements Collector<boolean> {
    public interval: number;
    private data: boolean;

    constructor(interval: number) {
        this.interval = interval || 60000;
    }

    getData(): boolean {
        return this.data;
    }

    getKey(): string {
        return 'localStorageEnabled';
    }

    startCollect(): void {
        this.data = typeof (Storage) !== 'undefined';
    }

    finishCollect(): void {
        this.data = null;
    }

}