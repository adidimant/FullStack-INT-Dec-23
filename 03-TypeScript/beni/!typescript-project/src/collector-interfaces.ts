export interface Collector<T> {
  getData(): T | T[] | null;
  interval: number | undefined;
  startCollect(): void;
  finishCollect(): void;
}

export interface ContinuousCollector<T> extends Collector<T> {
  bufferSize?: number;
}
