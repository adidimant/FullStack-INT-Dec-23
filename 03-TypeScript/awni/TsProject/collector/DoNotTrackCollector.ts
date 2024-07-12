import { Collector } from './Collector-Interface';



export class DoNotTrackCollector implements Collector<string> {
    public interval: number;
    private data: string;

    constructor(interval: number) {
        this.interval = interval || 60000;
    }

    getData(): string {
        return this.data;
    }

    getKey(): string {
        return 'doNotTrack';
    }

    startCollect(): void {
        this.data = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
    }

    finishCollect(): void {
        this.data = null;
    }

}