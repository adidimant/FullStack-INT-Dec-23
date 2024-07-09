export interface Collector<T> {
    getData(): T | null | Array<T | null>;
    interval: number;
    getKey(): string;
    startCollect(): void;
    finishCollect(): void;
    SDK_ENABLED: boolean;
};

export interface DeviceMemoryCollectorType<T> extends Collector<number | 'unknown'> {
    getData(): number | 'unknown' | null;
};

/*export interface PlatformCollectorType<T> extends Collector<T | undefined> {
    getData(): T | undefined | null;
};*/

export interface NetworkInformation {
    downlink: number;
    downlinkMax: number;
    effectiveType: string;
    onchange: ((this: NetworkInformation, ev: Event) => any) | null;  // Event handler for network changes
    ontypechange: ((this: NetworkInformation, ev: Event) => any) | null;
    rtt: number;
    saveData: boolean;
    type: string;
}

export interface BatteryInformation {
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    level: number;
}