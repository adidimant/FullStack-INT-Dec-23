import { Collector } from './Collector-Interface';


export class GeolocationCollector implements Collector<any> {
    public interval: number;
    private data: any;

    constructor(interval: number) {
        this.interval = interval || 60000;
    }

    getData(): any {
        return this.data;
    }

    getKey(): string {
        return 'geolocation';
    }

    startCollect(): void {
        navigator.geolocation.getCurrentPosition((position) => {
            this.data = position;
        }, (error) => {
            this.data = error;
        });
    }

    finishCollect(): void {
        this.data = null;
    }

}
