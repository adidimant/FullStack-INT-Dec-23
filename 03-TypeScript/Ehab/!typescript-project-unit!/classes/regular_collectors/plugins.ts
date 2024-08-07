import { Collector } from '../../interfaces/interfaces';
import { EventsManager } from "../../classes/eventsManager"

export class plugins implements Collector<object | null>{
    interval: number;
    private data: object | null;
    private intervalId: number;

    constructor(){
        const confInterval: number | null = EventsManager.getInterval();
        this.interval = confInterval;
        this.data = null;
        this.intervalId =0;
    }

    getData(): object | null {
        return  this.data;
    }

    getKey(): string{
        return 'plugins';
    }

    startCollect(): void{
        if(EventsManager.IsEnabled){
            try{
                this.data = Array.from(navigator.plugins).map(plugin => plugin.name);
                this.intervalId = setInterval(() =>{
                    if(!EventsManager.IsEnabled){
                        this.finishCollect();
                        return;
                    }
                    this.data = Array.from(navigator.plugins).map(plugin => plugin.name);
                },this.interval);
            }catch(err){
                this.data = null;
            } 
        }
    }

    finishCollect(): void{
        if (this.intervalId !== null && this.intervalId !== undefined && !EventsManager.IsEnabled) {
            clearInterval(this.intervalId);
            this.data = null; 
        }
    }
}