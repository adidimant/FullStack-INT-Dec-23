import { Collector, dataAndTime } from "../../interfaces";
import { EventsManager } from "../../classes";

export class LocalStorageAvailable implements Collector<dataAndTime> {
	public interval: number;
	private data: dataAndTime[] = [];
	constructor(interval?: number) {
		this.interval = interval ?? EventsManager.getConfig().COLLECTORS_INTERVAL;
	}

	public getData() {
		return this.data.length > 0 ? this.data : null;
	}
	public getKey() {
		return `LocalStorageAvailable`;
	}
	public startCollect() {
		this.data.push([typeof(Storage) !== 'undefined', Date.now()]);
		(document.querySelector('#LocalStorageAvailable-div') as HTMLDivElement).textContent = (String(typeof(Storage) !== 'undefined')) ?? "";
	}
	public finishCollect() {
  }
}
