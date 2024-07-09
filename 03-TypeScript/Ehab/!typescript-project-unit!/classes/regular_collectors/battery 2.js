import { EventsManager } from "../../classes/eventsManager.js";
export class battery {
  constructor() {
    const confInterval = EventsManager.getInterval();
    this.interval = confInterval;
    this.data = null;
    this.intervalId = 0;
  }

  getData() {
    return JSON.parse(JSON.stringify(this.data))
  }

  getKey() {
    return "battery"
  }

  async collectData() {
    try {
        const battery = await navigator.getBattery();
        let temp = {
            "Battery Level:": `${battery.level * 100}%`,
            "Battery Charging:": battery.charging
        };
        this.data = JSON.stringify(temp);
    } catch (error) {
        this.data = null;
        console.error(error);
    }
  }

  async startCollect() {
    if (EventsManager.IsEnabled) {
        await this.collectData();
        this.intervalId = setInterval(async () => {
          if(!EventsManager.IsEnabled){
            this.finishCollect();
            return;
          }
          await this.collectData();
        }, this.interval);
    }
}

  finishCollect() {
    if (this.intervalId !== null && this.intervalId !== undefined && !EventsManager.IsEnabled) {
      clearInterval(this.intervalId)
      this.data = null
    }
  }
}
