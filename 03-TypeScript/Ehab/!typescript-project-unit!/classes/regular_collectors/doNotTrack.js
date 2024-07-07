import { EventsManager } from "../../classes/eventsManager.js";

export class doNotTrack {
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
    return "doNotTrack"
  }

  startCollect() {
    if (EventsManager.IsEnabled) {
      try {
        this.data =
          navigator.doNotTrack === "1" ||
          window.doNotTrack === "1" ||
          navigator.msDoNotTrack === "1"
        this.intervalId = setInterval(() => {
          if(!EventsManager.IsEnabled){
            this.finishCollect();
            return;
          }
          this.data =
            navigator.doNotTrack === "1" ||
            window.doNotTrack === "1" ||
            navigator.msDoNotTrack === "1"
        }, this.interval)
      } catch (err) {
        this.data = null
      }      
    }
  }

  finishCollect() {
    if (this.intervalId !== null && this.intervalId !== undefined  && !EventsManager.IsEnabled) {
      clearInterval(this.intervalId)
      this.data = null
    }
  }
}
