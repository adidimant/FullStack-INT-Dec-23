export interface Collector<T> {
  getData(): T | null;
  interval: number;
  getKey(): string;
  startCollect(): void;
  finishCollect(): void;
}