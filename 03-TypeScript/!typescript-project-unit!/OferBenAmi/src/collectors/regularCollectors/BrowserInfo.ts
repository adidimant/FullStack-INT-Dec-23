import { Collector, dataAndTime } from "../../interfaces";
import { EventsManager } from "../../classes";

export class BrowserInfo implements Collector<dataAndTime> {
	public interval: number;
	private data: dataAndTime[] = [];
	constructor(interval?: number) {
		this.interval = interval ?? EventsManager.getConfig().COLLECTORS_INTERVAL;
	}

	public getData() {
		return this.data.length > 0 ? this.data : null;
	}
	public getKey() {
		return `BrowserInfo`;
	}
	public startCollect() {
		const browserInfo = (function() {
			const ua = navigator.userAgent;
			let tem: any ;
			let M: any  = ua.match(/(opera|chrome|safari|firefox|msie|trident\/?\s)(\d+)/i) || [];

			if (/trident/i.test(M[1])) {
			  tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
			  return 'IE ' + (tem[1] || '');
			}

			if (M[1] === 'Chrome') {
			  tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
			  if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
			}

			M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];

			if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);

			return M.join(' ');
		  })();

		this.data.push([browserInfo, Date.now()]);
		(document.querySelector('#BrowserInfo-div') as HTMLDivElement).textContent = JSON.stringify(browserInfo) ?? "";
	}
	public finishCollect() {
  }
}
