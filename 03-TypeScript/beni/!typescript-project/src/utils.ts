export default class Utils {
  static maintainLastXItems<T>(arr: T[], bufferSize: number, item: T) {
    if (arr.length < bufferSize) {
      arr.push(item);
    } else {
      arr.shift();
      arr.push(item);
    }
  }

  static {
    setInterval((): void => {});

    // inside this static block i can make the logic to check when the 'getConfig' has done recieveing information and dispatch the event that main will listen to?
  }

  static async getConfig() {
    return new Promise<{
      COLLECTORS_INTERVAL: number;
      DEFAULT_BUFFER_CONTINOUS_COLLECTORS: number;
      SDK_ENABLED: boolean;
    }>((resolve) => {
      resolve({
        COLLECTORS_INTERVAL: 60000,
        DEFAULT_BUFFER_CONTINOUS_COLLECTORS: 10,
        SDK_ENABLED: true,
      });
    });
  }

  // -- real fetch function --
  // const response = await fetch("https://acme-server.com/conf");
  // const config = await response.json();
  // return config as { COLLECTORS_INTERVAL: number; DEFAULT_BUFFER_CONTINOUS_COLLECTORS: number; SDK_ENABLED: boolean };
}
