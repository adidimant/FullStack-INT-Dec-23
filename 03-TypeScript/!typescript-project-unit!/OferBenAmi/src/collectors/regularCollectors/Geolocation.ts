import { Collector, dataAndTime } from "../../interfaces";
import { EventsManager } from "../../classes";

export class Geolocation implements Collector<dataAndTime> {
	public interval: number;
	private data: dataAndTime[] = [];
	constructor(interval?: number) {
		this.interval = interval ?? EventsManager.getConfig().COLLECTORS_INTERVAL;
	}

	public getData() {
		return this.data.length > 0 ? this.data : null;
	}
	public getKey() {
		return `Geolocation`;
	}
	public startCollect() {
		let location = ""

		navigator.geolocation.getCurrentPosition(
			(position) => {
				location = `${position.coords.latitude}, ${position.coords.longitude}`
			},
			(error) => {
				console.log("Geolocation Error:", error.message);
			}
		);
		setTimeout(() => {
			this.data.push([location, Date.now()]);
			(
				document.querySelector("#Geolocation-div") as HTMLDivElement
			).textContent = location ?? "";
		}, 50);
	}
	public finishCollect() {}
}
