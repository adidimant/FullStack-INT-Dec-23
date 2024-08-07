import { Collector } from '../../interfaces/interfaces';
import { EventsManager } from "../../classes/eventsManager"

export class hardwareConcurrency implements Collector<number>{
    interval: number;
    private data: number | null;
    private intervalId: number;

    constructor(){
        const confInterval: number | null = EventsManager.getInterval();
        this.interval = confInterval;
        this.data = null;
        this.intervalId =0;
    }

    getData(): number | null {
        return  this.data;
    }

    getKey(): string{
        return 'hardwareConcurrency';
    }

    startCollect(): void{
        if(EventsManager.IsEnabled){
            try{
                this.data = navigator.hardwareConcurrency
                this.intervalId = setInterval(() =>{
                    if(!EventsManager.IsEnabled){
                        this.finishCollect();
                        return;
                    }
                    this.data = navigator.hardwareConcurrency
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