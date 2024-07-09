export class EventsManager {
    constructor() {
    }
    static getConfig() {
        const config = localStorage.getItem('sdkConfig');
        if (!config) {
            console.error('sdkConfig not found, getting default configuration.');
            return EventsManager.DEFAULT_CONFIG;
        }
        else {
            return JSON.parse(config);
        }
    }
    startCollectors(collectors) {
        collectors.forEach(collector => {
            collector.startCollect();
            //this.addCollectorData(collector);
        });
    }
    saveData(collectors) {
        collectors.forEach(collector => {
            collector.getData;
            //this.addCollectorData(collector);
        });
    }
    static getCollectedData() {
        return EventsManager.collectedData;
    }
    // add data from a specific collector => maybe not nessecary?
    static addCollectorData(collector) {
        const collectorData = collector.getData();
        this.collectedData[collector.getKey()] = collectorData;
        //console.log('data object is: ' + JSON.stringify(this.collectedData));
    }
    static addCollectorData2(key, value) {
        this.collectedData[key] = value;
        //console.log('data object2 is: ' + JSON.stringify(this.collectedData));
    }
    static getWidth() {
        return EventsManager.collectedData['ScreenWidthCollector'];
    }
    updateData() {
        console.log('data object is: ' + JSON.stringify(EventsManager.collectedData));
        const url = `https://acme-server.com/data`;
        // Perform POST request to update the data
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(EventsManager.collectedData)
        })
            .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update data');
            }
            console.log('Data updated successfully');
        })
            .catch(error => {
            console.error('Error updating data:', error);
        });
    }
}
EventsManager.DEFAULT_CONFIG = {
    COLLECTORS_INTERVAL: 60000,
    DEFAULT_BUFFER_CONTINUOUS_COLLECTORS: 10,
    SDK_ENABLED: true
};
EventsManager.intervalId = null;
//private static collectedData: DataObject<DataType> = {};
EventsManager.collectedData = {};
