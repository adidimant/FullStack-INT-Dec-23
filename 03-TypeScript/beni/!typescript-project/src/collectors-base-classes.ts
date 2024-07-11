import { Collector, ContinuousCollector } from "./collectors-interface.js";
import Utils from "./utils.js";

export abstract class RegularCollectorBaseClass<T> implements Collector<T> {
  public abstract getData(state: string): T | null;
  public interval: number | undefined;
  protected intervalFn: ReturnType<typeof setInterval> | undefined;
  protected async init() {
    try {
      const config = await Utils.getConfig();
      this.interval = config.COLLECTORS_INTERVAL;
    } catch (error) {
      console.error("Failed to fetch config:", error);
    }
  }

  constructor() {
    this.interval = 0;
    this.init();
  }

  startCollect(): void {
    if (this.interval == undefined) {
      console.log("Interval is still being fetched, please try again.");
    } else {
      this.intervalFn = setInterval(() => {
        this.getData("start"); // change this to something that REALLY gets the screen's width! (window.something probably)
      }, this.interval);
    }
  }

  finishCollect(): void {
    if (this.intervalFn !== undefined) {
      clearInterval(this.intervalFn);
    }
    this.getData("finish"); // needs to return null this time
  }
}

export abstract class ContinuousCollectorBaseClass<T>
  implements Collector<T>, ContinuousCollector<T>
{
  public bufferSize?: number | undefined;
  public interval: number | undefined;
  private intervalFn: ReturnType<typeof setInterval> | undefined;
  public abstract getData(state: string): T | null;
  private async init() {
    try {
      const config = await Utils.getConfig();
      this.interval = config.COLLECTORS_INTERVAL;
      if (this.bufferSize) {
        return;
      }
      this.bufferSize = config.DEFAULT_BUFFER_CONTINOUS_COLLECTORS;
    } catch (error) {
      console.error("Failed to fetch config:", error);
    }
  }

  constructor(bufferSize?: number) {
    this.interval = 0;
    this.bufferSize = bufferSize;
    this.init();
  }

  startCollect(): void {
    if (this.interval == undefined) {
      console.log("Interval is still being fetched, please try again.");
    } else {
      this.intervalFn = setInterval(() => {
        this.getData("start"); // change this to something that REALLY gets the screen's width! (window.something probably)
      }, this.interval);
    }
  }

  finishCollect(): void {
    if (this.intervalFn !== undefined) {
      clearInterval(this.intervalFn);
    }
    this.getData("finish"); // needs to return null this time
  }
}
