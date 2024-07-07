import { ConfigResponse } from '../interfaces/IConfigResponse';
import { Utils } from '../utils/Utils.js';

export class Configuration {
    private customerId: string;

    private TEST_CONFIG: ConfigResponse = {
        COLLECTORS_INTERVAL: 60000,
        DEFAULT_BUFFER_CONTINOUS_COLLECTORS: 10,
        SDK_ENABLED: true
    };

    constructor() {
        this.customerId = this.getOrGenerateCustomerId();
        this.startFetchingConfiguration();
    }
    
    public getOrGenerateCustomerId(): string {
        let savedCustomerId = localStorage.getItem('customerId');
        if (!savedCustomerId) {
            savedCustomerId = Utils.generateUUID();
            localStorage.setItem('customerId', savedCustomerId);
        }
        return savedCustomerId;
    }

    private saveConfig(configObj: ConfigResponse): void {
        localStorage.setItem('sdkConfig', JSON.stringify(configObj))
    }

    /*public async getConfigFromStorage(): Promise<ConfigResponse | void> {
        const config = localStorage.getItem('sdkConfig');
        if (!config) {
            await this.fetchConfiguration();
            return this.getConfigFromStorage(); // Recall to get the freshly fetched config
        }
        return JSON.parse(config) as ConfigResponse;
    }*/

    public async fetchConfiguration(): Promise<ConfigResponse> {
        if (!this.customerId) {
            console.error('Customer ID not found');
            this.getOrGenerateCustomerId();
        }

        //encodeURIComponent() is needed for when the customer Id contains special characters.
        const url = `https://acme-server.com/conf?customerId=${encodeURIComponent(this.customerId)}`; 

        try {
            // fetch from remote server (commented out because it is fake):
            /*const response = await fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
            // Options for response: response.ok, response.json, response.status, response.statusText, response.text, response.clone, response.body, response.headers
            if (!response.ok) { 
                throw new Error("Error fetching configuration. {$response.status}. {$response.statusText}");
            }
            const config: ConfigResponse = response.json();
            localStorage.setItem('sdkConfig', JSON.stringify(config));
            return config;*/

            if (!this.TEST_CONFIG) { 
                throw new Error("Error fetching configuration.");
            }
            localStorage.setItem('sdkConfig', JSON.stringify(this.TEST_CONFIG));
            //this.saveConfig(this.TEST_CONFIG);
            //console.log(this.TEST_CONFIG);
            return this.TEST_CONFIG;
        }
        catch(error) {
            console.error('Fetch configuration failed:', error);
            throw error;
        }
    }

    private startFetchingConfiguration(){
        // Fetch configuration immediately and then every 1 minute
        this.fetchConfiguration();
        setInterval(() => {               //first is the function and then the interval
            this.fetchConfiguration();
        }, 60000);
    }
}