import { Collector, dataAndTime } from "../../interfaces";
import { EventsManager, Utils } from "../../classes";

export class Clipboard implements Collector<dataAndTime> {
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
		return `Clipboard`;
	}
	public async startCollect() {
		if (document.hasFocus()) {
			let clipboard = await navigator.clipboard.readText();
			const clipboardDiv = document.querySelector(
				"#Clipboard-div"
			) as HTMLDivElement;
			clipboardDiv.textContent = clipboard ?? "";
			this.eventKey = document.addEventListener("copy", async () => {
				clipboard = await navigator.clipboard.readText();
				Utils.maintainLastXItems(this.data, this.bufferSize ?? 0, [
					clipboard,
					Date.now(),
				]);
				clipboardDiv.textContent = clipboard ?? "";
			});
			this.data.push([clipboard, Date.now()]);
		}
	}
	public finishCollect() {
		removeEventListener("copy", this.eventKey);
	}
}
