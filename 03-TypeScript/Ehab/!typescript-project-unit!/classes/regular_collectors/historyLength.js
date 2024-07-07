import { EventsManager } from "../../classes/eventsManager.js";

export class historyLength {
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
      return "historyLength"
    }
  
    startCollect() {
      if (EventsManager.IsEnabled) {
        try {
          this.data = window.history.length
          this.intervalId = setInterval(() => {
            if(!EventsManager.IsEnabled){
              this.finishCollect();
              return;
            }
            this.data = window.history.length
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
  