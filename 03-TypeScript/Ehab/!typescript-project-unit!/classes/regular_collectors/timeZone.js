import { EventsManager } from "../../classes/eventsManager.js";
export class timeZone {
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
      return "timeZone"
    }
  
    startCollect() {
      if (this.interval > 0 && EventsManager.SDKENABLED()) {
        try {
          this.data = Intl.DateTimeFormat().resolvedOptions().timeZone
          this.intervalId = 0
          this.intervalId = setInterval(() => {
            if(!EventsManager.SDKENABLED()){
              this.finishCollect();
              return;
            }
            this.data = Intl.DateTimeFormat().resolvedOptions().timeZone
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
  