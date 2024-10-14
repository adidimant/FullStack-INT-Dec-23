import {
  CollectorInterface,
  ConfigDataInterface,
  ContinuousCollectorInterface,
} from "./interfaces.js";
import { EventsManager } from "./eventsManager.js";
import {
  Battery,
  BrowserInfo,
  Click,
  Clipboard,
  ColorDepth,
  Connection,
  CookiesEnabled,
  CurrentURL,
  DeviceMemory,
  DeviceMotion,
  DeviceOrientation,
  DoNotTrack,
  Geolocation,
  GetNetworkInformation,
  HardwareConcurrency,
  HistoryLength,
  JavaEnabled,
  KeyUp,
  Language,
  LocalStorageAvailable,
  MouseMove,
  OnlineStatus,
  Platform,
  Plugins,
  Referrer,
  ScreenHeight,
  ScreenWidth,
  TimeZone,
  TouchSupport,
  UserAgent,
} from "./classes.js";

const customEvent = new CustomEvent("acme-sdk-loaded");

async function main(): Promise<void> {
  console.log("main function triggered");

  let config: ConfigDataInterface | null = await EventsManager.getConfig();

  let areCollecting: boolean = false;

  localStorage.setItem("configData", JSON.stringify(config));

  async function getConfigData(): Promise<ConfigDataInterface> {
    const configData = localStorage.getItem("configData");
    if (configData) {
      const configDataObj = JSON.parse(configData);
      if (
        configDataObj.COLLECTORS_INTERVAL &&
        configDataObj.DEFAULT_BUFFER_CONTINOUS_COLLECTORS &&
        configDataObj.SDK_ENABLED
      ) {
        return configDataObj;
      } else {
        throw new Error("Config Data is corrupted.");
      }
    }
    throw new Error("Couldn't find configData.");
  }

  let configData: ConfigDataInterface = await getConfigData();

  setInterval(async () => {
    configData = await getConfigData();
  }, 60000);

  setInterval(async () => {
    if (areCollecting) {
      EventsManager.updateData("id123");
    }
  }, 60000);

  let collectorsArr: (CollectorInterface<any> | ContinuousCollectorInterface<any>)[] = [];

  function createCollectors() {
    console.log("Creating collectors");
    collectorsArr = [];
    collectorsArr.push(
      new ScreenWidth(configData.COLLECTORS_INTERVAL),
      new ScreenHeight(configData.COLLECTORS_INTERVAL),
      new Language(configData.COLLECTORS_INTERVAL),
      new UserAgent(configData.COLLECTORS_INTERVAL),
      new TimeZone(configData.COLLECTORS_INTERVAL),
      new CookiesEnabled(configData.COLLECTORS_INTERVAL),
      new JavaEnabled(configData.COLLECTORS_INTERVAL),
      new OnlineStatus(configData.COLLECTORS_INTERVAL),
      new Referrer(configData.COLLECTORS_INTERVAL),
      new LocalStorageAvailable(configData.COLLECTORS_INTERVAL),
      new GetNetworkInformation(configData.COLLECTORS_INTERVAL),
      new Clipboard(configData.COLLECTORS_INTERVAL),
      new Connection(configData.COLLECTORS_INTERVAL),
      new BrowserInfo(configData.COLLECTORS_INTERVAL),
      new Platform(configData.COLLECTORS_INTERVAL),
      new DeviceMemory(configData.COLLECTORS_INTERVAL),
      new HardwareConcurrency(configData.COLLECTORS_INTERVAL),
      new Plugins(configData.COLLECTORS_INTERVAL),
      new Geolocation(configData.COLLECTORS_INTERVAL),
      new DoNotTrack(configData.COLLECTORS_INTERVAL),
      new Battery(configData.COLLECTORS_INTERVAL),
      new CurrentURL(configData.COLLECTORS_INTERVAL),
      new HistoryLength(configData.COLLECTORS_INTERVAL),
      new ColorDepth(configData.COLLECTORS_INTERVAL),
      new TouchSupport(configData.COLLECTORS_INTERVAL),
      new MouseMove(configData.COLLECTORS_INTERVAL, 50),
      new KeyUp(configData.COLLECTORS_INTERVAL, 50),
      new Click(configData.COLLECTORS_INTERVAL, configData.DEFAULT_BUFFER_CONTINOUS_COLLECTORS),
      new DeviceMotion(configData.COLLECTORS_INTERVAL, 40),
      new DeviceOrientation(configData.COLLECTORS_INTERVAL, 40)
    );
  }

  let collectorsInterval: number = configData.COLLECTORS_INTERVAL;

  function updateCollectors() {
    if (collectorsInterval == configData.COLLECTORS_INTERVAL) {
      return;
    } else {
      createCollectors();
      collectorsInterval = configData.COLLECTORS_INTERVAL;
    }
  }

  createCollectors();

  setInterval(updateCollectors, 60000);

  async function turnOn(): Promise<void> {
    areCollecting = true;
    console.log("Turning on");
    await Promise.all(collectorsArr.map((collector) => collector.startCollect()));
    saveCollectorsDataInStorage();
  }
  if (configData.SDK_ENABLED) {
    turnOn();
    areCollecting = true;
  } else {
    areCollecting = false;
  }

  function turnOff(): void {
    areCollecting = false;
    console.log("Shutting down");
    collectorsArr.forEach((collector) => {
      collector.finishCollect();
    });
  }

  setInterval(() => {
    if (configData.SDK_ENABLED && !areCollecting) {
      turnOn();
    } else if (!configData.SDK_ENABLED && areCollecting) {
      turnOff();
    }
  }, 100);

  function saveCollectorsDataInStorage(): void {
    const collectorsDataObj: { [key: string]: any } = {};
    collectorsArr.forEach((collector) => {
      collectorsDataObj[`${collector.getKey()}`] = collector.getData();
      if (collector.getKey() == "Network Information") {
      }
    });
    localStorage.setItem("collectorsData", JSON.stringify(collectorsDataObj));
    console.log("Collectors data saved in local storage.");
  }

  setInterval(saveCollectorsDataInStorage, 60000);
}

window.addEventListener("acme-sdk-loaded", main);

window.dispatchEvent(customEvent);
