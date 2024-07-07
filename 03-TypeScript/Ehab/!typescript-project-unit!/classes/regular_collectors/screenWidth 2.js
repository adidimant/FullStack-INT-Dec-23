import { EventsManager } from "../../classes/eventsManager.js";

export class screenWidth {
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
      return "screenWidth"
    }
    
    startCollect() {
      if (EventsManager.IsEnabled) {
          try {
              this.data = screen.width;
              this.intervalId = setInterval(() => {
                if(!EventsManager.IsEnabled){
                  this.finishCollect();
                  return;
                } 
                this.data = screen.width;
              }, this.interval);
          } catch (error) {
              this.data = null;
          }
      }
  }

  finishCollect() {
    if (this.intervalId !== null && this.intervalId !== undefined && !EventsManager.IsEnabled) {
      clearInterval(this.intervalId);
      this.data = null;
    }
  }
}
  