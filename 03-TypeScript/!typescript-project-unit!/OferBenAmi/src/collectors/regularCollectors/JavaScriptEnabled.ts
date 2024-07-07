import { Collector, dataAndTime } from "../../interfaces";
import { EventsManager } from "../../classes";

export class JavaScriptEnabled implements Collector<dataAndTime> {
	public interval: number;
	private data: dataAndTime[] = [];
	constructor(interval?: number) {
		this.interval = interval ?? EventsManager.getConfig().COLLECTORS_INTERVAL;
	}

	public getData() {
		return this.data.length > 0 ? this.data : null;
	}
	public getKey() {
		return `JavaScriptEnabled`;
	}
	public startCollect() {
		this.data.push([typeof navigator.javaEnabled === 'function' && navigator.javaEnabled(), Date.now()]);
		(document.querySelector('#JavaScriptEnabled-div') as HTMLDivElement).textContent = (String(typeof navigator.javaEnabled === 'function' && navigator.javaEnabled())) ?? "";
	}
	public finishCollect() {
  }
}
