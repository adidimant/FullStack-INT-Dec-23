import { Collector } from "../../interfaces/interfaces";
import { EventsManager } from "../../classes/eventsManager"
import { } from "../../global"

export class touchSupport implements Collector<boolean>{
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
        return  this.data;
    }

    getKey(): string {
        return 'touchSupport';
    }

    startCollect(): void{
        if(EventsManager.IsEnabled){
            try{
                this.data = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
                this.intervalId = setInterval((): void =>{
                    if(!EventsManager.IsEnabled){
                        this.finishCollect();
                        return;
                    }
                    this.data = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
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