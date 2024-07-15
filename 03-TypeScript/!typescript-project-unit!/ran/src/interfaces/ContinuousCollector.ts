import { Collector } from './Collector';

export interface ContinuousCollector<T> extends Collector<T[]> {
  bufferSize: number;
}