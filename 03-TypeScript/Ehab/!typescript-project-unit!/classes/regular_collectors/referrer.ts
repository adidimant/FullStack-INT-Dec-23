import { Collector } from '../../interfaces/interfaces';
import { EventsManager } from "../../classes/eventsManager"

export class referrer implements Collector<string>{
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
        if(typeof this.data === 'string' && this.data.length == 0){
            return "' '";
        }
        return this.data;
    }

    getKey(): string{
        return 'referrer';
    }

    startCollect(): void{
        if(EventsManager.IsEnabled){
            try{
                this.data = document.referrer;
                this.intervalId = setInterval(() =>{
                    if(!EventsManager.IsEnabled){
                        this.finishCollect();
                        return;
                    }
                    this.data = document.referrer;
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