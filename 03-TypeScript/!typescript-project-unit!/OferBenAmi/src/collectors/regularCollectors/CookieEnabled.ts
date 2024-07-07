import { Collector, dataAndTime } from "../../interfaces";
import { EventsManager } from "../../classes";

export class CookieEnabled implements Collector<dataAndTime> {
	public interval: number;
	private data: dataAndTime[] = [];
	constructor(interval?: number) {
		this.interval = interval ?? EventsManager.getConfig().COLLECTORS_INTERVAL;
	}

	public getData() {
		return this.data.length > 0 ? this.data : null;
	}
	public getKey() {
		return `CookieEnabled`;
	}
	public startCollect() {
		this.data.push([navigator.cookieEnabled, Date.now()]);
		(document.querySelector('#CookieEnabled-div') as HTMLDivElement).textContent = (String(navigator.cookieEnabled)) ?? "";
	}
	public finishCollect() {
  }
}
