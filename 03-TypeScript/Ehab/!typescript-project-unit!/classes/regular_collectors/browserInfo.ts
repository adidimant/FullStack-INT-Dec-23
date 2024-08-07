import { Collector } from '../../interfaces/interfaces';
import { EventsManager } from "../../classes/eventsManager"
import { } from "../../global";

export class browserInfo implements Collector<string>{
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
        return 'browserInfo';
    }

    private async collectData(): Promise<void>{
        try {
            this.data = (function() {
                let ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident\/?\s)(\d+)/i) || [];
                if (/trident/i.test(M[1])) {
                  tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                  return 'IE ' + (tem[1] || '');
                }
                if (M[1] === 'Chrome') {
                  tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
                  if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
                }
                M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
                if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
                return M.join(' ');
            })();            
        } catch (error) {
            console.error(error);
            this.data = null;
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
