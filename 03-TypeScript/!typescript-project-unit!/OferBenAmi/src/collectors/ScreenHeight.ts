import { Collector, dataAndTime } from "../interfaces";
import { EventsManager } from "../classes";

export class ScreenHeight implements Collector<dataAndTime> {
	public interval: number;
	private intervalKey: any;
	private data: dataAndTime[] = [];
	constructor(interval?: number) {
		this.interval = interval ?? EventsManager.getConfig().COLLECTORS_INTERVAL;
	}

	public getData() {
		return this.data.length > 0 ? this.data : null;
	}
	public getKey() {
		return `ScreenHeight`;
	}
	public startCollect() {
		this.data.push([screen.height, Date.now()]);
	}
	public finishCollect() {}
}
