import { EventsManager } from "../../classes/eventsManager.js";
export class geolocation {
    constructor() {
      const confInterval = EventsManager.getInterval()
      this.interval = confInterval
      this.data = null
      this.intervalId = 0
    }
  
    getData() {
      return this.data
    }
  
    getKey() {
      return "geolocation"
    }
  
    collectData() {
      let latitude = null
      let longitude = null
      navigator.geolocation.getCurrentPosition(
        position => {
          latitude = position.coords.latitude
          longitude = position.coords.longitude
          this.data = latitude + "," + longitude
        },
        error => {
          this.data = null
        }
      )
    }
  
    startCollect() {
      if (EventsManager.IsEnabled) {
        try {
          this.collectData()
          this.intervalId = setInterval(() => {
            if (!EventsManager.IsEnabled) {
              this.finishCollect()
              return
            }
            this.collectData()
          }, this.interval)
        } catch (err) {
          this.data = null
        }
      }
    }
  
    finishCollect() {
      if (
        this.intervalId !== null &&
        this.intervalId !== undefined &&
        !EventsManager.IsEnabled
      ) {
        clearInterval(this.intervalId)
        this.data = null
      }
    }
  }