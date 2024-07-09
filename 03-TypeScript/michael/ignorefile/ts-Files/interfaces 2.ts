// interfaces.ts

export interface Collector<T> {
    getData(): T | null;
    interval: number;
    getKey(): string;
    startCollect(): void;
    finishCollect(): void;
  }
  


  export interface SDKConfig {
    COLLECTORS_INTERVAL: number;
    SDK_ENABLED: boolean;
    DEFAULT_BUFFER_CONTINOUS_COLLECTORS?: number;
  }
  
  