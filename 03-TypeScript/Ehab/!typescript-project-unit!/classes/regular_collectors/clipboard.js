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
      if (this.interval > 0 && EventsManager.SDKENABLED()) {
          this.collectData();
          this.intervalId = setInterval(() => {
            if(!EventsManager.SDKENABLED()){
              this.finishCollect();
              return;
            }
            this.collectData();
          }, this.interval);
      }
    }

    finishCollect() {
      if (this.intervalId !== null && this.intervalId !== undefined && !EventsManager.SDKENABLED()) {
        clearInterval(this.intervalId)
        this.data = null
      }
    }
  }
  