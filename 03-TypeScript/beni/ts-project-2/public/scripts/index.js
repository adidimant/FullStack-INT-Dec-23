import { EventsManager } from "./eventsManager.js";
import { Battery, BrowserInfo, Clipboard, ColorDepth, Connection, CookiesEnabled, CurrentURL, DeviceMemory, DoNotTrack, Geolocation, GetNetworkInformation, HardwareConcurrency, HistoryLength, JavaEnabled, Language, LocalStorageAvailable, OnlineStatus, Platform, Plugins, Referrer, ScreenHeight, ScreenWidth, TimeZone, TouchSupport, UserAgent, } from "./classes.js";
const customEvent = new CustomEvent("acme-sdk-loaded");
async function main() {
    console.log("main function triggered");
    // get the config data FROM THE "SERVER"!**
    let config = await EventsManager.getConfig();
    // save the config data in local storage
    localStorage.setItem("configData", JSON.stringify(config));
    // update the config data in the local storage to the latest version of the config data variable  each 'interval' time
    // setInterval(async () => {
    //   config = await EventsManager.getConfig();
    //   localStorage.setItem("configData", JSON.stringify(config));
    // }, 2000); // change interval time to 60000!
    // get the config data FROM THE LOCAL STORAGE!**
    async function getConfigData() {
        const configData = localStorage.getItem("configData");
        if (configData) {
            const configDataObj = JSON.parse(configData);
            if (configDataObj.COLLECTORS_INTERVAL &&
                configDataObj.DEFAULT_BUFFER_CONTINOUS_COLLECTORS &&
                configDataObj.SDK_ENABLED) {
                return configDataObj;
            }
            else {
                throw new Error("Config Data is corrupted.");
            }
        }
        throw new Error("Couldn't find configData.");
    }
    // get config data FROM LOCAL STORAGE and save in variable
    let configData = await getConfigData();
    // update the configData VARIABLE to the latest config data
    setInterval(async () => {
        configData = await getConfigData();
    }, 2000); // change interval to 60000
    // create an array for the collectors
    let collectorsArr = [];
    // save COLLECTORS_INTERVAL from config data in a variable
    let collectorsInterval = configData.COLLECTORS_INTERVAL;
    // create function to create collectors instances inside collectorsArr
    function createCollectors() {
        console.log("Creating collectors");
        collectorsArr = [];
        collectorsArr.push(new ScreenWidth(configData.COLLECTORS_INTERVAL), new ScreenHeight(configData.COLLECTORS_INTERVAL), new Language(configData.COLLECTORS_INTERVAL), new UserAgent(configData.COLLECTORS_INTERVAL), new TimeZone(configData.COLLECTORS_INTERVAL), new CookiesEnabled(configData.COLLECTORS_INTERVAL), new JavaEnabled(configData.COLLECTORS_INTERVAL), new OnlineStatus(configData.COLLECTORS_INTERVAL), new Referrer(configData.COLLECTORS_INTERVAL), new LocalStorageAvailable(configData.COLLECTORS_INTERVAL), new GetNetworkInformation(configData.COLLECTORS_INTERVAL), new Clipboard(configData.COLLECTORS_INTERVAL), new Connection(configData.COLLECTORS_INTERVAL), new BrowserInfo(configData.COLLECTORS_INTERVAL), new Platform(configData.COLLECTORS_INTERVAL), new DeviceMemory(configData.COLLECTORS_INTERVAL), new HardwareConcurrency(configData.COLLECTORS_INTERVAL), new Plugins(configData.COLLECTORS_INTERVAL), new Geolocation(configData.COLLECTORS_INTERVAL), new DoNotTrack(configData.COLLECTORS_INTERVAL), new Battery(configData.COLLECTORS_INTERVAL), new CurrentURL(configData.COLLECTORS_INTERVAL), new HistoryLength(configData.COLLECTORS_INTERVAL), new ColorDepth(configData.COLLECTORS_INTERVAL), new TouchSupport(configData.COLLECTORS_INTERVAL));
    }
    // create function to update collectors instances to a new interval in case COLLECTORS_INTERVAL is changed in config
    function updateCollectors() {
        if (collectorsInterval == configData.COLLECTORS_INTERVAL) {
            return;
        }
        else {
            createCollectors();
            collectorsInterval = configData.COLLECTORS_INTERVAL;
        }
    }
    // initial creation of all collectors instances
    createCollectors();
    // set interval to check if collectors instances should be updated
    setInterval(updateCollectors, 60000);
    // create a boolean variable to check later if the collectors are collecting
    let areCollecting = false;
    // create a turn on function to trigger all collectors' "startCollecting()" function
    async function turnOn() {
        areCollecting = true;
        console.log("Turning on");
        await Promise.all(collectorsArr.map((collector) => collector.startCollect()));
        saveCollectorsDataInStorage();
    }
    // initial trigger for the collectors
    turnOn();
    // create a turn off function to trigger all collectors' "finishCollecting()" function in case SDK will need to be disabled
    function turnOff() {
        areCollecting = false;
        console.log("Shutting down");
        collectorsArr.forEach((collector) => {
            collector.finishCollect();
        });
    }
    // create interval that checks if the SDK is enabled or disabled and turn on \ off collectors accordingly
    setInterval(() => {
        if (configData.SDK_ENABLED && !areCollecting) {
            turnOn();
        }
        else if (!configData.SDK_ENABLED && areCollecting) {
            turnOff();
        }
    }, 100);
    // create function to save all of collector's data in local storage
    function saveCollectorsDataInStorage() {
        const collectorsDataObj = {};
        collectorsArr.forEach((collector) => {
            collectorsDataObj[`${collector.getKey()}`] = collector.getData();
            if (collector.getKey() == "Network Information") {
            }
        });
        localStorage.setItem("collectorsData", JSON.stringify(collectorsDataObj));
        console.log("Collectors data saved in local storage.");
    }
    // update all collectors' data in local storage every 'interval'
    setInterval(saveCollectorsDataInStorage, 2000);
    // ------- START OF TESTING -------------
    // setTimeout(() => {
    //   console.log("DISABLING SDK");
    //   configData.SDK_ENABLED = false;
    // }, 6000);
    // setTimeout(() => {
    //   console.log("ENABLING SDK");
    //   configData.SDK_ENABLED = true;
    // }, 10000);
    // ------- END OF TESTING -------------
}
window.addEventListener("acme-sdk-loaded", main);
window.dispatchEvent(customEvent);
