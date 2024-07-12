import { Collector } from './Collector-Interface';



export class ScreenWidthCollector implements Collector<number> {
    public interval: number;
    private data: number | null;

    constructor(interval: number) {
        this.interval = interval || 60000;
    }

    getData(): number {
        return this.data || 0;
    }

    getKey(): string {
        return 'screenWidth';
    }

    startCollect(): void {
        this.data = screen.width;
    }

    finishCollect(): void {
        this.data = null;
    }

}



export class ScreenHeightCollector implements Collector<number | null> {
    public interval: number;
    private data: number | null;

    constructor(interval: number) {
        this.interval = interval || 60000;
    }

    getData(): number | null {
        return this.data;
    }

    getKey(): string {
        return 'screenHeight';
    }

    startCollect(): void {
        this.data = screen.height;
    }

    finishCollect(): void {
        this.data = null;
    }
}