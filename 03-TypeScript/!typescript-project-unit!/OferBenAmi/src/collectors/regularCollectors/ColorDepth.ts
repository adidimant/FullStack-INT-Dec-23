import { Collector, dataAndTime } from "../../interfaces";
import { EventsManager } from "../../classes";

export class ColorDepth implements Collector<dataAndTime> {
	public interval: number;
	private data: dataAndTime[] = [];
	constructor(interval?: number) {
		this.interval = interval ?? EventsManager.getConfig().COLLECTORS_INTERVAL;
	}

	public getData() {
		return this.data.length > 0 ? this.data : null;
	}
	public getKey() {
		return `ColorDepth`;
	}
	public startCollect() {
		this.data.push([screen.colorDepth, Date.now()]);
		(document.querySelector('#ColorDepth-div') as HTMLDivElement).textContent = String(screen.colorDepth) ?? "";

	}
	public finishCollect() {}
}
