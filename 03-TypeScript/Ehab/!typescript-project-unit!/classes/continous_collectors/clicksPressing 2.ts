import { Collector, ContinuousCollector } from "../../interfaces/interfaces";
import { Utils } from "../utils";
import { EventsManager } from "../../classes/eventsManager";
import { customClickEvent } from "../../types/types"

export class clicksPressing implements Collector<customClickEvent>, ContinuousCollector<customClickEvent>{
    interval: number;
    private data: customClickEvent | null;
    private intervalId: number;
    bufferSize: number;
    private collectorArray: Array<customClickEvent>;

    constructor(bufferSize?: number){
        const confInterval: number | null = EventsManager.getInterval();
        this.interval = confInterval;
        this.data = null;
        if(bufferSize){
            this.bufferSize = bufferSize;
        }else {
            this.bufferSize = EventsManager.getDefaultBufferContinousCcollectors();
        }
        this.collectorArray = new Array<customClickEvent>();
        this.intervalId=0;
    }

    getData(): customClickEvent[] | null{
        if(this.collectorArray.length < 1){
            return null;
        }
        return this.collectorArray;
    }

    getKey(): string{
        return 'clicksPressing';
    }

    private collectData(){
        document.addEventListener("click",(clickEvent): void=>{
            if (clickEvent) {
                let temp:  customClickEvent = {
                    'Mouse Button': clickEvent.button,
                    'Client Position': [clickEvent.clientX,clickEvent.clientY],
                    'Page position': [clickEvent.pageX,clickEvent.pageY],
                    'Mouse position': [clickEvent.screenX,clickEvent.screenY],
                    'Click count': clickEvent.detail
                };
                this.data = temp;
            }
        });
    }

    startCollect(){
        if(EventsManager.IsEnabled){
            try{  
                this.collectData();
                this.intervalId = setInterval(() =>{
                    if(!EventsManager.IsEnabled){
                        this.finishCollect();
                        return;
                    }
                    if(this.data){
                        Utils.maintainLastXItems<customClickEvent>(this.collectorArray, this.bufferSize, this.data);
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
            if (this.intervalId !== null && this.intervalId !== undefined && !EventsManager.IsEnabled) {
                clearInterval(this.intervalId);
                this.data = null; 
                this.collectorArray = [];
            }
        }catch(error){
            console.error(error);
        }
    }
}