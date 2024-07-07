
import { Utils } from "../utils.js"
import { EventsManager } from "../../classes/eventsManager.js"

export class keyboardPressing {
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
    return "keyboardPressin"
  }

  collectData() {
    document.addEventListener("keyup", keyupEvent => {
      if (keyupEvent) {
        let temp = {
          isTrusted: keyupEvent["isTrusted"],
          key: keyupEvent["key"],
          code: keyupEvent["code"],
          location: keyupEvent["location"],
          ctrlKey: keyupEvent["ctrlKey"]
        }
        this.data = temp
      }
    })
  }

  startCollect() {
    if (EventsManager.IsEnabled) {
      try {
        this.collectData()
        this.intervalId = setInterval(() => {
          if(!EventsManager.IsEnabled){
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
        !EventsManager.IsEnabled
      ) {
        clearInterval(this.intervalId)
        this.data = null
        this.collectorArray = []
      }
    } catch (error) {
      console.error(error)
    }
  }
}
