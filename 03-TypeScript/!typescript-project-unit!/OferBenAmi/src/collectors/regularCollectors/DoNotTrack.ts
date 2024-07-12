import { Collector, dataAndTime } from "../../interfaces";
import { EventsManager } from "../../classes";

export class DoNotTrack implements Collector<dataAndTime> {
	public interval: number;
	private data: dataAndTime[] = [];
	constructor(interval?: number) {
		this.interval = interval ?? EventsManager.getConfig().COLLECTORS_INTERVAL;
	}

	public getData() {
		return this.data.length > 0 ? this.data : null;
	}
	public getKey() {
		return `DoNotTrack`;
	}
	public startCollect() {
		const track = (navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack) ?? "Cannot get Data"
		this.data.push([String(track), Date.now()]);
		(document.querySelector('#DoNotTrack-div') as HTMLDivElement).textContent = String(track) ?? "";
	}
	public finishCollect() {
  }
}
