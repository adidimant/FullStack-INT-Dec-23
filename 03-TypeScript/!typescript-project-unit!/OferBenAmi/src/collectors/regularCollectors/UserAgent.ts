import { Collector, dataAndTime } from "../../interfaces";
import { EventsManager } from "../../classes";

export class UserAgent implements Collector<dataAndTime> {
	public interval: number;
	private data: dataAndTime[] = [];
	constructor(interval?: number) {
		this.interval = interval ?? EventsManager.getConfig().COLLECTORS_INTERVAL;
	}

	public getData() {
		return this.data.length > 0 ? this.data : null;
	}
	public getKey() {
		return `UserAgent`;
	}
	public startCollect() {
		this.data.push([navigator.userAgent, Date.now()]);
		(document.querySelector('#UserAgent-div') as HTMLDivElement).textContent = navigator.userAgent ?? ""

	}
	public finishCollect() {
	}
}
