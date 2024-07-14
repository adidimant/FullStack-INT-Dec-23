export interface Collector<T> {
    interval: number;
    getData(): T | null;
    getKey(): string;
    startCollect(): void;
    finishCollect(): void;
};

export interface ContinousCollector<T> extends Collector<T> {
    bufferSize?: number
};