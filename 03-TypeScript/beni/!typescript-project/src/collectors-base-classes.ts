import { Collector, ContinuousCollector } from "./collector-interfaces.js";
import Utils from "./utils.js";

export abstract class RegularCollectorBaseClass<T> implements Collector<T> {
  public interval: number | undefined;
  protected data: T | T[] | null;
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
    this.data = null;
    this.interval = 0;
    this.init();
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
    this.bufferSize = bufferSize;
    this.interval = 0;
    this.data = null;
    this.init();
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
