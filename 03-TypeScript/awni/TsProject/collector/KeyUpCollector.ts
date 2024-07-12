
import { ContinousCollector } from './Collector-Interface';
import { Utils } from './Utils';



export class KeyUpCollector implements ContinousCollector<any> {
    public interval: number;
    private data: Array<any> = [];
    public bufferSize: number;

    constructor(interval: number, bufferSize: number) {
        this.interval = interval || 60000;
        this.bufferSize = bufferSize || 50;
    }

    getData(): Array<any> {
        return this.data;
    }

    getKey(): string {
        return 'keyUp';
    }

    startCollect(): void {
        document.addEventListener('keyup', (keyupEvent) => {
            this.data = Utils.maintainLastXItems(this.data, this.bufferSize, keyupEvent);
        });
    }

    finishCollect(): void {
        this.data = [];
    }

    getLastItems(): Array<any> {
        return this.data;
    }

}