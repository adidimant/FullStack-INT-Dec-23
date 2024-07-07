import { Utils } from "../utils.js"
import { EventsManager } from "../../classes/eventsManager.js"

export class deviceMotion {
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
    return "deviceMotio"
  }

  async collectData() {
    let resolve = await new Promise((resolve) => {
      window.addEventListener("devicemotion", event => {
        resolve(event);
      }, { once: true })
    })
    
    if (
      resolve &&
      resolve.acceleration &&
      resolve.accelerationIncludingGravity &&
      resolve.rotationRate
    ) {
      let temp = {
        "Acceleration along X axis:": resolve.acceleration.x,
        "Acceleration along Y axis:": resolve.acceleration.y,
        "Acceleration along Z axis:": resolve.acceleration.z,
        "Acceleration including gravity along X axis:":
          resolve.accelerationIncludingGravity.x,
        "Acceleration including gravity along y axis:":
          resolve.accelerationIncludingGravity.y,
        "Acceleration including gravity along z axis:":
          resolve.accelerationIncludingGravity.z,
        "Rotation rate around Z axis (alpha):": resolve.rotationRate.alpha,
        "Rotation rate around X axis (beta):": resolve.rotationRate.beta,
        "Rotation rate around Y axis (gamma):": resolve.rotationRate.gamma,
        "Data interval:": resolve.interval
      }
      this.data = temp
    }else{console.log('in else')}
  }

  startCollect() {
    if (this.interval > 0 && EventsManager.SDKENABLED()) {
      try {
        this.collectData()
        this.intervalId = setInterval(() => {
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
        this.collectorArray = []
      }
    } catch (error) {
      console.error(error)
    }
  }
}
