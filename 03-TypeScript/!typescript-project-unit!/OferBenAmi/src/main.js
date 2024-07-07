"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
const customEvents_1 = require("./customEvents");
const ScreenHeight_1 = require("./collectors/regularCollectors/ScreenHeight");
const ScreenWidth_1 = require("./collectors/regularCollectors/ScreenWidth");
const classes_2 = require("./classes");
const Language_1 = require("./collectors/regularCollectors/Language");
const UserAgent_1 = require("./collectors/regularCollectors/UserAgent");
const MouseMove_1 = require("./collectors/continuousCollectors/MouseMove");
const KeyPress_1 = require("./collectors/continuousCollectors/KeyPress");
const mouseClick_1 = require("./collectors/continuousCollectors/mouseClick");
const DeviceMotion_1 = require("./collectors/continuousCollectors/DeviceMotion");
const DeviceOrientation_1 = require("./collectors/continuousCollectors/DeviceOrientation");
const TimeZone_1 = require("./collectors/regularCollectors/TimeZone");
const CookieEnabled_1 = require("./collectors/regularCollectors/CookieEnabled");
const JavaScriptEnabled_1 = require("./collectors/regularCollectors/JavaScriptEnabled");
const OnLine_1 = require("./collectors/regularCollectors/OnLine");
const Referrer_1 = require("./collectors/regularCollectors/Referrer");
const LocalStorageAvailable_1 = require("./collectors/regularCollectors/LocalStorageAvailable");
const NetWorkInformation_1 = require("./collectors/regularCollectors/NetWorkInformation");
const Clipboard_1 = require("./collectors/regularCollectors/Clipboard");
const config = { COLLECTORS_INTERVAL: 60000, DEFAULT_BUFFER_CONTINOUS_COLLECTORS: 50, SDK_ENABLED: true }; // fake data
document.addEventListener("acme-sdk-loaded", (e) => {
    console.log(e.detail.text);
});
function main() {
    classes_1.Utils.fetch(config);
    const Collectors = [
        new ScreenWidth_1.ScreenWidth(),
        new ScreenHeight_1.ScreenHeight(),
        new Language_1.Language(),
        new UserAgent_1.UserAgent(),
        new DeviceMotion_1.DeviceMotion(),
        new DeviceOrientation_1.DeviceOrientation(),
        new CookieEnabled_1.CookieEnabled(),
        new JavaScriptEnabled_1.JavaScriptEnabled(),
        new OnLine_1.OnLine(),
        new Referrer_1.Referrer(),
        new TimeZone_1.TimeZone(),
        new LocalStorageAvailable_1.LocalStorageAvailable(),
        new NetWorkInformation_1.NetWorkInformation(),
        new Clipboard_1.Clipboard(),
        new MouseMove_1.MouseMove(),
        new KeyPress_1.KeyPress(),
        new mouseClick_1.MouseClick(60),
    ];
    Collectors.forEach((collector) => {
        collector.startCollect();
    });
    setInterval(() => {
        const data = {};
        Collectors.forEach(colloctor => {
            const key = colloctor.getKey();
            const collectorData = colloctor.getData();
            data[key] = collectorData;
        });
        console.log(data);
        classes_2.EventsManager.updateData(data);
    }, classes_2.EventsManager.getConfig().COLLECTORS_INTERVAL);
}
document.dispatchEvent(customEvents_1.acmeSdkLoaded);
main();
