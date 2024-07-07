
import { EventsManager } from "../../classes/eventsManager.js";

export class networkInformation {
  constructor() {
    const confInterval = EventsManager.getInterval();
    this.interval = confInterval;
    this.data = null;
    this.intervalId = 0;
  }

  getData() {
    return JSON.parse(JSON.stringify(this.data))
  }

  getKey() {
    return "networkInformation"
  }

 
  async collectData() {
    let connection = await new Promise((resolve) =>{
        resolve(navigator.connection || navigator.mozConnection || navigator.webkitConnection);
    });
    let temp = {
        'onchange': connection['onchange'],
        'effectiveType': connection['effectiveType'],
        'rtt': connection['rtt'],
        'downlink': connection['downlink'],
        'saveData': connection['saveData']
    };
    this.data = JSON.stringify(temp);
  }

  async startCollect() {
  if (this.interval > 0 && EventsManager.SDKENABLED()) {
      this.collectData();
      this.intervalId = setInterval(async () => {
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
