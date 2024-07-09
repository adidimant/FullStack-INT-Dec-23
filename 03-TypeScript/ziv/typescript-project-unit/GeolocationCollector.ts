import { Collector } from './Collector';

export class GeolocationCollector implements Collector<{ latitude: number, longitude: number } | null> {
    private data: { latitude: number, longitude: number } | null = null;
    private intervalId: number | null = null;
    private interval: number;

    constructor(interval: number = 60000) {
        this.interval = interval;
    }

    getData(): { latitude: number, longitude: number } | null {
        return this.data;
    }

    getKey(): string {
        return 'geolocation';
    }

    startCollect(): void {
        this.intervalId = window.setInterval(() => {
            try {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.data = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    };
                }, (error) => {
                    console.error('Error collecting geolocation data:', error);
                    this.data = null;
                });
            } catch (error) {
                console.error('Error collecting geolocation data:', error);
                this.data = null;
            }
        }, this.interval);
    }

    finishCollect(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.data = null;
    }
}
