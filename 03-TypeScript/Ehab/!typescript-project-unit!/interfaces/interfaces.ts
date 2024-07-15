export interface Collector<T> {
    interval: number;
    getData(): T | T[] | null;
    getKey(): string;
    startCollect(): void;
    finishCollect(): void;
}
  
export interface ContinuousCollector<T> {
    bufferSize?: number;
}