export interface Collector<T> {
    getData(): T | null;
    getKey(): string;
    startCollect(): void;
    finishCollect(): void;
}
