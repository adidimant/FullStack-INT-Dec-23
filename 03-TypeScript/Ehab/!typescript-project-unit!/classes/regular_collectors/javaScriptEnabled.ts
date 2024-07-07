import { Collector } from '../../interfaces/interfaces';
import { EventsManager } from "../../classes/eventsManager"

export class javaScriptEnabled implements Collector<boolean>{
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
        return 'javaScriptEnable';
    }

    startCollect(): void{
        if(this.interval >0 && EventsManager.SDKENABLED()){
            try{
                let result: boolean | void = typeof navigator.javaEnabled === 'function' && navigator.javaEnabled();
                if(typeof result === 'boolean'){
                    this.data = result
                }
                this.intervalId = setInterval(() =>{
                    if(!EventsManager.SDKENABLED()){
                        this.finishCollect();
                        return;
                    }
                    result = typeof navigator.javaEnabled === 'function' && navigator.javaEnabled();
                    if(typeof result === 'boolean'){
                        this.data = result
                    }
                },this.interval);
            }catch(err){
                this.data = null;
            }
        }
    }
    
    finishCollect(): void{
        if (this.intervalId !== null && this.intervalId !== undefined && !EventsManager.SDKENABLED()) {
            clearInterval(this.intervalId);
            this.data = null; 
        }
    }
}