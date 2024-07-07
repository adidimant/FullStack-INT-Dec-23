import { ContinuousCollector, dataAndTime } from "../../interfaces";
import { EventsManager,Utils } from "../../classes";

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
		this.eventKey = document.addEventListener("mousemove", (mousemoveEvent) => {
			Utils.maintainLastXItems(this.data,this.bufferSize ?? 0,[mousemoveEvent, Date.now()])
		});
	}
	public finishCollect() {
		removeEventListener("mousemove", this.eventKey);
	}
}
