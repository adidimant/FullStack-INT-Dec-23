import { EventsManager } from "../../classes/eventsManager.js";

export class clipboard {
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
      return "clipboard"
    }
  
    async collectData() {
      try {
          await navigator.clipboard.writeText('clipboard test');
          this.data = await navigator.clipboard.readText();
      } catch (error) {
          console.error("In order for the clipboard collector to work, you must be in focus on the HTML page");
      }
    }

    startCollect() {
      if (EventsManager.IsEnabled) {
          this.collectData();
          this.intervalId = setInterval(() => {
            if(!EventsManager.IsEnabled){
              this.finishCollect();
              return;
            }
            this.collectData();
          }, this.interval);
      }
    }

    finishCollect() {
      if (this.intervalId !== null && this.intervalId !== undefined && !EventsManager.IsEnabled) {
        clearInterval(this.intervalId)
        this.data = null
      }
    }
  }
  