import { Collector, ContinuousCollector } from "./collector-interfaces";

export default class EventsManager {
  static async getConfig() {
    // -- using fetch --
    // const response2 = await fetch("https://acme-server.com/conf");
    // const config = await response2.json() as { COLLECTORS_INTERVAL: number; DEFAULT_BUFFER_CONTINOUS_COLLECTORS: number; SDK_ENABLED: boolean };
    // localStorage.setItem("config", JSON.stringify(response2));

    const response = await new Promise<{
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
    localStorage.setItem("config", JSON.stringify(response));
  }

  static async updateData<T>(data: (Collector<T> | ContinuousCollector<T>)[]) {
    // try {
    //   const response = await fetch("https://acme-server.com/conf", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   if (!response.ok) {
    //     throw new Error(`Network response was not ok: ${response.statusText}`);
    //   }
    //   const responseData = await response.json();
    //   console.log("Success:", responseData);
    //   return responseData;
    // } catch (error) {
    //   console.error(error);
    // }
  }
}
