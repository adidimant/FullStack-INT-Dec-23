import { RetryAgent } from "../../../node_modules/undici/index";

export class EventsManager {
    customerId: string;

    constructor(customerId: string) { //אפשר  להוסיף גם את הURL לקונסטרקטור ואז זה יכנס אטומטית לפונקציות....
        this.customerId = customerId
    }
    
    async getConfig(): Promise<{ COLLECTORS_INTERVAL: number, 
        DEFAULT_BUFFER_CONTINOUS_COLLECTORS: number, 
        SDK_ENABLED: boolean }> {
        
        // await fetch(`https://acme-server.com/conf?customerId=${this.customerId}`)
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         return response.json();
        //     })
        //     .then((data) => {
        //         let configuration1 = data;

        //         return configuration1
        //     })
        //     .catch(error => {
        //         console.error('There was a problem with fetch operation:', error);
        //     });

        const config = { COLLECTORS_INTERVAL: 60000, 
            DEFAULT_BUFFER_CONTINOUS_COLLECTORS: 10, 
            SDK_ENABLED: true };
            
        localStorage.setItem('acme-sdk-config', JSON.stringify(config));
        return config;
    }

    static async updateData(collectorsData: { [key: string]: any }): Promise<void> {
        // fetch("https://acme-server.com/conf?customerId=${this.customerId}", {
        //     method: "POST",
        //     body: JSON.stringify(collectorsData),
        //     headers: {
        //       "Content-type": "application/json; charset=UTF-8"
        //     }
        //   })
        //     .then((response) => response.json())
        //     .then((json) => console.log(json));
        console.log(collectorsData)
        localStorage.setItem('collectorsData', JSON.stringify(collectorsData));
    }

    static getCollectorData(): object {
        const collectorsDataJSON = localStorage.getItem('collectorsData'); 
        let collectorsData = {}; 
    
        if (collectorsDataJSON) {
            collectorsData = JSON.parse(collectorsDataJSON); 
        }
    
        return collectorsData;
    }
}