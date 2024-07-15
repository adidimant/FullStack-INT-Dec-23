import { Collector, dataAndTime } from "../../interfaces";
import { EventsManager } from "../../classes";

export class NetWorkInformation implements Collector<dataAndTime> {
	public interval: number;
	private data: dataAndTime[] = [];
	constructor(interval?: number) {
		this.interval = interval ?? EventsManager.getConfig().COLLECTORS_INTERVAL;
	}

	public getData() {
		return this.data.length > 0 ? this.data : null;
	}
	public getKey() {
		return `NetWorkInformation`;
	}
	public async startCollect() {
		const networkInfo = await this.getNetworkInformation()
		this.data.push([networkInfo, Date.now()]);
		(document.querySelector('#NetWorkInformation-div') as HTMLDivElement).textContent = JSON.stringify(networkInfo) ;
	}
	public finishCollect() {
  }
  private  getNetworkInformation() {
	return new Promise(resolve => {
	  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
	  resolve(connection);
	});
  }

}
