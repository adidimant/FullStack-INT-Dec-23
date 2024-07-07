import { Collector } from "../../interfaces/interfaces";
import { EventsManager } from "../../classes/eventsManager"
import { } from "../../global"

export class doNotTrack implements Collector<boolean>{
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

    getKey(): string{
        return 'doNotTrack';
    }

    startCollect(): void{
        if (EventsManager.IsEnabled) {
            try{
                this.data = navigator.doNotTrack === "1" || window.doNotTrack === "1" || navigator.msDoNotTrack === "1"
                this.intervalId = setInterval(() =>{
                    if(!EventsManager.IsEnabled){
                        this.finishCollect();
                        return;
                    }
                    this.data = navigator.doNotTrack === "1" || window.doNotTrack === "1" || navigator.msDoNotTrack === "1"
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