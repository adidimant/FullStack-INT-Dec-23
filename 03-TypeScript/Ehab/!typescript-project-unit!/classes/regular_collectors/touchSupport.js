
import { EventsManager } from "../../classes/eventsManager.js";

export class touchSupport {
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
    return "touchSupport"
  }

  startCollect() {
    if (this.interval > 0 && EventsManager.SDKENABLED()) {
      try {
        this.data =
          "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0
        this.intervalId = setInterval(() => {
          if(!EventsManager.SDKENABLED()){
            this.finishCollect();
            return;
          }
          this.data =
            "ontouchstart" in window ||
            navigator.maxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0
        }, this.interval)
      } catch (err) {
        this.data = null
      } 
    }
  }

  finishCollect() {
    if (this.intervalId !== null && this.intervalId !== undefined && !EventsManager.SDKENABLED()) {
      clearInterval(this.intervalId)
      this.data = null
    }
  }
}
