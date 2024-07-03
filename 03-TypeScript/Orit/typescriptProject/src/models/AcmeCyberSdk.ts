import { ConfigResponse } from '../interfaces/IConfigResponse';

export class AcmeCyberSdk {
    private customerId: string | null;

    private TEST_CONFIG: ConfigResponse = {
        COLLECTORS_INTERVAL: 60000,
        DEFAULT_BUFFER_CONTINOUS_COLLECTORS: 10,
        SDK_ENABLED: true
    };

    constructor() {
        this.customerId = this.getCustomerId();
    }

    public saveCustomerId(customerId: string): void {
        localStorage.setItem('customerId', customerId);
    }
    
    public getCustomerId(): string | null {
        return localStorage.getItem('customerId');
    }

    private saveConfig(configObj: ConfigResponse): void {
        localStorage.setItem('sdkConfig', JSON.stringify(configObj))
    }

    public getConfig(): ConfigResponse | null {
        const config = localStorage.getItem('sdkConfig');
        if (config) {
            return JSON.parse(config);
        }
        return null;
    }

    public async fetchConfiguration(customerId:string | null): Promise<ConfigResponse | null |undefined> {
        //TODO: this 
        if (!customerId) {
            console.error('Customer ID not found');
            return;
        }

        //encodeURIComponent() is needed for when the customer Id contains special characters.
        const url = `https://acme-server.com/conf?customerId=${encodeURIComponent(customerId)}`; 

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
            return config;*/

            if (!this.TEST_CONFIG) { 
                throw new Error("Error fetching configuration.");
            }
            this.saveConfig(this.TEST_CONFIG)
            return this.getConfig();
        }
        catch(error) {
            console.error('Fetch configuration failed:', error);
            throw error;
        }
    }
}