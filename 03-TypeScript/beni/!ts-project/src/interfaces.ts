export interface ConfigDataInterface {
  COLLECTORS_INTERVAL: number;
  DEFAULT_BUFFER_CONTINOUS_COLLECTORS: number;
  SDK_ENABLED: boolean;
}

export interface CollectorInterface<T> {
  intervalCount: number;
  getData: () => T | T[] | null;
  getKey: () => string;
  startCollect: () => Promise<void>;
  finishCollect: () => void;
}

export interface ContinuousCollectorInterface<T> extends CollectorInterface<T> {
  bufferSize?: number;
}
