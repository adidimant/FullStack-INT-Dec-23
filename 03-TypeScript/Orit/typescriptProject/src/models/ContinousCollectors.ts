// Import collector inteface:
import { Collector } from '../interfaces/ICollector';
import { ContinousCollector } from '../interfaces/IContinousCollector';
import { Utils } from '../utils/Utils';

// A class to monitor the screen width the user's device:
export class ScreenWidth implements Collector<number>, ContinousCollector<number> {
    public interval: number;
    public key: string;
    private data: number | number[] | null;
    public SDK_ENABLED: boolean;
    private collectionInterval: number | null; // needed as an ID for the interval
    public bufferSize?: number | undefined;
  
    constructor(key: string, SDK_ENABLED: boolean, interval: number, bufferSize?: number) {
        this.interval = interval || DEFAULT_INTERVAL;
        this.SDK_ENABLED = SDK_ENABLED;
        this.key = key;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the data to null when the class is first assigned.

        this.bufferSize = bufferSize; // continuous collector
    }
  
    getData(): number | number[] | null {
      return this.data;
    }
  
    startCollect(): void {
      // setInterval for collecting
      if (this.SDK_ENABLED) {
        this.collectionInterval = window.setInterval(() => { 
            this.data = screen.width;
            console.log('Collected data.');
            // TODO: push to array!
            // TODO: use utils function!
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

// A class to monitor the screen width the user's device:
export class ScreenHeight implements Collector<number>, ContinousCollector<number> {
    public interval: number;
    public key: string;
    private data: number | number[] | null;
    public SDK_ENABLED: boolean;
    private collectionInterval: number | null; // needed as an ID for the interval
    public bufferSize?: number | undefined;
  
    constructor(key: string, SDK_ENABLED: boolean, interval: number, bufferSize?: number) {
        this.interval = interval || DEFAULT_INTERVAL;
        this.SDK_ENABLED = SDK_ENABLED;
        this.key = key;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the data to null when the class is first assigned.

        this.bufferSize = bufferSize; // continuous collector
    }
  
    getData(): number | number[] | null {
      return this.data;
    }
  
    startCollect(): void {
      // setInterval for collecting
      if (this.SDK_ENABLED) {
        this.collectionInterval = window.setInterval(() => { 
            this.data = screen.height;
            console.log('Collected data.');
            // TODO: push to array!
            // TODO: use utils function!
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
