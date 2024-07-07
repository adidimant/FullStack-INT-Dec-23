import { ContinuousCollector, dataAndTime } from "../../interfaces";
import { EventsManager, Utils } from "../../classes";

export class DeviceOrientation implements ContinuousCollector<dataAndTime> {
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
		return `DeviceOrientation`;
	}
	public async startCollect() {
		const event = await this.getDeviceOrientation()
		if(event){
			Utils.maintainLastXItems(this.data,this.bufferSize ?? 0,[event, Date.now()])
		}
	}
	private getDeviceOrientation() {
		return new Promise(resolve => {
		  window.addEventListener('deviceorientation', event => {
			resolve(event);
		  }, { once: true });
		});
	  }
	public finishCollect() {
		removeEventListener("devicemotion", this.eventKey)
	}
}
