import { EventsManager } from "../../classes/eventsManager.js";

export class onlineStatus {
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
      return "onlineStatus"
    }
  
    startCollect() {
      if (this.interval > 0 && EventsManager.SDKENABLED()) {
        try {
          this.data = navigator.onLine
          this.intervalId = setInterval(() => {
            if(!EventsManager.SDKENABLED()){
              this.finishCollect();
              return;
            }
            this.data = navigator.onLine
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
  