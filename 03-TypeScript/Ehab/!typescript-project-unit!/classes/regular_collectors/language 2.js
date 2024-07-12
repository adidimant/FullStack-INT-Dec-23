import { EventsManager } from "../../classes/eventsManager.js";

export class language {
  constructor(interval) {
    const confInterval = EventsManager.getInterval();
    this.interval = confInterval;
    this.data = null;
    this.intervalId = 0;
  }

  getData() {
    return this.data
  }

  getKey() {
    return "language"
  }

  startCollect() {
    if (EventsManager.IsEnabled) {
      try {
        this.data = navigator.language || navigator.userLanguage
        this.intervalId = setInterval(() => {
          if(!EventsManager.IsEnabled){
            this.finishCollect();
            return;
          }
          this.data = navigator.language || navigator.userLanguage
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
