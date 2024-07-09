import { EventsManager } from "../../classes/eventsManager.js";

export class javaScriptEnabled {
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
      return "javaScriptEnable"
    }
  
    startCollect() {
      if (EventsManager.IsEnabled) {
        try {
          let result = typeof navigator.javaEnabled === 'function' && navigator.javaEnabled();
                if (typeof result === 'boolean') {
                    this.data = result;
                }
                this.intervalId = setInterval(() => {
                  if(!EventsManager.IsEnabled){
                    this.finishCollect();
                    return;
                  }
                  result = typeof navigator.javaEnabled === 'function' && navigator.javaEnabled();
                  if (typeof result === 'boolean') {
                      this.data = result;
                  }
                }, this.interval);
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
  