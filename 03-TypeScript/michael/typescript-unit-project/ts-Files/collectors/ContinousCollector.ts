import { Collector } from './Collector';

export interface ContinousCollector<T> extends Collector<T> {
    bufferSize?: number;
  }
  