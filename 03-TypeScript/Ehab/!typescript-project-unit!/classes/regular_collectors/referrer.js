import { EventsManager } from "../../classes/eventsManager.js";

export class referrer {
    constructor() {
      const confInterval = EventsManager.getInterval();
      this.interval = confInterval;
      this.data = null;
      this.intervalId = 0;
    }
  
    getData() {
      if (typeof this.data === "string" && this.data.length == 0) {
        return "' '"
      }
      return this.data
    }
  
    getKey() {
      return "referrer"
    }
  
    startCollect() {
      if (this.interval > 0 && EventsManager.SDKENABLED()) {
        try {
          this.data = document.referrer
          this.intervalId = setInterval(() => {
            if(!EventsManager.SDKENABLED()){
              this.finishCollect();
              return;
            }
            this.data = document.referrer
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
  