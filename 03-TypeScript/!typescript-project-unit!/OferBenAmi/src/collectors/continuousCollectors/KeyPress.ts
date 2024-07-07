import { ContinuousCollector, dataAndTime } from "../../interfaces";
import { EventsManager, Utils } from "../../classes";

export class KeyPress implements ContinuousCollector<dataAndTime> {
	private eventKey: any;
	private data: dataAndTime[] = [];
	public bufferSize?: number | undefined;
	constructor(bufferSize?: number) {
		this.bufferSize = bufferSize ?? EventsManager.getConfig().DEFAULT_BUFFER_CONTINOUS_COLLECTORS ;
	}

	public getData() {
		return this.data.length > 0 ? this.data : null;
	}
	public getKey() {
		return `KeyPress`;
	}
	public startCollect() {
		this.eventKey = document.addEventListener("keypress", (keypress: KeyboardEvent) => {
			Utils.maintainLastXItems(this.data,this.bufferSize ?? 0,[keypress, Date.now()])
		});
	}
	public finishCollect() {
		removeEventListener("keypress", this.eventKey)
	}
}
