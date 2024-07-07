import { ConfigResponse } from "../interfaces/IConfigResponse";

export class EventsManager {
    constructor() {
        
    }

    static getConfig(): ConfigResponse | null{
        const config: string | null = localStorage.getItem('sdkConfig');
        if (!config) {
            console.error('sdkConfig not found');
        } else {
            return JSON.parse(config) as ConfigResponse;
        }
    }

    updateData() {

    }
}