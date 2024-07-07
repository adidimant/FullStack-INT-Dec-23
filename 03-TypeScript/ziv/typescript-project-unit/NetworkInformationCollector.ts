import { Collector } from './Collector';

export class NetworkInformationCollector implements Collector<any> {
    private data: any | null = null;
    private intervalId: number | null = null;
    private interval: number;

    constructor(interval: number = 60000) {
        this.interval = interval;
    }

    getData(): any | null {
        return this.data;
    }

    getKey(): string {
        return 'networkInformation';
    }

    startCollect(): void {
        this.collectNetworkInformation();
        this.intervalId = window.setInterval(() => {
            this.collectNetworkInformation();
        }, this.interval);
    }

    private collectNetworkInformation(): void {
        try {
            const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (connection) {
                this.data = {
                    downlink: connection.downlink,
                    effectiveType: connection.effectiveType,
                    rtt: connection.rtt,
                    saveData: connection.saveData,
                };
            } else {
                this.data = null;
            }
        } catch (error) {
            console.error('Error collecting network information:', error);
            this.data = null;
        }
    }

    finishCollect(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.data = null;
    }
}
