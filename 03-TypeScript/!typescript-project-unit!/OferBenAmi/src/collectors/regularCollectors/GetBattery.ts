import { Collector, dataAndTime } from "../../interfaces";
import { EventsManager } from "../../classes";

export class GetBattery implements Collector<dataAndTime> {
	public interval: number;
	private data: dataAndTime[] = [];
	constructor(interval?: number) {
		this.interval = interval ?? EventsManager.getConfig().COLLECTORS_INTERVAL;
	}

	public getData() {
		return this.data.length > 0 ? this.data : null;
	}
	public getKey() {
		return `GetBattery`;
	}
	public startCollect() {
		navigator.getBattery().then(battery => {
			const batteryStr = `Battery Level: ${battery.level * 100}%, Battery Charging: ${battery.charging}`
			this.data.push([batteryStr, Date.now()]);
			(document.querySelector('#GetBattery-div') as HTMLDivElement).textContent = batteryStr ?? '';
		  });
	}
	public finishCollect() {
  }
}
