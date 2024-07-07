import { ContinuousCollector, dataAndTime } from "../../interfaces";
import { EventsManager,Utils } from "../../classes";

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

		this.eventKey = document.addEventListener("click", (click: MouseEvent) => {
			Utils.maintainLastXItems(this.data,this.bufferSize ?? 0,[click, Date.now()])
		});


	}
	public finishCollect() {
		removeEventListener("keypress", this.eventKey)
	}
}
