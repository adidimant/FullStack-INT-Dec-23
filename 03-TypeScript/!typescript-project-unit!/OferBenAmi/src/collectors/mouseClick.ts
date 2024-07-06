import { ContinuousCollector, dataAndTime } from "../interfaces";
import { EventsManager } from "../classes";

export class MouseClick implements ContinuousCollector<dataAndTime> {
	private eventKey: any;
	private data: dataAndTime[] = [];
	public bufferSize?: number | undefined;
	constructor( bufferSize?: number) {
		this.bufferSize =
			bufferSize ??
			EventsManager.getConfig().DEFAULT_BUFFER_CONTINOUS_COLLECTORS;
	}

	public getData() {
		return this.data.length > 0 ? this.data : null;
	}
	public getKey() {
		return `MouseClick`;
	}
	public startCollect() {
		// this.intervalKey = setInterval(() => {
		// 	if(this.data.length >= 50) {
		// 		this.data.shift();
		// 	}
		// 	this.data.push([navigator.language || navigator.userLanguage , Date.now()]);
		// }, this.interval);
		this.eventKey = document.addEventListener("click", (click: MouseEvent) => {
			if (this.data.length >=  (this.bufferSize ?? 0)) {
				this.data.shift();
			}
			this.data.push([click, Date.now()])
		});
	}
	public finishCollect() {
		removeEventListener("keypress", this.eventKey)
	}
}
