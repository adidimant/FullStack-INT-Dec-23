import { Collector } from './Collector';

export class DeviceOrientationCollector implements Collector<DeviceOrientationEvent | null> {
    private data: (DeviceOrientationEvent | null)[];
    private intervalId: number | null = null;
    private interval: number;
    private bufferSize: number;

    constructor(interval: number, bufferSize: number = 40) {
        this.interval = interval;
        this.bufferSize = bufferSize;
        this.data = [];
    }

    getData(): DeviceOrientationEvent | null {
        return this.data.length > 0 ? this.data[this.data.length - 1] : null;
    }

    getKey(): string {
        return 'deviceOrientation';
    }

    startCollect(): void {
        this.intervalId = window.setInterval(() => {
            this.getDeviceOrientation().then(event => {
                try {
                    if (this.data.length >= this.bufferSize) {
                        this.data.shift();
                    }
                    this.data.push(event);
                    console.log('Device orientation event collected:', event);
                } catch (error) {
                    console.error('Error collecting device orientation event:', error);
                    this.data.push(null);
                }
            });
        }, this.interval);
    }

    async getDeviceOrientation(): Promise<DeviceOrientationEvent> {
        return new Promise(resolve => {
            window.addEventListener('deviceorientation', event => {
                resolve(event);
            }, { once: true });
        });
    }

    finishCollect(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.data = [];
    }
}
