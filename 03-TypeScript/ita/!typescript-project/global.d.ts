import { BatteryData, NetworkInformation } from "./src/interface"


declare global { 
    

    interface Navigator {
        connection?: NetworkInformation;
        mozConnection?: NetworkInformation;
        webkitConnection?: NetworkInformation;
        deviceMemory?: number | 'unknown';
        msDoNotTrack?: string | null; 
        getBattery?: () => Promise<BatteryData>;
        msMaxTouchPoints?: number | undefined;
        userLanguage?: string;
    }

    interface Document {
        // non-recognized data-points by typescript here
    }

    interface Window {
        doNotTrack?: string | null;
        // non-recognized data-points by typescript here
    }
} 

export {};