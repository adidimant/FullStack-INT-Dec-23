import { ContinuousCollector, dataAndTime } from "../interfaces";
import { EventsManager } from "../classes";

export class MouseMove implements ContinuousCollector<dataAndTime> {
	private eventKey: any;
	private data: dataAndTime[] = [];
	public bufferSize?: number | undefined;
	constructor(bufferSize?: number) {
		this.bufferSize =
			bufferSize ??
			EventsManager.getConfig().DEFAULT_BUFFER_CONTINOUS_COLLECTORS;
	}

	public getData() {
		return this.data.length > 0 ? this.data : null;
	}
	public getKey() {
		return `MouseMove`;
	}
	public startCollect() {
		// this.intervalKey = setInterval(() => {
		// 	if(this.data.length >= 50) {
		// 		this.data.shift();
		// 	}
		// 	this.data.push([navigator.language || navigator.userLanguage , Date.now()]);
		// }, this.interval);
		this.eventKey = document.addEventListener("mousemove", (mousemoveEvent) => {
			if (this.data.length >= 50) {
				this.data.shift();
			}
			this.data.push([mousemoveEvent, Date.now()]);
		});
	}
	public finishCollect() {
		removeEventListener("mousemove", this.eventKey);
	}
}
