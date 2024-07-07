import { Utils } from "../utils.js"
import { EventsManager } from "../../classes/eventsManager.js"

export class clicksPressing {
  constructor(bufferSize) {
    const confInterval = EventsManager.getInterval()
    this.interval = confInterval
    this.data = null
    if (bufferSize) {
      this.bufferSize = bufferSize
    } else {
      this.bufferSize = EventsManager.getDefaultBufferContinousCcollectors()
    }
    this.collectorArray = new Array()
    this.intervalId = 0
  }

  getData() {
    if(this.collectorArray.length < 1){
      return null;
    }
    return this.collectorArray
  }

  getKey() {
    return "clicksPressing"
  }

  collectData() {
    document.addEventListener("click", clickEvent => {
      if (clickEvent) {
        let temp = {
          "Mouse Button": clickEvent.button,
          "Client Position": [clickEvent.clientX, clickEvent.clientY],
          "Page position": [clickEvent.pageX, clickEvent.pageY],
          "Mouse position": [clickEvent.screenX, clickEvent.screenY],
          "Click count": clickEvent.detail
        }
        this.data = temp
      }
    })
  }

  startCollect() {
    if (this.interval > 0 && EventsManager.SDKENABLED()) {
      try {
        this.collectData()
        this.intervalId = setInterval(() => {
          if(!EventsManager.SDKENABLED()){
            this.finishCollect();
            return;
          }
          if (this.data) {
            Utils.maintainLastXItems(
              this.collectorArray,
              this.bufferSize,
              this.data
            )
            this.data = null
          }
        }, this.interval)
      } catch (err) {
        this.data = null
      }
    }
  }

  finishCollect() {
    try {
      if (
        this.intervalId !== null &&
        this.intervalId !== undefined &&
        !EventsManager.SDKENABLED()
      ) {
        clearInterval(this.intervalId)
        this.data = null
        this.collectorArray = [];
      }
    } catch (error) {
      console.error(error)
    }
  }
}
