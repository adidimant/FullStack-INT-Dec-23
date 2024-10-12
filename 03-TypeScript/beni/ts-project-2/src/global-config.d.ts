export {};

declare global {
  interface Connection {
    downlink: number;
    effectiveType: string;
    onchange: null | (() => void);
    rtt: number;
    saveData: boolean;
  }

  interface Navigator {
    userLanguage: string;
    connection: Connection;
    mozConnection: Connection;
    webkitConnection: Connection;
    deviceMemory: number | string;
    msDoNotTrack: string | null | undefined;
    getBattery(): Promise<any>;
    msMaxTouchPoints: number | undefined;
    platform: string;
  }

  interface Window {
    doNotTrack: string | null | undefined;
  }
}
