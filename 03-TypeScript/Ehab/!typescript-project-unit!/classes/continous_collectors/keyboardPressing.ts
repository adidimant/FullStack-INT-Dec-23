import { Collector, ContinuousCollector } from "../../interfaces/interfaces";
import { Utils } from "../utils";
import { EventsManager } from "../../classes/eventsManager";
import { keyupEvent } from "../../types/types"

export class keyboardPressing implements Collector<keyupEvent>, ContinuousCollector<keyupEvent>{
    interval: number;
    private data: keyupEvent | null;
    private intervalId: number;
    bufferSize: number;
    private collectorArray: Array<keyupEvent>;

    constructor(bufferSize?: number){
        const confInterval: number | null = EventsManager.getInterval();
        this.interval = confInterval;
        this.data = null;
        if(bufferSize){
            this.bufferSize = bufferSize;
        }else {
            this.bufferSize = EventsManager.getDefaultBufferContinousCcollectors();
        }
        this.collectorArray = new Array<keyupEvent>();
        this.intervalId=0;
    }

    getData(): keyupEvent[] | null{
        if(this.collectorArray.length < 1){
            return null;
        }
        return this.collectorArray;
    }
    

    getKey(): string{
        return 'keyboardPressin';
    }

    private collectData(){
        document.addEventListener("keyup",(keyupEvent): void=>{
            if (keyupEvent) {
                let temp:  keyupEvent = {
                    'isTrusted':keyupEvent['isTrusted'],
                    'key': keyupEvent['key'],
                    'code': keyupEvent['code'],
                    'location': keyupEvent['location'],
                    'ctrlKey': keyupEvent['ctrlKey']
                };
                this.data = temp;
            }
        });
    }
        
    startCollect(): void{
        if(this.interval >0 && EventsManager.SDKENABLED()){
            try{  
                this.collectData();
                this.intervalId = setInterval(() =>{
                    if(!EventsManager.SDKENABLED()){
                        this.finishCollect();
                        return;
                    }
                    if(this.data){
                        Utils.maintainLastXItems<keyupEvent>(this.collectorArray, this.bufferSize, this.data);
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
                this.collectorArray = []
            }
        }catch(error){
            console.error(error);
        }
    }
}