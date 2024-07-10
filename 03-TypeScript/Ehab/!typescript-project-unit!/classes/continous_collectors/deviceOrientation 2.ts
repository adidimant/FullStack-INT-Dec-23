import { Collector, ContinuousCollector } from "../../interfaces/interfaces";
import { Utils } from "../utils";
import { EventsManager } from "../../classes/eventsManager";
import { customDeviceOrientation } from "../../types/types"

export class deviceOrientation implements Collector<customDeviceOrientation>, ContinuousCollector<customDeviceOrientation>{
    interval: number;
    private data: customDeviceOrientation | null;
    private intervalId: number;
    bufferSize: number;
    private collectorArray: Array<customDeviceOrientation>;

    constructor(bufferSize?: number){
        const confInterval: number | null = EventsManager.getInterval();
        this.interval = confInterval;
        this.data = null;
        if(bufferSize){
            this.bufferSize = bufferSize;
        }else {
            this.bufferSize = EventsManager.getDefaultBufferContinousCcollectors();
        }
        this.collectorArray = new Array<customDeviceOrientation>();
        this.intervalId=0;
    }

    getData(): customDeviceOrientation[] | null{
        if(this.collectorArray.length < 1){
            return null;
        }
        return this.collectorArray;
    }

    getKey(): string{
        return 'deviceOrientation';
    }

    private async collectData(){
        let resolve: DeviceOrientationEvent = await new Promise<DeviceOrientationEvent>((resolve) => {
            window.addEventListener('deviceorientation', event => {
                resolve(event);
            }, { once: true });
        });
        if(resolve){
            let temp: customDeviceOrientation = {
                'Absolute': resolve.absolute,
                'Alpha' : resolve.alpha,
                'Beta': resolve.beta,
                'Gamma': resolve.gamma
            }
            this.data = temp;
        }
    }

    startCollect():void {
        if(EventsManager.IsEnabled){
            try {
                this.collectData();
                this.intervalId = setInterval(async (): Promise<void> => {
                    if(!EventsManager.IsEnabled){
                        this.finishCollect();
                        return;
                    }
                    if(this.data){
                        Utils.maintainLastXItems<customDeviceOrientation>(this.collectorArray,this.bufferSize,this.data);
                        this.data = null;
                    } 
                }, this.interval);
            } catch (error) {
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