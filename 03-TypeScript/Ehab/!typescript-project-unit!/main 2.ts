import { EventsManager } from "./classes/eventsManager"
import { screenWidth } from "./classes/regular_collectors/screenWidth"
import { screenHeight } from "./classes/regular_collectors/screenHeight"
import { language } from "./classes/regular_collectors/language"
import { userAgent } from "./classes/regular_collectors/userAgent"
import { timeZone } from "./classes/regular_collectors/timezone"
import { cookiesEnabled } from "./classes/regular_collectors/CookiesEnabled"
import { javaScriptEnabled } from "./classes/regular_collectors/javaScriptEnabled"
import { onlineStatus } from "./classes/regular_collectors/onlineStatus"
import { referrer } from "./classes/regular_collectors/referrer"
import { localStorageEnable } from "./classes/regular_collectors/localStorage"
import { networkInformation } from "./classes/regular_collectors/networkInformation"
import { clipboard } from "./classes/regular_collectors/clipboard"
import { browserInfo } from "./classes/regular_collectors/browserInfo"
import { platform } from "./classes/regular_collectors/platform"
import { deviceMemory } from "./classes/regular_collectors/deviceMemory"
import { hardwareConcurrency } from "./classes/regular_collectors/hardwareConcurrency"
import { plugins } from "./classes/regular_collectors/plugins"
import { doNotTrack } from "./classes/regular_collectors/doNotTrack"
import { battery } from "./classes/regular_collectors/battery"
import { currentUrl } from "./classes/regular_collectors/currentUrl"
import { historyLength } from "./classes/regular_collectors/historyLength"
import { colorDepth } from "./classes/regular_collectors/colorDepth"
import { touchSupport } from "./classes/regular_collectors/touchSupport"
import { mouseMove } from "./classes/continous_collectors/mouseMove"
import { keyboardPressing } from "./classes/continous_collectors/keyboardPressing"
import { clicksPressing } from "./classes/continous_collectors/clicksPressing"
import { deviceMotion } from "./classes/continous_collectors/deviceMotion"
import { deviceOrientation } from "./classes/continous_collectors/deviceOrientation"
import { Collector } from "./interfaces/interfaces"
import { collectors } from "./types/types"
import { } from "./global";
const chBox = document.getElementById('chxCollectData');
const h3Text = document.getElementById('h3Text');

//export const DEFAULT_INTERVAL: number = 6000;
//export let SDK_ENABLED: boolean = true;
//export const DEFAULT_BUFFER_CONTINOUS_COLLECTORS: number = 10

async function main(): Promise<void>{
    let config: object | null = null;
    let collectors: Collector<collectors>[];
    try {
        const currentConfig = window.localStorage.getItem("configuration");
        let currentConfigData;
        if (currentConfig) {
          currentConfigData = JSON.parse(currentConfig);
          if(currentConfigData['SDK_ENABLED']){
            EventsManager.IsEnabled = true;
            (chBox as HTMLInputElement).checked = true;
            (h3Text as HTMLInputElement).innerText = 'Collect data enabled';
          }else{
            EventsManager.IsEnabled = false;
            (chBox as HTMLInputElement).checked = false;
            (h3Text as HTMLInputElement).innerText = 'Collect data disabled';
          }
        }
    } catch (error) {
        console.error(error);
    }
    const fetchConf = async (): Promise<void> => {
        try {
            config = await EventsManager.getConfig('customerId');
            if(config){
                localStorage.setItem('configuration', JSON.stringify(config));
            }else {
                console.error('Failed to fetch configuration');
            }
        } catch (error) {
            console.error(error);
        }
    };
    (chBox as HTMLInputElement).addEventListener('change',async ()=>{
        if((chBox as HTMLInputElement).checked){
          EventsManager.IsEnabled = true;
          fetchConf();
          await new Promise(resolve => setTimeout(resolve, 100));
          collectors.forEach((collector => collector.startCollect()));
          (h3Text as HTMLInputElement).innerText = 'Collect data enabled';
        }else{
          EventsManager.IsEnabled = false;
          fetchConf();
          await new Promise(resolve => setTimeout(resolve, 100));
          collectors.forEach((collector => collector.finishCollect()));
          (h3Text as HTMLInputElement).innerText = 'Collect data disabled';
        }
      });

    fetchConf();
    setInterval(async ()=>{
        fetchConf(); 
    },60000);
    
    collectors = [
        new screenWidth(),
        new screenHeight(),
        new language(),
        new userAgent(),
        new timeZone(),
        new cookiesEnabled(),
        new javaScriptEnabled(),
        new onlineStatus(),
        new referrer(),
        new localStorageEnable(),
        new networkInformation(),
        new clipboard(),
        new browserInfo(),
        new platform(),
        new deviceMemory(),
        new hardwareConcurrency(),
        new plugins(),
        new doNotTrack(),
        new battery(),
        new currentUrl(),
        new historyLength(),
        new colorDepth(),
        new touchSupport(),
        new mouseMove(50),
        new keyboardPressing(50),
        new clicksPressing(10),
        new deviceMotion(40),
        new deviceOrientation(40),
    ];
    
    document.addEventListener('acme-sdk-loaded', async () => {
        console.log('load complete');
        collectors.forEach((collector)=> collector.startCollect());

        const intervalId: number = setInterval(()=>{
            const data: { [key: string]: collectors } ={};
            collectors.forEach((collector)=> {
                data[collector.getKey()] = collector.getData
            });
            // screenWidth
            (document.getElementById('screenWidth') as HTMLElement).innerHTML = 'Screen width: <span style="color: red">'+ data[collectors[0].getKey()] +'px</span>';
            // screenHeight
            (document.getElementById('screenHeight') as HTMLElement).innerHTML = 'Screen height: <span style="color: red">'+ data[collectors[1].getKey()] +'px</span>';
            // language
            (document.getElementById('language') as HTMLElement).innerHTML = 'Language: <span style="color: red">'+ data[collectors[2].getKey()] +'</span>';
            // userAgent
            (document.getElementById('userAgent') as HTMLElement).innerHTML = 'User agent: <span style="color: red">'+ data[collectors[3].getKey()]+'</span>';
            // timeZone
            (document.getElementById('timeZone') as HTMLElement).innerHTML = 'TimeZone: <span style="color: red">'+ data[collectors[4].getKey()] +'</span>';
            // cookiesEnabled
            (document.getElementById('cookiesEnabled') as HTMLElement).innerHTML = 'Cookies enabled: <span style="color: red">'+ data[collectors[5].getKey()] +'</span>';
            // javaScriptEnabled
            (document.getElementById('javaScriptEnabled') as HTMLElement).innerHTML = 'Javascript Enabled: <span style="color: red">'+ data[collectors[6].getKey()] +'</span>';
            // onlineStatus
            (document.getElementById('onlineStatus') as HTMLElement).innerHTML = 'Online status: <span style="color: red">'+ data[collectors[7].getKey()] +'</span>';
            // referrer
            (document.getElementById('referrer') as HTMLElement).innerHTML = 'Referrer: <span style="color: red">'+ data[collectors[8].getKey()] +'</span>';
            // localStorage
            (document.getElementById('localStorage') as HTMLElement).innerHTML = 'LocalStorage: <span style="color: red">'+ data[collectors[9].getKey()] +'</span>';
            // networkInformation
            (document.getElementById('networkInformation') as HTMLElement).innerHTML = 'Network information: <span style="color: red">'+ data[collectors[10].getKey()] +'</span>';
            // clipboard
            try {
                (document.getElementById('clipboard') as HTMLElement).innerHTML = 'Clipboard: <span style="color: red">'+ data[collectors[101].getKey()] +'</span>';
            } catch (error) {
                console.error('Document is not focused');
            }
            //browserInfo
            (document.getElementById('browserInfo') as HTMLElement).innerHTML = 'BrowserInfo: <span style="color: red">'+ data[collectors[12].getKey()] +'</span>';
            // platform
            (document.getElementById('platform') as HTMLElement).innerHTML = 'Platform: <span style="color: red">'+ data[collectors[13].getKey()] +'</span>';
            // deviceMemory
            (document.getElementById('deviceMemory') as HTMLElement).innerHTML = 'Device memory: <span style="color: red">'+ data[collectors[14].getKey()] +'</span>';
            // hardwareConcurrency
            (document.getElementById('hardwareConcurrency') as HTMLElement).innerHTML = 'Hardware concurrency: <span style="color: red">'+ data[collectors[15].getKey()] +'</span>';
            // plugins
            (document.getElementById('plugins') as HTMLElement).innerHTML = 'Plugins: <span style="color: red">'+ data[collectors[16].getKey()] +'</span>';
            // doNotTrack
            (document.getElementById('doNotTrack') as HTMLElement).innerHTML = 'Do not track: <span style="color: red">'+ data[collectors[17].getKey()] +'</span>';
            // battery
            (document.getElementById('battery') as HTMLElement).innerHTML = 'Battery: <span style="color: red">'+ data[collectors[18].getKey()] +'</span>';
            // currentUrl
            (document.getElementById('currentUrl') as HTMLElement).innerHTML = 'Current Url: <span style="color: red">'+ data[collectors[19].getKey()] +'</span>';
            // historyLength
            (document.getElementById('historyLength') as HTMLElement).innerHTML = 'History length: <span style="color: red">'+ data[collectors[20].getKey()] +'</span>';
            // colorDepth
            (document.getElementById('colorDepth') as HTMLElement).innerHTML = 'Color depth: <span style="color: red">'+ data[collectors[21].getKey()] +'</span>';
            // touchSupport
            (document.getElementById('touchSupport') as HTMLElement).innerHTML = 'Touch support: <span style="color: red">'+ data[collectors[22].getKey()] +'</span>';

            // mouseMove
            let MouseMovements = ''
            const mouseMoveData = collectors[23].getData();
            if(Array.isArray(mouseMoveData) &&mouseMoveData !== null ){
                mouseMoveData.forEach((obj ) => MouseMovements += '<br>'+JSON.stringify(obj) +',');
                (document.getElementById('mouseMove') as HTMLElement).innerHTML = 'Mouse move: <span style="color: red">'+ MouseMovements +'</span>';
            }
            
            // keyboardPressing
            let keyboardPressing = '';
            const keyboardPressingData = collectors[24].getData();
            if(Array.isArray(keyboardPressingData) &&keyboardPressingData !== null ){
                keyboardPressingData.forEach((obj)=> {
                    console.log(typeof obj)
                    keyboardPressing+= '<br>'+JSON.stringify(obj) +','
                });
                (document.getElementById('keyboardPressing') as HTMLElement).innerHTML = 'Keyboard pressing: <span style="color: red">'+ keyboardPressing +'</span>';
            }
            
            // clicksPressing
            let clicksPressing = '';
            const clicksPressingData = collectors[25].getData();
            if(Array.isArray(clicksPressingData) &&clicksPressingData !== null ){
                clicksPressingData.forEach((obj)=> clicksPressing+= '<br>'+JSON.stringify(obj) +',');
                (document.getElementById('clicksPressing') as HTMLElement).innerHTML = 'Clicks pressing: <span style="color: red">'+ clicksPressing +'</span>';
            }
            
            // deviceMotion
            let deviceMotion = '';
            const deviceMotionData = collectors[26].getData();
            if(Array.isArray(deviceMotionData) &&deviceMotionData !== null ){
                deviceMotionData.forEach((obj)=> deviceMotion+= '<br>'+JSON.stringify(obj) +',');
                (document.getElementById('deviceMotion') as HTMLElement).innerHTML = 'Device motion: <span style="color: red">'+ deviceMotion +'</span>';
            }
            

            // deviceOrientation
            let deviceOrientation= '';
            const deviceOrientationData = collectors[27].getData();
            if(Array.isArray(deviceOrientationData) &&deviceOrientationData !== null ){
                deviceOrientationData.forEach((obj)=> {
                    deviceOrientation+= '<br>'+JSON.stringify(obj) +','
                });
                (document.getElementById('deviceOrientation') as HTMLElement).innerHTML = 'Device orientation: <span style="color: red">'+ deviceOrientation +'</span>';    
            }
            
        },1000);
    });
    const event: Event = new CustomEvent('acme-sdk-loaded');
    document.dispatchEvent(event);    
}

main();