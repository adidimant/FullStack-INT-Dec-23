import { Collector, dataAndTime } from "../../interfaces";
import { EventsManager } from "../../classes";

export class Plugins implements Collector<dataAndTime> {
	public interval: number;
	private data: dataAndTime[] = [];
	constructor(interval?: number) {
		this.interval = interval ?? EventsManager.getConfig().COLLECTORS_INTERVAL;
	}

	public getData() {
		return this.data.length > 0 ? this.data : null;
	}
	public getKey() {
		return `Plugins`;
	}
	public startCollect() {
		const plugins = Array.from(navigator.plugins).map(plugin => plugin.name)
		this.data.push([plugins, Date.now()]);
		(document.querySelector('#Plugins-div') as HTMLDivElement).textContent = String(plugins) || 'unknown';
	}
	public finishCollect() {
  }
}
