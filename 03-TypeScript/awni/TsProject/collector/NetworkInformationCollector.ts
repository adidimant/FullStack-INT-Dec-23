
import { Collector } from './Collector-Interface';


export class NetworkInformationCollector implements Collector<any> {
    public interval: number;
    private data: any;

    constructor(interval: number) {
        this.interval = interval || 60000;
    }

    getData(): any {
        return this.data;
    }

    getKey(): string {
        return 'networkInformation';
    }

    startCollect(): void {
        this.data = navigator.connection;
    }

    finishCollect(): void {
        this.data = null;
    }

}
