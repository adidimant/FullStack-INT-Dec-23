import { Collector } from "../../interfaces/interfaces";

export class geolocation implements Collector<string>{
    interval: number;
    private data: string | null;
    private intervalId: number;

    constructor(interval: number){
        this.interval = interval;
        this.data = null;
    }

    getData(): string | null {
        return  this.data;
    }

    getKey(): string{
        return 'geolocation';
    }

    startCollect(): void{
        try{
            let latitude: number | null = null;
            let longitude: number | null = null;  
            this.intervalId = setInterval(() =>{
                navigator.geolocation.getCurrentPosition(
                    (position: GeolocationPosition) => {
                      latitude = position.coords.latitude;
                      longitude = position.coords.longitude;
                      this.data = 'Geolocation:', latitude, longitude;
                    },
                    (error: GeolocationPositionError) => {
                        this.data = null;
                    }
                );
            },this.interval);
        }catch(err){
            this.data = null;
        } 
    }

    finishCollect(): void{
        if (this.intervalId !== null && this.intervalId !== undefined) {
            clearInterval(this.intervalId);
            this.data = null; 
        }
    }
}