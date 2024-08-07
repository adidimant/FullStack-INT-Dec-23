import { EventsManager } from "../../classes/eventsManager.js";

export class plugins {
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
      return "plugins"
    }
  
    startCollect() {
      if (EventsManager.IsEnabled) {
        try {
          this.data = Array.from(navigator.plugins).map(plugin => plugin.name)
          this.intervalId = setInterval(() => {
            if(!EventsManager.IsEnabled){
              this.finishCollect();
              return;
            }
            this.data = Array.from(navigator.plugins).map(plugin => plugin.name)
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
  