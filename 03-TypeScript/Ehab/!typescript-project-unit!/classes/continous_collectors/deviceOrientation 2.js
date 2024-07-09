import { Utils } from "../utils.js"
import { EventsManager } from "../../classes/eventsManager.js"

export class deviceOrientation {
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
    return "deviceOrientation"
  }

  async collectData() {
    let resolve = await new Promise(resolve => {
      window.addEventListener(
        "deviceorientation",
        event => {
          resolve(event)
        },
        { once: true }
      )
    })
    if (resolve) {
      let temp = {
        Absolute: resolve.absolute,
        Alpha: resolve.alpha,
        Beta: resolve.beta,
        Gamma: resolve.gamma
      }
      this.data = temp
    }
  }

  startCollect() {
    if (EventsManager.IsEnabled) {
      try {
        this.collectData()
        this.intervalId = setInterval(async () => {
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
      } catch (error) {
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
