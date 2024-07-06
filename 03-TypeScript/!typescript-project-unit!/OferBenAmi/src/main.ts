import { Config } from "./interfaces";
import { Collector, ContinuousCollector, dataAndTime, CollectedData } from "./interfaces";
import { Utils } from "./classes";
import { acmeSdkLoaded } from "./customEvents";
import { ScreenHeight } from "./collectors/ScreenHeight";
import { ScreenWidth } from './collectors/ScreenWidth';
import { EventsManager } from "./classes";
import { Language } from "./collectors/Language";
import { UserAgent } from './collectors/UserAgent';
import { MouseMove } from './collectors/MouseMove';
import { KeyPress } from "./collectors/KeyPress";
import { MouseClick } from "./collectors/mouseClick";

const config: Config = { COLLECTORS_INTERVAL: 60000, DEFAULT_BUFFER_CONTINOUS_COLLECTORS: 50, SDK_ENABLED: true }; // fake data

document.addEventListener("acme-sdk-loaded", (e: Event) => {
  console.log((e as CustomEvent).detail.text);
});


function main() {
  Utils.fetch(config);
  // const screenWidth = ;
  // const screenHeight = ;
  // const language = new Language();
  // const userAgent = new UserAgent();
  // const mouseMove = new MouseMove();
  // const keyPress = new KeyPress();
  // const mouseClick = new MouseClick(10);
  const Colloctors: (Collector<dataAndTime> | ContinuousCollector<dataAndTime>)[] = [
    new ScreenWidth(),
    new ScreenHeight(),
    new Language(),
    new UserAgent(),
    new MouseMove(),
    new KeyPress(),
    new MouseClick(10),
  ];

  Colloctors.forEach((collector) => {
    collector.startCollect()
  })

  // screenWidth.startCollect();
  // screenHeight.startCollect();
  // language.startCollect();
  // userAgent.startCollect();
  // mouseMove.startCollect();
  // keyPress.startCollect();
  // mouseClick.startCollect();

  setInterval(() => {// every COLLECTORS_INTERVAL send the data via POST request to a acme server
    const data: CollectedData  = {

    };
    Colloctors.forEach(colloctor => {
      const key = colloctor.getKey();
      const collectorData = colloctor.getData();

      data[key] = collectorData;
    })
    console.log(data);
    EventsManager.updateData(data);
  }, EventsManager.getConfig().COLLECTORS_INTERVAL);
}


document.dispatchEvent(acmeSdkLoaded);
main();
