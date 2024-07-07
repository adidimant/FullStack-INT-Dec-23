declare global {
  interface Navigator {
    connection: any;
    mozConnection: any;
    webkitConnection: any;
    userLanguage: string;
    hardwareConcurrency: number;
  }

  interface Document {
    mozHidden: boolean;
    msHidden: boolean;
    webkitHidden: boolean;
  }

  interface Window {
    doNotTrack: string;
    msDoNotTrack: string;
  }
}

export {};