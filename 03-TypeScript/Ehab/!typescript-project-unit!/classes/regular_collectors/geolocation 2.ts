import { Collector } from "../../interfaces/interfaces";
import { EventsManager } from "../../classes/eventsManager"

export class geolocation implements Collector<string>{
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
        return 'geolocation';
    }

    collectData(): void{
        let latitude: number | null = null;
        let longitude: number | null = null;
        navigator.geolocation.getCurrentPosition(
            (position: GeolocationPosition) => {
              latitude = position.coords.latitude;
              longitude = position.coords.longitude;
              this.data = latitude+','+ longitude;
            },
            (error: GeolocationPositionError) => {
                this.data = null;
            }
        );
    }

    startCollect(): void{
        if(EventsManager.IsEnabled){
            try{
                this.collectData();  
                this.intervalId = setInterval(() =>{
                    if(!EventsManager.IsEnabled){
                        this.finishCollect();
                        return;
                    }
                    this.collectData();
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