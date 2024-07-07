import { Collector } from '../../interfaces/interfaces';
import { EventsManager } from "../../classes/eventsManager"
import { } from "../../global"

export class language implements Collector<string>{
    interval: number;
    private data: string | null;
    private intervalId: number

    constructor() {
        const confInterval: number | null = EventsManager.getInterval();
        this.interval = confInterval;
        this.data = null;
        this.intervalId =0;
    }

    getData(): string | null {
        return this.data;
    }

    getKey(): string{
        return 'language';
    }

    startCollect(): void{
        if(EventsManager.IsEnabled){
            try{
                this.data = navigator.language || navigator.userLanguage;
                this.intervalId = setInterval(() =>{
                    if(!EventsManager.IsEnabled){
                        this.finishCollect();
                        return;
                    } 
                    this.data = navigator.language || navigator.userLanguage;
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