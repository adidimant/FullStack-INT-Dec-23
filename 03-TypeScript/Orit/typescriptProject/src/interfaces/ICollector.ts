export interface Collector<T> {
    getData(): T | T[] | null;
    interval: number;
    getKey(): string;
    startCollect(): void;
    finishCollect(): void;
    SDK_ENABLED: boolean;
}