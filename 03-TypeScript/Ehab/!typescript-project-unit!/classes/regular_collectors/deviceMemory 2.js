import { EventsManager } from "../../classes/eventsManager.js";

export class deviceMemory {
  constructor() {
    const confInterval = EventsManager.getInterval();
    this.interval = confInterval;
    this.data = null;
    this.intervalId = 0;
  }

  getData() {
    return this.data
  }

  getKey() {
    return "deviceMemory"
  }

  startCollect() {
    if (EventsManager.IsEnabled) {
      try {
        this.data = navigator.deviceMemory || "unknown"
        this.intervalId = setInterval(() => {
          if(!EventsManager.IsEnabled){
            this.finishCollect();
            return;
          }
          this.data = navigator.deviceMemory || "unknown"
        }, this.interval)
      } catch (err) {
        this.data = null
      } 
    }
  }

  finishCollect() {
    if (this.intervalId !== null && this.intervalId !== undefined && !EventsManager.IsEnabled) {
      clearInterval(this.intervalId)
      this.data = null
    }
  }
}
