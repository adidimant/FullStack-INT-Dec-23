declare global { // this is global for all the project
  interface Window {
    doNotTrack: string | null;
  }  
  
  interface Navigator {
        appVersion: number
        userLanguage: string;
        connection: object;
        mozConnection: object;
        webkitConnection: object;
        platform: string;
        deviceMemory: number;
        javaEnabled: ()=> void;
        plugins: DeprecatedPluginArray;
        msDoNotTrack: string;
        getBattery: () => Promise<BatteryManager>;
        msMaxTouchPoints: number;
      // non-recognized data-points by typescript here
    }

    interface BatteryManager{
      level: number;
      charging: boolean;
    }

    interface DeprecatedPlugin {
      name: string;
      description: string;
      filename: string;
      length: number;
  }
  
  interface DeprecatedPluginArray {
      length: number;
      item(index: number): DeprecatedPlugin | null;
      namedItem(name: string): DeprecatedPlugin | null;
      [index: number]: DeprecatedPlugin;
  }
}
export {}