//
import {NetworkInformationCollector, ClipboardCollector, DoNotTrackCollector} from './collectors/regular-collectors'
declare global { 
    interface Navigator {
        connection?: NetworkInformation;
        mozConnection?: NetworkInformation;
        webkitConnection?: NetworkInformation;
        //clipboard: Clipboard
        deviceMemory?: number| string| null;
       // msMaxTouchPoints?: boolean;
    }

    interface Document {
 
    }

    interface Window {
      doNotTrack: string;
      msDoNotTrack: string;
    }

    interface NetworkInformation {
      downlink: number;
      effectiveType: string;
      rtt: number;
      saveData: boolean;
    }

    // interface Clipboard {
    //   readText(): Promise<string>;
    //   writeText(data: string): Promise<void>;
    // }
}

export{};