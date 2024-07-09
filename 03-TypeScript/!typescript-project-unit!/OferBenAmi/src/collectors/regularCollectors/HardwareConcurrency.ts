import { Collector, dataAndTime } from "../../interfaces";
import { EventsManager } from "../../classes";

export class HardwareConcurrency implements Collector<dataAndTime> {
	public interval: number;
	private data: dataAndTime[] = [];
	constructor(interval?: number) {
		this.interval = interval ?? EventsManager.getConfig().COLLECTORS_INTERVAL;
	}

	public getData() {
		return this.data.length > 0 ? this.data : null;
	}
	public getKey() {
		return `HardwareConcurrency`;
	}
	public startCollect() {
		this.data.push([navigator.hardwareConcurrency, Date.now()]);
		(document.querySelector('#HardwareConcurrency-div') as HTMLDivElement).textContent = String(navigator.hardwareConcurrency) ?? "";
	}
	public finishCollect() {
  }
}
