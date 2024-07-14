import { ContinousCollector } from './Collector-Interface';
import { Utils } from './Utils';





export class MouseMoveCollector implements ContinousCollector<any> {
    public interval: number;
    private data: Array<any>;
    public bufferSize: number;

    constructor(interval: number, bufferSize: number) {
        this.interval = interval || 60000;
        this.bufferSize = bufferSize || 50;
    }

    getData(): Array<any> {
        return this.data;
    }

    getKey(): string {
        return 'mouseMove';
    }

    startCollect(): void {
        document.addEventListener('mousemove', (mousemoveEvent) => {
            this.data = Utils.maintainLastXItems(this.data, this.bufferSize, mousemoveEvent);
        });
    }

    finishCollect(): void {
        this.data = null;
    }

    getLastItems(): Array<any> {
        return this.data;
    }

}