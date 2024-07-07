import { Collector } from '../../interfaces/interfaces';
import { EventsManager } from "../../classes/eventsManager"

export class screenHeight implements Collector<number>{
    interval: number;
    private data: number | null;
    private intervalId: number

    constructor() {
        const confInterval: number | null = EventsManager.getInterval();
        this.interval = confInterval;
        this.data = null;
        this.intervalId =0;
    }

    getData(): number | null {
        return this.data;
    }

    getKey(): string{
        return 'screenHeight';
    }

    startCollect(): void{
        if(EventsManager.IsEnabled){
            try{
                this.data = screen.height;
                this.intervalId = setInterval(() =>{
                    if(!EventsManager.IsEnabled){
                        this.finishCollect();
                        return;
                    }
                    this.data = screen.height;
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