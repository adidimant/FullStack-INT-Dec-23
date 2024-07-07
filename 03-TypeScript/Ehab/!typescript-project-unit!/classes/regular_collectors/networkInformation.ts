import { Collector } from '../../interfaces/interfaces';
import { EventsManager } from "../../classes/eventsManager"
import { connectionObj } from "../../types/types"
import { } from "../../global"

export class networkInformation implements Collector<object>{
    interval: number;
    private data: string | null;
    private intervalId: number;

    constructor(){
        const confInterval: number | null = EventsManager.getInterval();
        this.interval = confInterval;
        this.data = null;
        this.intervalId =0;
    }

    getData(): object | null {
        return JSON.parse(JSON.stringify(this.data));
    }

    getKey(): string{
        return 'networkInformation';
    }
    
    async collectData(): Promise<void>{
        let connection: any = await new Promise((resolve) =>{
            resolve(navigator.connection || navigator.mozConnection || navigator.webkitConnection);
        });
        let temp: connectionObj = {
            'onchange':connection['onchange'],
            'effectiveType': connection['effectiveType'],
            'rtt': connection['rtt'],
            'downlink': connection['downlink'],
            'saveData': connection['saveData']
        };
        this.data = JSON.stringify(temp);
    }

    async startCollect(): Promise<void>{
        if(EventsManager.IsEnabled){
            this.collectData();
            this.interval = setInterval(async()=>{
                if(!EventsManager.IsEnabled){
                    this.finishCollect();
                    return;
                }
                this.collectData(); 
            },this.interval);            
        }
    }

    finishCollect(): void{
        if (this.intervalId !== null && this.intervalId !== undefined && !EventsManager.IsEnabled) {
            clearInterval(this.intervalId);
            this.data = null; 
        }
    }
}