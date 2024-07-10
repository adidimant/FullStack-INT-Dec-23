declare global {
    interface Navigator {
        connection?: NetworkInformation;
        mozConnection?: NetworkInformation;
        webkitConnection?: NetworkInformation;
        deviceMemory?: number;
        hardwareConcurrency?: number;
        msDoNotTrack?: string;
        getBattery?: () => Promise<BatteryManager>;
    }

    interface NetworkInformation {
        downlink: number;
        effectiveType: string;
        rtt: number;
        saveData: boolean;
    }

    interface Document {
        webkitHidden?: boolean;
        msHidden?: boolean;
        webkitVisibilityState?: 'hidden' | 'visible' | 'prerender' | 'unloaded';
        msVisibilityState?: 'hidden' | 'visible' | 'prerender' | 'unloaded';
    }

    interface Window {
        doNotTrack?: string;
        mozInnerScreenX?: number;
        mozInnerScreenY?: number;
        msDoNotTrack?: string;
        DeviceOrientationEvent?: any;
        DeviceMotionEvent?: any;
        TouchEvent?: any;
    }

    interface BatteryManager extends EventTarget {
        level: number;
        charging: boolean;
        addEventListener(type: string, listener: (this: BatteryManager, ev: Event) => any, useCapture?: boolean): void;
    }
}

export {};
