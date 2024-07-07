import { Collector, dataAndTime } from "../../interfaces";
import { EventsManager } from "../../classes";

export class OnLine implements Collector<dataAndTime> {
	public interval: number;
	private data: dataAndTime[] = [];
	constructor(interval?: number) {
		this.interval = interval ?? EventsManager.getConfig().COLLECTORS_INTERVAL;
	}

	public getData() {
		return this.data.length > 0 ? this.data : null;
	}
	public getKey() {
		return `OnLine`;
	}
	public startCollect() {
		this.data.push([navigator.onLine, Date.now()]);
		(document.querySelector('#OnLine-div') as HTMLDivElement).textContent = (String(navigator.onLine)) ?? "";
	}
	public finishCollect() {
  }
}
