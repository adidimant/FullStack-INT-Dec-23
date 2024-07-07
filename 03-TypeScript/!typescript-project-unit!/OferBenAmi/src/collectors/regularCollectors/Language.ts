import { Collector, dataAndTime } from "../../interfaces";
import { EventsManager } from "../../classes";

export class Language implements Collector<dataAndTime> {
	public interval: number;
	private data: dataAndTime[] = [];
	constructor(interval?: number) {
		this.interval = interval ?? EventsManager.getConfig().COLLECTORS_INTERVAL;
	}

	public getData() {
		return this.data.length > 0 ? this.data : null;
	}
	public getKey() {
		return `Language`;
	}
	public startCollect() {
		this.data.push([navigator.language || navigator.userLanguage, Date.now()]);
		(document.querySelector('#language-div') as HTMLDivElement).textContent = (navigator.language || navigator.userLanguage) ?? "";
	}
	public finishCollect() {
  }
}
