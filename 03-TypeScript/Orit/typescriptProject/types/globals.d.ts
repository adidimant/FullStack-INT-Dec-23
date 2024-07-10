import { BatteryInformation, NetworkInformation } from "../src/interfaces/ICollector";

declare global { // this is global for all the project
    interface Navigator {
        userLanguage?: string;
        deviceMemory?: number | 'unknown';
        connection?: NetworkInformation;
        mozConnection?: NetworkInformation;
        webkitConnection?: NetworkInformation;
        msDoNotTrack?: string | null;
        msMaxTouchPoints?: number;
        //getBattery?: BatteryInformation | undefined | null;
        // non-recognized data-points by typescript here
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
