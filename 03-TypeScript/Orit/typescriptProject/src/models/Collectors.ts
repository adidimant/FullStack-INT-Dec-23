// Import collector inteface:
import { Collector } from '../interfaces/ICollector';

const DEFAULT_INTERVAL = 1000; // Default interval in milliseconds

// A class to monitor the number of logical processor cores available on the user's device:
export class HardwareConcurrency implements Collector<number> {
    public interval: number;
    public key: string;
    private data: number | number[] | null;
    public SDK_ENABLED: boolean;
    private collectionInterval: number | null; // needed as an ID for the interval
  
    constructor(key: string, SDK_ENABLED: boolean, interval: number) {
      this.interval = interval || DEFAULT_INTERVAL;
      this.SDK_ENABLED = SDK_ENABLED;
      this.key = key;
      this.data = null; // initializing the data to null when the class is first assigned.
      this.collectionInterval = null; // initializing the data to null when the class is first assigned.
    }
  
    getData(): number | number[] | null {
      return this.data;
    }
  
    startCollect(): void {
      // setInterval for collecting
      if (this.SDK_ENABLED) {
        this.collectionInterval = window.setInterval(() => { 
            this.data = navigator.hardwareConcurrency;
            console.log('Collected data.');
            // TODO: push to array!
        }, this.interval);
      }
    }
  
    finishCollect(): void {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }

    getKey(): string {
        return this.key;
    }
}

// A class to monitor the users device platform:
export class Platform implements Collector<string> {
    private data: string | string[] | null;
    public key: string;
    public SDK_ENABLED: boolean;
    public interval: number;
    private collectionInterval: number | null;

    constructor(key: string, SDK_ENABLED: boolean, interval: number) {
        this.interval = interval || DEFAULT_INTERVAL;
        this.SDK_ENABLED = SDK_ENABLED;
        this.key = key;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collectionInterval to null when the class is first assigned.
    }

    getData(): string | string[] | null {
        return this.data;
    }

    getKey(): string {
        return this.key;
    }

    startCollect(): void {
        // setInterval for collecting
        if (this.SDK_ENABLED) {
            this.collectionInterval = window.setInterval(() => { 
                this.data = navigator.platform; //this is depreciated!
                console.log('Collected data.');
                // TODO: push to array!
            }, this.interval);
        }
    }

    finishCollect(): void {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}

// A class to monitor the users device memory:
export class DeviceMemory implements Collector<number> {
    private data: number | number[] | null;
    public key: string;
    public SDK_ENABLED: boolean;
    public interval: number;
    private collectionInterval: number | null;

    constructor(key: string, SDK_ENABLED: boolean, interval: number) {
        this.interval = interval || DEFAULT_INTERVAL;
        this.SDK_ENABLED = SDK_ENABLED;
        this.key = key;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collectionInterval to null when the class is first assigned.
    }

    getData(): number | number[] | null {
        return this.data;
    }

    getKey(): string {
        return this.key;
    }

    startCollect(): void {
        // setInterval for collecting
        if (this.SDK_ENABLED) {
            this.collectionInterval = window.setInterval(() => { 
                this.data = navigator.deviceMemory || 'unknown'; // Sometimes does not exist
                console.log('Collected data.');
                // TODO: push to array!
            }, this.interval);
        }
    }

    finishCollect(): void {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
