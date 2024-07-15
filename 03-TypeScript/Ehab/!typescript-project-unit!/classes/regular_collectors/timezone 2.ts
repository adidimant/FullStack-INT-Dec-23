import { Collector } from '../../interfaces/interfaces';
import { EventsManager } from "../../classes/eventsManager"

export class timeZone implements Collector<string>{
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
        return this.data;
    }

    getKey(): string{
        return 'timeZone';
    }

    startCollect(): void{
        if(EventsManager.IsEnabled){
            try{
                this.data = Intl.DateTimeFormat().resolvedOptions().timeZone;
                this.intervalId =0;
                this.intervalId = setInterval(() =>{
                    if(!EventsManager.IsEnabled){
                        this.finishCollect();
                        return;
                    }
                    this.data = Intl.DateTimeFormat().resolvedOptions().timeZone;
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