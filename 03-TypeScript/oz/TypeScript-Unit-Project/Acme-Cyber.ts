//make an generic collector interface
interface Collector<T> {
    getData(): T | null;
    interval: number;
    startCollect(): void;
    finishCollect(): void;
  }
  
  interface ContinousCollector<T> extends Collector<T> {
    bufferSize?: number;
  }
  // creat class utils
  class Utils {
    static maintainLastXItems<T>(array: T[], bufferSize: number, newItem: T): void {
      if (array.length >= bufferSize) {
        array.shift();
      }
      array.push(newItem);
    }
  }
  //create data collectors
  class ScreenWidthCollector implements Collector<number> {
    private data: number | null = null;
    interval: number;
    private collectInterval: number | null = null;
  
    constructor(interval: number) {
      this.interval = interval;
    }
  
    getData(): number | null {
      return this.data;
    }
  
    startCollect(): void {
      this.data = screen.width;
      this.collectInterval = globalThis.setInterval(() => {
        this.data = screen.width;
      }, this.interval);
    }
  
    finishCollect(): void {
      if (this.collectInterval !== null) {
        globalThis.clearInterval(this.collectInterval);
        this.data = null;
      }
    }
  }
  
  class MouseMoveCollector implements ContinousCollector<MouseEvent[]> {
    private data: MouseEvent[] = [];
    interval: number;
    bufferSize: number;
    private collectInterval: number | null = null;
  
    constructor(interval: number, bufferSize: number = 10) {
      this.interval = interval;
      this.bufferSize = bufferSize;
    }
  
    getData(): MouseEvent[] | null {
      return this.data;
    }
  
    startCollect(): void {
      document.addEventListener('mousemove', this.collectData.bind(this));
      this.collectInterval = globalThis.setInterval(() => {
        // Process data if needed
      }, this.interval);
    }
  
    finishCollect(): void {
      if (this.collectInterval !== null) {
        globalThis.clearInterval(this.collectInterval);
        this.data = [];
      }
      document.removeEventListener('mousemove', this.collectData.bind(this));
    }
  
    private collectData(event: MouseEvent): void {
      Utils.maintainLastXItems(this.data, this.bufferSize, event);
    }
  }
  
  function getConfig(): { COLLECTORS_INTERVAL: number, DEFAULT_BUFFER_CONTINOUS_COLLECTORS: number, SDK_ENABLED: boolean } {
    // Example URL: "https://acme-server.com/conf?customerId=12345"
    // In practice, this would fetch from the server. Here we return a constant.
    return {
      COLLECTORS_INTERVAL: 60000,
      DEFAULT_BUFFER_CONTINOUS_COLLECTORS: 10,
      SDK_ENABLED: true
    };
  }
  
  async function main() {
    const config = getConfig();
  
    if (!config.SDK_ENABLED) return;
  
    const collectors: Collector<any>[] = [
      new ScreenWidthCollector(config.COLLECTORS_INTERVAL),
      new MouseMoveCollector(config.COLLECTORS_INTERVAL, config.DEFAULT_BUFFER_CONTINOUS_COLLECTORS)
    ];
  
    collectors.forEach(collector => collector.startCollect());
  
    globalThis.setInterval(() => {
      collectors.forEach(collector => {
        const data = collector.getData();
        if (data !== null) {
          console.log(data); // Replace with actual server update
        }
      });
    }, config.COLLECTORS_INTERVAL);
  
    // Fetch configuration every 1 minute
    globalThis.setInterval(async () => {
      const newConfig = getConfig();
      localStorage.setItem('acme-cyber-config', JSON.stringify(newConfig));
    }, 60000);
  }
  
  document.addEventListener('acme-sdk-loaded', main);
  
  // Dispatch the custom event to start the SDK
  globalThis.addEventListener('load', () => {
    const event = new Event('acme-sdk-loaded');
    document.dispatchEvent(event);
  });