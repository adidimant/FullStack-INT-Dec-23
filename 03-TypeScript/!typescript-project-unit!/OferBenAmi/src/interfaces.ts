export interface Config {
	DEFAULT_BUFFER_CONTINOUS_COLLECTORS: number;
	COLLECTORS_INTERVAL: number;
	SDK_ENABLED: boolean;
}

export interface CollectedData {
  [key: string]: any; // or specify a more specific type if known
}
export interface Collector<T>{
	getData: () => T[] | null;
	interval?: number;
	getKey: () => string;
	startCollect:() => void;
	finishCollect: () => void;

}

export interface ContinuousCollector<T> extends Collector<T>{
	bufferSize?: number;
}

export type dataAndTime = [data: any, time: number]
 