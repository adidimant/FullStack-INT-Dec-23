
import { ContinousCollector } from './Collector-Interface';
import { Utils } from './Utils';


export class ClickCollector implements ContinousCollector<any> {
    public interval: number;
    private data: Array<any>;
    public bufferSize: number;

    constructor(interval: number, bufferSize: number) {
        this.interval = interval || 60000;
        this.bufferSize = bufferSize || 10;
    }

    getData(): Array<any> {
        return this.data;
    }

    getKey(): string {
        return 'click';
    }

    startCollect(): void {
        document.addEventListener('click', (clickEvent) => {
            this.data = Utils.maintainLastXItems(this.data, this.bufferSize, clickEvent);
        });
    }

    finishCollect(): void {
        this.data = null;
    }

    getLastItems(): Array<any> {
        return this.data;
    }

}