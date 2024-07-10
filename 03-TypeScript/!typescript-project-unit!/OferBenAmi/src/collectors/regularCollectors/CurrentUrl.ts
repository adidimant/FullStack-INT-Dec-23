import { Collector, dataAndTime } from "../../interfaces";
import { EventsManager } from "../../classes";

export class CurrentUrl implements Collector<dataAndTime> {
	public interval: number;
	private data: dataAndTime[] = [];
	constructor(interval?: number) {
		this.interval = interval ?? EventsManager.getConfig().COLLECTORS_INTERVAL;
	}

	public getData() {
		return this.data.length > 0 ? this.data : null;
	}
	public getKey() {
		return `CurrentUrl`;
	}
	public startCollect() {
		this.data.push([window.location.href, Date.now()]);
		(document.querySelector('#CurrentUrl-div') as HTMLDivElement).textContent = window.location.href ?? "";

	}
	public finishCollect() {}
}
