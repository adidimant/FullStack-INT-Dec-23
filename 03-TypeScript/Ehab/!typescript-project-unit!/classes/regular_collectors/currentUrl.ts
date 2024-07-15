import { Collector } from "../../interfaces/interfaces";
import { EventsManager } from "../../classes/eventsManager"

export class currentUrl implements Collector<string>{
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
        return  this.data;
    }

    getKey(): string {
        return 'currentUrl';
    }

    startCollect(): void{
        if(EventsManager.IsEnabled){
            try { 
                this.data = window.location.href;
                this.intervalId = setInterval((): void =>{
                    if(!EventsManager.IsEnabled){
                        this.finishCollect();
                        return;
                    }
                    this.data = window.location.href;
                },this.interval)
            } catch (error) {
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