import { ConfigDataInterface } from "./interfaces";

export class EventsManager {
  // -------- START OF FETCH CONFIGURATION WITH API EXAMPLE ---------
  static async getConfigWithAPI(id: string): Promise<ConfigDataInterface | null> {
    try {
      const response = await fetch(`https://acme-server.com/conf?customerId=${id}`);
      if (!response.ok) {
        throw new Error(`Error fetching config: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Failed to fetch configuration:", err);
      return null;
    }
  }
  // -------- END OF FETCH CONFIGURATION WITH API EXAMPLE ---------

  static async getConfig(): Promise<ConfigDataInterface> {
    const config: ConfigDataInterface = {
      COLLECTORS_INTERVAL: 2000, // change to 60000!
      DEFAULT_BUFFER_CONTINOUS_COLLECTORS: 10,
      SDK_ENABLED: true,
    };
    return config;
  }

  static async updateDataWithAPI(id: string): Promise<void> {
    try {
      const dataString = localStorage.getItem("collectorsData");

      if (!dataString) {
        throw new Error("Couldn't find data object!");
      }

      const dataObj = JSON.parse(dataString);

      const response = await fetch(`https://acme-server.com/conf?customerId=${id}`, {
        method: "POST",
        body: dataObj,
      });
      if (!response.ok) {
        throw new Error(`Error posting data: ${response.statusText}`);
      }
    } catch (err) {
      console.error("Couldn't post data.", err);
    }
  }

  static async updateData(): Promise<void> {
    const dataString = localStorage.getItem("collectorsData");

    if (!dataString) {
      throw new Error("Couldn't find data object!");
    }
  }
}
