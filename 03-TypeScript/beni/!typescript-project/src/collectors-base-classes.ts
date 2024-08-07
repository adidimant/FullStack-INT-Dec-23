import { Collector, ContinuousCollector } from "./collector-interfaces.js";
import EventsManager from "./EventsManager.js";

export abstract class RegularCollectorBaseClass<T> implements Collector<T> {
  public interval: number | undefined;
  protected data: T | T[] | null;
  protected intervalFn: ReturnType<typeof setInterval> | undefined;

  constructor() {
    this.data = null;
    this.interval = 0;
    this.init();
  }

  async init() {
    try {
      const configString = localStorage.getItem("config");
      if (configString) {
        const configObj = JSON.parse(configString);
        this.interval = configObj.COLLECTORS_INTERVAL;
      }
    } catch (error) {
      console.error("Failed to fetch config:", error);
    }
  }

  getData(): T | T[] | null {
    console.log(this.data);
    return this.data;
  }

  startCollect(): void {}

  finishCollect(): void {
    this.data = null;
  }
}

export abstract class ContinuousCollectorBaseClass<T>
  implements Collector<T>, ContinuousCollector<T>
{
  public bufferSize?: number | undefined;
  public interval: number | undefined;
  protected data: T | T[] | null;
  protected intervalFn: ReturnType<typeof setInterval> | undefined;
  constructor(bufferSize?: number) {
    this.bufferSize = bufferSize;
    this.interval = 0;
    this.data = null;
    this.init();
  }

  async init() {
    try {
      const configString = localStorage.getItem("config");
      if (configString) {
        const configObj = JSON.parse(configString);
        this.interval = configObj.COLLECTORS_INTERVAL;
        if (this.bufferSize) {
          return;
        }
        this.bufferSize = configObj.DEFAULT_BUFFER_CONTINOUS_COLLECTORS;
      }
    } catch (error) {
      console.error("Failed to fetch config:", error);
    }
  }

  getData(): T | T[] | null {
    console.log(this.data);
    return this.data;
  }

  startCollect(): void {}

  finishCollect(): void {
    this.data = null;
  }
}
