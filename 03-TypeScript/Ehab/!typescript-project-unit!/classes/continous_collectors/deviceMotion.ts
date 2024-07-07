import { Collector, ContinuousCollector } from "../../interfaces/interfaces";
import { Utils } from "../utils";
import { EventsManager } from "../../classes/eventsManager";
import { customDeviceMotion } from "../../types/types"

export class deviceMotion implements Collector<customDeviceMotion>, ContinuousCollector<customDeviceMotion>{
    interval: number;
    private data: customDeviceMotion | null;
    private intervalId: number;
    bufferSize: number;
    private collectorArray: Array<customDeviceMotion>;

    constructor(bufferSize?: number){
        const confInterval: number | null = EventsManager.getInterval();
        this.interval = confInterval;
        this.data = null;
        if(bufferSize){
            this.bufferSize = bufferSize;
        }else {
            this.bufferSize = EventsManager.getDefaultBufferContinousCcollectors();
        }
        this.collectorArray = new Array<customDeviceMotion>();
        this.intervalId=0;
    }

    getData(): customDeviceMotion[] | null{
        if(this.collectorArray.length < 1){
            return null;
        }
        return this.collectorArray;
    }

    getKey(): string{
        return 'deviceMotio';
    }

    private async collectData(){
        let resolve: DeviceMotionEvent = await new Promise<DeviceMotionEvent>((resolve) => {
            window.addEventListener('devicemotion', event => {
                resolve(event);
            }, { once: true });
        });
        if(resolve && resolve.acceleration && resolve.accelerationIncludingGravity && resolve.rotationRate){
            let temp: customDeviceMotion = {
                'Acceleration along X axis:': resolve.acceleration.x,
                'Acceleration along Y axis:': resolve.acceleration.y,
                'Acceleration along Z axis:': resolve.acceleration.z,
                'Acceleration including gravity along X axis:': resolve.accelerationIncludingGravity.x,
                'Acceleration including gravity along y axis:': resolve.accelerationIncludingGravity.y,
                'Acceleration including gravity along z axis:': resolve.accelerationIncludingGravity.z,
                'Rotation rate around Z axis (alpha):': resolve.rotationRate.alpha,
                'Rotation rate around X axis (beta):': resolve.rotationRate.beta,
                'Rotation rate around Y axis (gamma):':resolve.rotationRate.gamma,
                'Data interval:': resolve.interval
            }
            this.data = temp;
        }
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
                        Utils.maintainLastXItems<customDeviceMotion>(this.collectorArray, this.bufferSize, this.data);
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