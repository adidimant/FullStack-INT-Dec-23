import { Collector } from '../../interfaces/interfaces';
import { EventsManager } from "../../classes/eventsManager"

export class onlineStatus implements Collector<boolean>{
    interval: number;
    private data: boolean | null;
    private intervalId: number;

    constructor(){
        const confInterval: number | null = EventsManager.getInterval();
        this.interval = confInterval;
        this.data = null;
        this.intervalId =0;
    }

    getData(): boolean | null {
        return this.data;
    }

    getKey(): string{
        return 'onlineStatus';
    }

    startCollect(): void{
        if(EventsManager.IsEnabled){
            try{
                this.data = navigator.onLine;
                this.intervalId = setInterval(() =>{
                    if(!EventsManager.IsEnabled){
                        this.finishCollect();
                        return;
                    }
                    this.data = navigator.onLine;
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