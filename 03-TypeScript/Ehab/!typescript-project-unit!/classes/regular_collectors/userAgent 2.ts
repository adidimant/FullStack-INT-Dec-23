import { Collector } from '../../interfaces/interfaces';
import { EventsManager } from "../../classes/eventsManager"

export class userAgent implements Collector<string>{
    interval: number;
    private data: string | null;
    private intervalId: number

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
        return 'userAgent';
    }

    startCollect(): void{
        if(EventsManager.IsEnabled){
            try{
                this.data = navigator.language || navigator.userAgent;
                this.intervalId = setInterval(() =>{
                    if(!EventsManager.IsEnabled){
                        this.finishCollect();
                        return;
                    } 
                    this.data = navigator.language || navigator.userAgent;
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