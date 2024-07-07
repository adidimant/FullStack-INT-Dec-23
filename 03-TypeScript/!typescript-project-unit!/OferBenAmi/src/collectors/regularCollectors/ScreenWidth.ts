import { Collector, dataAndTime } from "../../interfaces";
import { EventsManager } from "../../classes";

export class ScreenWidth implements Collector<dataAndTime> {
	public interval: number;
	private data: dataAndTime[] = [];
	constructor(interval?: number) {
		this.interval = interval ?? EventsManager.getConfig().COLLECTORS_INTERVAL;
	}

	public getData() {
		return this.data.length > 0 ? this.data : null;
	}
	public getKey() {
		return `ScreenWidth`;
	}
	public startCollect() {
		this.data.push([screen.width, Date.now()]);
		(document.querySelector('#ScreenWidth-div') as HTMLDivElement).textContent = (String(screen.width)) ?? "";

	}
	public finishCollect() {}
}
