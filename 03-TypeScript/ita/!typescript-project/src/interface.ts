export interface Collector<T> {
    getData: () => T | T[] | null;
    getKey: () => string;
    intervalTime: number;
    startCollect: () => void;
    finishCollect: () => void;
}

export interface ContinousCollector<T> {
    bufferSize?: number;
    eventArray: T[] | T;
}

export interface BatteryData {
    charging?: boolean;
    chargingTime?: number;
    dischargingTime?: number;
    level?: number;
    onchargingchange?: ((this: BatteryData, ev: Event) => any) | null;
    onchargingtimechange?: ((this: BatteryData, ev: Event) => any) | null;
    ondischargingtimechange?: ((this: BatteryData, ev: Event) => any) | null;
    onlevelchange?: ((this: BatteryData, ev: Event) => any) | null;
}

export interface Geolocation {
    latitude: number;
    longitude: number;
}

export interface NetworkInformation {
    downlink: number;
    downlinkMax: number;
    effectiveType: string;
    rtt: number;
    saveData: boolean;
    type: string;
    
} 

export interface DataObjectCollector {
    [key: string]: any
}

