import { Collector, dataAndTime } from "../../interfaces";
import { EventsManager } from "../../classes";

export class Clipboard implements Collector<dataAndTime> {
	public interval: number;
	private data: dataAndTime[] = [];
	constructor(interval?: number) {
		this.interval = interval ?? EventsManager.getConfig().COLLECTORS_INTERVAL;
	}

	public getData() {
		return this.data.length > 0 ? this.data : null;
	}
	public getKey() {
		return `Clipboard`;
	}
	public startCollect() {
		this.data.push([navigator.clipboard, Date.now()]);
		(document.querySelector('#Clipboard-div') as HTMLDivElement).textContent = JSON.stringify(navigator.clipboard) ?? "";
	}
	public finishCollect() {
  }
}
