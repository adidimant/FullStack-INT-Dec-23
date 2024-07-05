export class EventsManager {
    constructor() {
    }
    getConfig() {
        const config = localStorage.getItem('sdkConfig');
        if (!config) {
            return console.error('sdkConfig not found');
        }
        return JSON.parse(config);
    }
    updateData() {
    }
}
