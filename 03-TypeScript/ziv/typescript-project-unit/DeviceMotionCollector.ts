import { Collector } from './Collector';

export class DeviceMotionCollector implements Collector<DeviceMotionEvent | null> {
    private data: (DeviceMotionEvent | null)[];
    private intervalId: number | null = null;
    private interval: number;
    private bufferSize: number;

    constructor(interval: number, bufferSize: number = 40) {
        this.interval = interval;
        this.bufferSize = bufferSize;
        this.data = [];
    }

    getData(): DeviceMotionEvent | null {
        return this.data.length > 0 ? this.data[this.data.length - 1] : null;
    }

    getKey(): string {
        return 'deviceMotion';
    }

    startCollect(): void {
        this.intervalId = window.setInterval(() => {
            this.getDeviceMotion().then(event => {
                try {
                    if (this.data.length >= this.bufferSize) {
                        this.data.shift();
                    }
                    this.data.push(event);
                    console.log('Device motion event collected:', event);
                } catch (error) {
                    console.error('Error collecting device motion event:', error);
                    this.data.push(null);
                }
            });
        }, this.interval);
    }

    async getDeviceMotion(): Promise<DeviceMotionEvent> {
        return new Promise(resolve => {
            window.addEventListener('devicemotion', event => {
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
