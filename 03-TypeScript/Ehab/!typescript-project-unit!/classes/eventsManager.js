export class EventsManager {
  static IsEnabled = false;
  static async getConfig(customerId) {
      /*
        const response = await fetch(`https://acme-server.com/conf?customerId=${customerId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
      */   
      const config = {
        COLLECTORS_INTERVAL: 6000,
        DEFAULT_BUFFER_CONTINOUS_COLLECTORS: 10,
        SDK_ENABLED: EventsManager.IsEnabled
      }
      return config
    }

    static async updateData(data) {
    /*
    const data: { [key: string]: collectors } ={};
    collectors.forEach((collector)=> {
      let key: string = collector.getKey();
      data[key] = collector.getData
    });
    try {
      const response = await fetch('https://acme-server.com/update', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      });

      if (!response.ok) {
          throw new Error('Failed to update data on the server');
      }

      const responseData = await response.json();
      console.log('Data updated successfully:', responseData);
      return responseData; // You can handle the response as needed
  } catch (error) {
      console.error('Error updating data:', error);
      throw error;
  }
  */
  }

  static getConfiguration() {
    let jsonString = window.localStorage.getItem("configuration");
    let data;
    if (jsonString) {
        data = JSON.parse(jsonString);
    } else {
        return undefined;
    }
    return data;
  }

  static getInterval() {
    try {
        let configuration = this.getConfiguration();
        if (configuration) {
            return configuration['COLLECTORS_INTERVAL'];
        }
        return -1;
    } catch (error) {
        return -1;
    }
  }

  static getDefaultBufferContinousCcollectors() {
    try {
      let configuration = this.getConfiguration()
      if (configuration) {
        return configuration["DEFAULT_BUFFER_CONTINOUS_COLLECTORS"]
      }
      return -1
    } catch (error) {
      return -1
    }
  }
}
