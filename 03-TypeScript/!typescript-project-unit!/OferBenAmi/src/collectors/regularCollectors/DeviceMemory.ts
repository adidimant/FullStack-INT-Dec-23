import { Collector, dataAndTime } from "../../interfaces";
import { EventsManager } from "../../classes";

export class DeviceMemory implements Collector<dataAndTime> {
	public interval: number;
	private data: dataAndTime[] = [];
	constructor(interval?: number) {
		this.interval = interval ?? EventsManager.getConfig().COLLECTORS_INTERVAL;
	}

	public getData() {
		return this.data.length > 0 ? this.data : null;
	}
	public getKey() {
		return `DeviceMemory`;
	}
	public startCollect() {
		this.data.push([navigator.deviceMemory || 'unknown', Date.now()]);
		(document.querySelector('#DeviceMemory-div') as HTMLDivElement).textContent = String(navigator.deviceMemory + 'GB Ram') || 'unknown';
	}
	public finishCollect() {
  }
}
