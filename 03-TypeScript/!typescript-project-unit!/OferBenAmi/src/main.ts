import { Config } from "./interfaces";
import {
	Collector,
	ContinuousCollector,
	dataAndTime,
	CollectedData,
} from "./interfaces";
import { Utils } from "./classes";
import { acmeSdkLoaded } from "./customEvents";
import { ScreenHeight } from "./collectors/regularCollectors/ScreenHeight";
import { ScreenWidth } from "./collectors/regularCollectors/ScreenWidth";
import { EventsManager } from "./classes";
import { Language } from "./collectors/regularCollectors/Language";
import { UserAgent } from "./collectors/regularCollectors/UserAgent";
import { MouseMove } from "./collectors/continuousCollectors/MouseMove";
import { KeyPress } from "./collectors/continuousCollectors/KeyPress";
import { MouseClick } from "./collectors/continuousCollectors/mouseClick";
import { DeviceMotion } from "./collectors/continuousCollectors/DeviceMotion";
import { DeviceOrientation } from "./collectors/continuousCollectors/DeviceOrientation";
import { TimeZone } from "./collectors/regularCollectors/TimeZone";
import { CookieEnabled } from "./collectors/regularCollectors/CookieEnabled";
import { JavaScriptEnabled } from "./collectors/regularCollectors/JavaScriptEnabled";
import { OnLine } from "./collectors/regularCollectors/OnLine";
import { Referrer } from "./collectors/regularCollectors/Referrer";
import { LocalStorageAvailable } from "./collectors/regularCollectors/LocalStorageAvailable";
import { NetWorkInformation } from "./collectors/regularCollectors/NetWorkInformation";
import { Clipboard } from "./collectors/continuousCollectors/Clipboard";
import { BrowserInfo } from "./collectors/regularCollectors/BrowserInfo";
import { Platform } from "./collectors/regularCollectors/Platform";
import { DeviceMemory } from "./collectors/regularCollectors/DeviceMemory";
import { HardwareConcurrency } from "./collectors/regularCollectors/HardwareConcurrency";
import { Plugins } from "./collectors/regularCollectors/Plugins";
import { Geolocation } from "./collectors/regularCollectors/Geolocation";
import { DoNotTrack } from "./collectors/regularCollectors/DoNotTrack";
import { GetBattery } from "./collectors/regularCollectors/GetBattery";
import { CurrentUrl } from "./collectors/regularCollectors/CurrentUrl";
import { historyLength } from "./collectors/regularCollectors/HistoryLength";
import { ColorDepth } from "./collectors/regularCollectors/ColorDepth";
import { TouchSupport } from "./collectors/regularCollectors/TouchSupport";
const config: Config = {
	COLLECTORS_INTERVAL: 60000,
	DEFAULT_BUFFER_CONTINOUS_COLLECTORS: 50,
	SDK_ENABLED: true,
}; // fake data

document.addEventListener("acme-sdk-loaded", (e: Event) => {
	console.log((e as CustomEvent).detail.text);
});

function main() {
	Utils.fetch(config);
	const Collectors: (
		| Collector<dataAndTime>
		| ContinuousCollector<dataAndTime>
	)[] = [
		new ScreenWidth(),
		new ScreenHeight(),
		new Language(),
		new UserAgent(),
		new DeviceMotion(),
		new DeviceOrientation(),
		new CookieEnabled(),
		new JavaScriptEnabled(),
		new OnLine(),
		new Referrer(),
		new TimeZone(),
		new LocalStorageAvailable(),
		new NetWorkInformation(),
		new Clipboard(),
		new BrowserInfo(),
		new Platform(),
		new DeviceMemory(),
		new HardwareConcurrency(),
		new Plugins(),
		new Geolocation(),
		new DoNotTrack(),
		new GetBattery(),
		new CurrentUrl(),
		new historyLength(),
		new ColorDepth(),
		new TouchSupport(),
		new MouseMove(),
		new KeyPress(),
		new MouseClick(60),
	];

	Collectors.forEach((collector) => {
		collector.startCollect();
	});

	setInterval(() => {
		// every COLLECTORS_INTERVAL send the data via POST request to a acme server
		const data: CollectedData = {};
		Collectors.forEach((colloctor) => {
			const key = colloctor.getKey();
			const collectorData = colloctor.getData();

			data[key] = collectorData;
		});
		console.log(data);
		EventsManager.updateData(data);
	}, EventsManager.getConfig().COLLECTORS_INTERVAL);

}
document.dispatchEvent(acmeSdkLoaded);
main();
