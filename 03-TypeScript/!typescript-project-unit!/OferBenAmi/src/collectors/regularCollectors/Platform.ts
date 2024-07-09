import { Collector, dataAndTime } from "../../interfaces";
import { EventsManager } from "../../classes";

export class Platform implements Collector<dataAndTime> {
	public interval: number;
	private data: dataAndTime[] = [];
	constructor(interval?: number) {
		this.interval = interval ?? EventsManager.getConfig().COLLECTORS_INTERVAL;
	}

	public getData() {
		return this.data.length > 0 ? this.data : null;
	}
	public getKey() {
		return `Platform`;
	}
	public startCollect() {
		this.data.push([navigator.platform, Date.now()]);
		(document.querySelector('#Platform-div') as HTMLDivElement).textContent = navigator.platform ?? "";
	}
	public finishCollect() {
  }
}
