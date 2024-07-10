// Import collector inteface:
import { Collector } from '../interfaces/ICollector.js';
import { ContinuousCollector } from '../interfaces/IContinuousCollector.js';
import { Utils } from '../utils/Utils.js';
import { EventsManager } from "./eventsManager.js";

const config = EventsManager.getConfig();

// A class to monitor the mouse moves:
// bufferSize - 50 last items
export class MouseMoveCollector implements Collector<MouseEvent>, ContinuousCollector<MouseEvent> {
    public interval: number;
    public key: string;
    private data: Array<MouseEvent | null> | null;
    public SDK_ENABLED: boolean;
    public bufferSize: number;
    private collectionInterval: number | null; // needed as an ID for the interval

    constructor(bufferSize?: number) {
      this.interval = config.COLLECTORS_INTERVAL;
      this.SDK_ENABLED = config.SDK_ENABLED;
      this.key = this.constructor.name;
      this.data = []; // initializing the data to empty array when the class is first assigned.
      this.collectionInterval = null; // initializing the collectionInterval ID to null when the class is first assigned.
      this.bufferSize = bufferSize != undefined ? bufferSize : config.DEFAULT_BUFFER_CONTINUOUS_COLLECTORS;
    }

    getKey(): string {
      return this.key;
    }

    getData(): Array<MouseEvent | null> | null {
      return this.data;
    }

    startCollect(): void {
      if (this.SDK_ENABLED) {
        document.addEventListener("mousemove", (mousemoveEvent) => {
          if (mousemoveEvent) {
            if (this.data !== null) {
              this.data = Utils.maintainLastXItems(this.data, this.bufferSize, mousemoveEvent);
              EventsManager.addCollectorData(this);
            } else {
                console.error('Data array is null. Cannot collect data'); //should never happen
            }
          }
        });
        this.collectionInterval = window.setInterval(() => {
            EventsManager.addCollectorData(this);
        }, this.interval);
      }
    }

    finishCollect(): void {
      if (this.collectionInterval != null) {
        clearInterval(this.collectionInterval);
        this.collectionInterval = null;
      }
      this.data = null;
    }
}

// A class to monitor keyboard pressing:
// bufferSize - 50 last items
export class KeyboardPressingCollector implements Collector<KeyboardEvent>, ContinuousCollector<KeyboardEvent> {
  public interval: number;
  public key: string;
  private data: Array<KeyboardEvent | null> | null;
  public SDK_ENABLED: boolean;
  public bufferSize: number;
  private collectionInterval: number | null; // needed as an ID for the interval

  constructor(bufferSize?: number) {
    this.interval = config.COLLECTORS_INTERVAL;
    this.SDK_ENABLED = config.SDK_ENABLED;
    this.key = this.constructor.name;
    this.data = []; // initializing the data to empty array when the class is first assigned.
    this.collectionInterval = null; // initializing the collectionInterval ID to null when the class is first assigned.
    this.bufferSize = bufferSize != undefined ? bufferSize : config.DEFAULT_BUFFER_CONTINUOUS_COLLECTORS;
  }

  getKey(): string {
    return this.key;
  }

  getData(): Array<KeyboardEvent | null> | null {
    return this.data;
  }

  startCollect(): void {
    if (this.SDK_ENABLED) {
      document.addEventListener("keyup", (keyupEvent) => {
        if (keyupEvent) {
          if (this.data !== null) {
            this.data = Utils.maintainLastXItems(this.data, this.bufferSize, keyupEvent);
            EventsManager.addCollectorData(this);
          } else {
              console.error('Data array is null. Cannot collect data'); //should never happen
          }
        }
      });
      this.collectionInterval = window.setInterval(() => {
        EventsManager.addCollectorData(this);
      }, this.interval);
    }
  }

  finishCollect(): void {
    if (this.collectionInterval != null) {
      clearInterval(this.collectionInterval);
      this.collectionInterval = null;
    }
    this.data = null;
  }
}

// A class to monitor clicks:
// bufferSize - 10 last items
export class ClicksCollector implements Collector<MouseEvent>, ContinuousCollector<MouseEvent> {
  public interval: number;
  public key: string;
  private data: Array<MouseEvent | null> | null;
  public SDK_ENABLED: boolean;
  public bufferSize: number;
  private collectionInterval: number | null; // needed as an ID for the interval

  constructor(bufferSize?: number) {
    this.interval = config.COLLECTORS_INTERVAL;
    this.SDK_ENABLED = config.SDK_ENABLED;
    this.key = this.constructor.name;
    this.data = []; // initializing the data to empty array when the class is first assigned.
    this.collectionInterval = null; // initializing the collectionInterval ID to null when the class is first assigned.
    this.bufferSize = bufferSize != undefined ? bufferSize : config.DEFAULT_BUFFER_CONTINUOUS_COLLECTORS;
  }

  getKey(): string {
    return this.key;
  }

  getData(): Array<MouseEvent | null> |null {
    return this.data;
  }

  startCollect(): void {
    if (this.SDK_ENABLED) {
      document.addEventListener("click", (clickEvent) => {
        if (clickEvent) {
          if (this.data !== null) {
            this.data = Utils.maintainLastXItems(this.data, this.bufferSize, clickEvent);
            EventsManager.addCollectorData(this);
          } else {
              console.error('Data array is null. Cannot collect data'); //should never happen
          }
        }
      });
      this.collectionInterval = window.setInterval(() => {
        EventsManager.addCollectorData(this);
      }, this.interval);
    }
  }

  finishCollect(): void {
    if (this.collectionInterval != null) {
      clearInterval(this.collectionInterval);
      this.collectionInterval = null;
    }
    this.data = null;
  }
}

// A class to monitor device motion - mobile (will success in browsers over mobile devices):
// bufferSize - last 40 items
export class DeviceMotionCollector implements Collector<DeviceMotionEvent>, ContinuousCollector<DeviceMotionEvent> {
  public interval: number;
  public key: string;
  private data: Array<DeviceMotionEvent | null> | null;
  public SDK_ENABLED: boolean;
  public bufferSize: number;
  private collectionInterval: number | null; // needed as an ID for the interval

  constructor(bufferSize?: number) {
    this.interval = config.COLLECTORS_INTERVAL;
    this.SDK_ENABLED = config.SDK_ENABLED;
    this.key = this.constructor.name;
    this.data = []; // initializing the data to empty array when the class is first assigned.
    this.collectionInterval = null; // initializing the collectionInterval ID to null when the class is first assigned.
    this.bufferSize = bufferSize != undefined ? bufferSize : config.DEFAULT_BUFFER_CONTINUOUS_COLLECTORS;
  }

  getKey(): string {
    return this.key;
  }

  getData(): Array<DeviceMotionEvent | null> | null{
    return this.data;
  }

  // Function to check if the device is a mobile device
private isMobileDevice(): boolean {
  const userAgent = navigator.userAgent.toLowerCase();
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
}

private getDeviceMotion(): Promise<DeviceMotionEvent> {
  return new Promise((resolve, reject) => {
    if (this.isMobileDevice()) {
      reject(new Error('Device motion not supported on non-mobile devices.'));
      return;
    }

    window.addEventListener('devicemotion', event => {
      resolve(event);
    }, { once: true });
  });
}

startCollect(): void {
  if (this.SDK_ENABLED) {
    this.getDeviceMotion()
      .then(event => {
        if (this.data !== null) {
          this.data = Utils.maintainLastXItems(this.data, this.bufferSize, event);
          EventsManager.addCollectorData(this);
        } else {
            console.error('Data array is null. Cannot collect data'); //should never happen
        }
      })
      .catch(error => {
        console.error('Error retrieving device motion data:', error.message);
      });

    this.collectionInterval = window.setInterval(() => {
      this.getDeviceMotion()
        .then(event => {
          if (this.data !== null) {
            this.data = Utils.maintainLastXItems(this.data, this.bufferSize, event);
            EventsManager.addCollectorData(this);
          } else {
              console.error('Data array is null. Cannot collect data'); //should never happen
          }
        })
        .catch(error => {
          console.error('Error retrieving device motion data:', error.message);
        });
    }, this.interval);
  }
}

  finishCollect(): void {
    if (this.collectionInterval != null) {
      clearInterval(this.collectionInterval);
      this.collectionInterval = null;
    }
    this.data = null;
  }
}

// A class to monitor device orientation - mobile (will success in browsers over mobile devices):
// bufferSize - last 40 items
export class DeviceOrientationCollector implements Collector<DeviceOrientationEvent>, ContinuousCollector<DeviceOrientationEvent> {
  public interval: number;
  public key: string;
  private data: Array<DeviceOrientationEvent | null> | null;
  public SDK_ENABLED: boolean;
  public bufferSize: number;
  private collectionInterval: number | null; // needed as an ID for the interval

  constructor(bufferSize?: number) {
    this.interval = config.COLLECTORS_INTERVAL;
    this.SDK_ENABLED = config.SDK_ENABLED;
    this.key = this.constructor.name;
    this.data = []; // initializing the data to empty array when the class is first assigned.
    this.collectionInterval = null; // initializing the collectionInterval ID to null when the class is first assigned.
    this.bufferSize = bufferSize != undefined ? bufferSize : config.DEFAULT_BUFFER_CONTINUOUS_COLLECTORS;
  }

  getKey(): string {
    return this.key;
  }

  getData(): Array<DeviceOrientationEvent | null> | null {
    return this.data;
  }

  // Function to check if the device is a mobile device
private isMobileDevice(): boolean {
  const userAgent = navigator.userAgent.toLowerCase();
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
}

private getDeviceOrientation(): Promise<DeviceOrientationEvent> {
  return new Promise((resolve, reject) => {
    if (this.isMobileDevice()) {
      reject(new Error('Device oreientaation not supported on non-mobile devices.'));
      return;
    }
    window.addEventListener('deviceorientation', event => {
      resolve(event);
    }, { once: true });
  });
}

startCollect(): void {
  if (this.SDK_ENABLED) {
    if (this.data === null) {
      this.data = [];
    }
    this.getDeviceOrientation()
      .then(event => {
        if (this.data !== null) {
            this.data = Utils.maintainLastXItems(this.data, this.bufferSize, event);
            EventsManager.addCollectorData(this);
        } else {
            console.error('Data array is null. Cannot collect device orientation data.'); //should never happen
        }
      })
      .catch(error => {
        console.error('Error retrieving device motion data:', error.message);
      });

    this.collectionInterval = window.setInterval(() => {
      this.getDeviceOrientation()
        .then(event => {
          if (this.data !== null) {
              EventsManager.addCollectorData(this);
          } else {
              console.error('Data array is null. Cannot collect device orientation data.'); //should never happen
          }
        })
        .catch(error => {
          console.error('Error retrieving device motion data:', error.message);
        });
    }, this.interval);
  }
}

  finishCollect(): void {
    if (this.collectionInterval != null) {
      clearInterval(this.collectionInterval);
      this.collectionInterval = null;
    }
    this.data = null;
  }
}
