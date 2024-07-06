import { Collector, ContinuousCollector } from "../../interfaces/interfaces";
import { Utils } from "../utils";
import { EventsManager } from "../../classes/eventsManager";
import { customMouseEvent } from "../../types/types"

export class mouseMove implements Collector<customMouseEvent>, ContinuousCollector<customMouseEvent>{
    interval: number;
    private data: customMouseEvent | null;
    private intervalId: number;
    bufferSize: number;
    private collectorArray: Array<customMouseEvent>;

    constructor(bufferSize?: number){
        const confInterval: number | null = EventsManager.getInterval();
        this.interval = confInterval;
        this.data = null;
        if(bufferSize){
            this.bufferSize = bufferSize;
        }else {
            this.bufferSize = EventsManager.getDefaultBufferContinousCcollectors();
        }
        this.collectorArray = new Array<MouseEvent>();
        this.intervalId=0;
    }

    getData(): customMouseEvent[] | null{
        if(this.collectorArray.length < 1){
            return null;
        }
        return this.collectorArray;
    }

    getKey(): string{
        return 'mouseMove';
    }

    private collectData(){
        document.addEventListener("mousemove",(mousemoveEvent): void=>{
            if (mousemoveEvent) {
                let temp:  customMouseEvent = {
                    'clientX': mousemoveEvent['clientX'],
                    'clientY': mousemoveEvent['clientY']
                };
                this.data = temp;
            }
        });
    }

    startCollect(){
        if(this.interval >0 && EventsManager.SDKENABLED()){
            try{
                this.collectData();
                this.intervalId = setInterval(() =>{
                    if(!EventsManager.SDKENABLED()){
                        this.finishCollect();
                        return;
                    }
                    if(this.data){
                        Utils.maintainLastXItems(this.collectorArray, this.bufferSize, this.data);
                        this.data=null;
                    }
                },this.interval);
            }catch(err){
                this.data = null;
            } 
        }
    }

    finishCollect(): void{
        try{
            if (this.intervalId !== null && this.intervalId !== undefined && !EventsManager.SDKENABLED()) {
                clearInterval(this.intervalId);
                this.data = null; 
                this.collectorArray = [];
            }
        }catch(error){
            console.error(error);
        }
    }
}