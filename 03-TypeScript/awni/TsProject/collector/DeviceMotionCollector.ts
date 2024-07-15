
import { ContinousCollector } from './Collector-Interface';
import { Utils } from './Utils';


export class DeviceMotionCollector implements ContinousCollector<any> {
    public interval: number;
    private data: Array<any>;
    public bufferSize: number;

    constructor(interval: number, bufferSize: number) {
        this.interval = interval || 60000;
        this.bufferSize = bufferSize || 40;
    }

    getData(): Array<any> {
        return this.data;
    }

    getKey(): string {
        return 'deviceMotion';
    }

    startCollect(): void {
        window.addEventListener('devicemotion', event => {
            this.data = Utils.maintainLastXItems(this.data, this.bufferSize, event);
        }, { once: true });
    }

    finishCollect(): void {
        this.data = null;
    }

    getLastItems(): Array<any> {
        return this.data;
    }

}