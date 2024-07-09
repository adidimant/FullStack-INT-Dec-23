import { Collector } from '../../interfaces/interfaces';
import { EventsManager } from "../../classes/eventsManager"

export class clipboard implements Collector<string>{
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

    getKey(): string{
        return 'clipboard';
    }

    private async collectData(): Promise<void>{
        try {
            await navigator.clipboard.writeText('clipboard test')
            this.data = await navigator.clipboard.readText();
        } catch (error) {
            console.error("aaaaa");
        }
    }

    startCollect(): void{
        if(EventsManager.IsEnabled){
            this.collectData();
            this.intervalId = setInterval(() =>{
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