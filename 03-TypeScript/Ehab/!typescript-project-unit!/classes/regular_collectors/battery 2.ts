import { Collector } from "../../interfaces/interfaces";
import { EventsManager } from "../../classes/eventsManager"
import { BatteryManagerObj } from "../../types/types";

export class battery implements Collector<string | null>{
    interval: number;
    private data: string | null;
    private intervalId: number;

    constructor(){
      const confInterval: number | null = EventsManager.getInterval();
      this.interval = confInterval;
      this.data = null;
      this.intervalId =0;
    }

    getData(): string | null {
      return JSON.parse(JSON.stringify(this.data));
    }

    getKey(): string{
        return 'battery';
    }

    private async collectData(): Promise<void>{
      try {
        const battery: BatteryManager = await navigator.getBattery();
        let temp: BatteryManagerObj = {
          "Battery Level:": `${battery.level * 100}%`,
          "Battery Charging:": battery.charging
        };
        this.data = JSON.stringify(temp);        
      } catch (error) {
        this.data = null;
        console.error(error);
      }
    }

    async startCollect(): Promise<void> {
      if(EventsManager.IsEnabled){
        this.collectData();
        this.intervalId = setInterval(async (): Promise<void> => {
          if(!EventsManager.IsEnabled){
            this.finishCollect();
            return;
          }
          this.collectData();
        }, this.interval);
      }
    }
    
    finishCollect(): void{
        if (this.intervalId !== null && this.intervalId !== undefined && !EventsManager.IsEnabled) {
            clearInterval(this.intervalId);
            this.data = null; 
        }
    }
}