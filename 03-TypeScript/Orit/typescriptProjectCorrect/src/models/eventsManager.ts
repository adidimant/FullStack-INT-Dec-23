import { ConfigResponse } from "../interfaces/IConfigResponse.js";
import { DataObject } from "../interfaces/idataObject.js";
import { Collector } from "../interfaces/ICollector.js";
import { CollectedData, DataType } from "../types/DataType.js";

export class EventsManager {
    private static DEFAULT_CONFIG: ConfigResponse = {
        COLLECTORS_INTERVAL: 60000,
        DEFAULT_BUFFER_CONTINUOUS_COLLECTORS: 10,
        SDK_ENABLED: true
    };
    private static intervalId: number | null = null;

    //private static collectedData: DataObject<DataType> = {};
    private static collectedData: CollectedData = {};

    constructor() {
        
    }

    static getConfig(): ConfigResponse {
        const config: string | null = localStorage.getItem('sdkConfig');
        if (!config) {
            console.error('sdkConfig not found, getting default configuration.');
            return EventsManager.DEFAULT_CONFIG;
        } else {
            return JSON.parse(config) as ConfigResponse;
        }
    }

    public startCollectors(collectors: Collector<any>[]): void {
        collectors.forEach(collector => {
            collector.startCollect();
            //this.addCollectorData(collector);
        });
    }
    public saveData(collectors: Collector<any>[]): void {
        collectors.forEach(collector => {
            collector.getData;
            //this.addCollectorData(collector);
        });
    }

    static getCollectedData(): CollectedData{
        return EventsManager.collectedData;
    }

    // add data from a specific collector => maybe not nessecary?
    static addCollectorData(collector: Collector<any>): void {
        const collectorData = collector.getData();
        this.collectedData[collector.getKey()] = collectorData;
        //console.log('data object is: ' + JSON.stringify(this.collectedData));
    }

    static addCollectorData2<T>(key: string, value: DataType): void {
        this.collectedData[key] = value;
        //console.log('data object2 is: ' + JSON.stringify(this.collectedData));
    }
    
    static getWidth(): DataType {
        return EventsManager.collectedData['ScreenWidthCollector'];
    }

    public updateData(): void {
        console.log('data object is: ', EventsManager.collectedData);

        const url: string = `https://acme-server.com/data`;
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