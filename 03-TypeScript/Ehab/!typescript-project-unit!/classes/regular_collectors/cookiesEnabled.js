import { EventsManager } from "../../classes/eventsManager.js";

export class cookiesEnabled {
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
      return "cookiesEnabled"
    }
  
    startCollect() {
      if (this.interval > 0 && EventsManager.SDKENABLED()) {
        try {
          this.data = navigator.cookieEnabled
          this.intervalId = setInterval(() => {
            if(!EventsManager.SDKENABLED()){
              this.finishCollect();
              return;
            }
            this.data = navigator.cookieEnabled
          }, this.interval)
        } catch (err) {
          this.data = null
        }
      }
    }
  
    finishCollect() {
      if (this.intervalId !== null && this.intervalId !== undefined  && !EventsManager.SDKENABLED()) {
        clearInterval(this.intervalId)
        this.data = null
      }
    }
  }
  