import { ConfigDataInterface } from "./interfaces";

export class EventsManager {
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

  static async getConfig(): Promise<ConfigDataInterface> {
    const config: ConfigDataInterface = {
      COLLECTORS_INTERVAL: 60000,
      DEFAULT_BUFFER_CONTINOUS_COLLECTORS: 10,
      SDK_ENABLED: true,
    };
    return config;
  }

  static async updateData(id: string): Promise<void> {
    try {
      const dataObj = localStorage.getItem("collectorsData");

      if (!dataObj) {
        throw new Error("Couldn't find data object!");
      }

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
}
