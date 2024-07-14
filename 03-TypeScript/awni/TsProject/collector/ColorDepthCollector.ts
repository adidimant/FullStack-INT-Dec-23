import { Collector } from './Collector-Interface';



export class ColorDepthCollector implements Collector<number> {
    public interval: number;
    private data: number;

    constructor(interval: number) {
        this.interval = interval || 60000;
    }

    getData(): number {
        return this.data;
    }

    getKey(): string {
        return 'colorDepth';
    }

    startCollect(): void {
        this.data = screen.colorDepth;
    }

    finishCollect(): void {
        this.data = null;
    }

}
