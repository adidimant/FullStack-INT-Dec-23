import { Collector, dataAndTime } from "../interfaces";
import { EventsManager } from "../classes";

export class TimeZone implements Collector<dataAndTime> {
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
		return `TimeZone`;
	}
	public startCollect() {
			this.data.push([Intl.DateTimeFormat().resolvedOptions().timeZone, Date.now()]);
	}
	public finishCollect() {
	}
}
