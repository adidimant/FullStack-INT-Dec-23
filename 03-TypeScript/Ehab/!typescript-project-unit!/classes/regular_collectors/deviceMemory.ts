import { Collector } from '../../interfaces/interfaces';
import { EventsManager } from "../../classes/eventsManager"
import { } from "../../global"

export class deviceMemory implements Collector<number | null | 'unknown'>{
    interval: number;
    private data: number | null | 'unknown';
    private intervalId: number;

    constructor(){
        const confInterval: number | null = EventsManager.getInterval();
        this.interval = confInterval;
        this.data = null;
        this.intervalId =0;
    }

    getData(): number | null | 'unknown' {
        return  this.data;
    }

    getKey(): string{
        return 'deviceMemory';
    }

    startCollect(): void{
        if(this.interval >0 && EventsManager.SDKENABLED()){
            try{
                this.data = navigator.deviceMemory || 'unknown';
                this.intervalId = setInterval(() =>{
                    if(!EventsManager.SDKENABLED()){
                        this.finishCollect();
                        return;
                    }
                    this.data = navigator.deviceMemory || 'unknown';
                },this.interval);
            }catch(err){
                this.data = null;
            }
        }
    }
    
    finishCollect(): void{
        if (this.intervalId !== null && this.intervalId !== undefined) {
            clearInterval(this.intervalId);
            this.data = null; 
        }
    }
}