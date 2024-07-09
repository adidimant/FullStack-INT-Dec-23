"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const eventsManager_1 = require("./classes/eventsManager");
const screenWidth_1 = require("./classes/regular_collectors/screenWidth");
const screenHeight_1 = require("./classes/regular_collectors/screenHeight");
const language_1 = require("./classes/regular_collectors/language");
const userAgent_1 = require("./classes/regular_collectors/userAgent");
const timezone_1 = require("./classes/regular_collectors/timezone");
const CookiesEnabled_1 = require("./classes/regular_collectors/CookiesEnabled");
const javaScriptEnabled_1 = require("./classes/regular_collectors/javaScriptEnabled");
const onlineStatus_1 = require("./classes/regular_collectors/onlineStatus");
const referrer_1 = require("./classes/regular_collectors/referrer");
const localStorage_1 = require("./classes/regular_collectors/localStorage");
const networkInformation_1 = require("./classes/regular_collectors/networkInformation");
const clipboard_1 = require("./classes/regular_collectors/clipboard");
const browserInfo_1 = require("./classes/regular_collectors/browserInfo");
const platform_1 = require("./classes/regular_collectors/platform");
const deviceMemory_1 = require("./classes/regular_collectors/deviceMemory");
const hardwareConcurrency_1 = require("./classes/regular_collectors/hardwareConcurrency");
const plugins_1 = require("./classes/regular_collectors/plugins");
const doNotTrack_1 = require("./classes/regular_collectors/doNotTrack");
const battery_1 = require("./classes/regular_collectors/battery");
const currentUrl_1 = require("./classes/regular_collectors/currentUrl");
const historyLength_1 = require("./classes/regular_collectors/historyLength");
const colorDepth_1 = require("./classes/regular_collectors/colorDepth");
const touchSupport_1 = require("./classes/regular_collectors/touchSupport");
const mouseMove_1 = require("./classes/continous_collectors/mouseMove");
const keyboardPressing_1 = require("./classes/continous_collectors/keyboardPressing");
const clicksPressing_1 = require("./classes/continous_collectors/clicksPressing");
const deviceMotion_1 = require("./classes/continous_collectors/deviceMotion");
const deviceOrientation_1 = require("./classes/continous_collectors/deviceOrientation");
const chBox = document.getElementById('chxCollectData');
const h3Text = document.getElementById('h3Text');
//export const DEFAULT_INTERVAL: number = 6000;
//export let SDK_ENABLED: boolean = true;
//export const DEFAULT_BUFFER_CONTINOUS_COLLECTORS: number = 10
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let config = null;
        let collectors;
        try {
            const currentConfig = window.localStorage.getItem("configuration");
            let currentConfigData;
            if (currentConfig) {
                currentConfigData = JSON.parse(currentConfig);
                if (currentConfigData['SDK_ENABLED']) {
                    eventsManager_1.EventsManager.IsEnabled = true;
                    chBox.checked = true;
                    h3Text.innerText = 'Collect data enabled';
                }
                else {
                    eventsManager_1.EventsManager.IsEnabled = false;
                    chBox.checked = false;
                    h3Text.innerText = 'Collect data disabled';
                }
            }
        }
        catch (error) {
            console.error(error);
        }
        const fetchConf = () => __awaiter(this, void 0, void 0, function* () {
            try {
                config = yield eventsManager_1.EventsManager.getConfig('customerId');
                if (config) {
                    localStorage.setItem('configuration', JSON.stringify(config));
                }
                else {
                    console.error('Failed to fetch configuration');
                }
            }
            catch (error) {
                console.error(error);
            }
        });
        chBox.addEventListener('change', () => __awaiter(this, void 0, void 0, function* () {
            if (chBox.checked) {
                eventsManager_1.EventsManager.IsEnabled = true;
                fetchConf();
                yield new Promise(resolve => setTimeout(resolve, 100));
                collectors.forEach((collector => collector.startCollect()));
                h3Text.innerText = 'Collect data enabled';
            }
            else {
                eventsManager_1.EventsManager.IsEnabled = false;
                fetchConf();
                yield new Promise(resolve => setTimeout(resolve, 100));
                collectors.forEach((collector => collector.finishCollect()));
                h3Text.innerText = 'Collect data disabled';
            }
        }));
        fetchConf();
        setInterval(() => __awaiter(this, void 0, void 0, function* () {
            fetchConf();
        }), 60000);
        collectors = [
            new screenWidth_1.screenWidth(),
            new screenHeight_1.screenHeight(),
            new language_1.language(),
            new userAgent_1.userAgent(),
            new timezone_1.timeZone(),
            new CookiesEnabled_1.cookiesEnabled(),
            new javaScriptEnabled_1.javaScriptEnabled(),
            new onlineStatus_1.onlineStatus(),
            new referrer_1.referrer(),
            new localStorage_1.localStorageEnable(),
            new networkInformation_1.networkInformation(),
            new clipboard_1.clipboard(),
            new browserInfo_1.browserInfo(),
            new platform_1.platform(),
            new deviceMemory_1.deviceMemory(),
            new hardwareConcurrency_1.hardwareConcurrency(),
            new plugins_1.plugins(),
            new doNotTrack_1.doNotTrack(),
            new battery_1.battery(),
            new currentUrl_1.currentUrl(),
            new historyLength_1.historyLength(),
            new colorDepth_1.colorDepth(),
            new touchSupport_1.touchSupport(),
            new mouseMove_1.mouseMove(50),
            new keyboardPressing_1.keyboardPressing(50),
            new clicksPressing_1.clicksPressing(10),
            new deviceMotion_1.deviceMotion(40),
            new deviceOrientation_1.deviceOrientation(40),
        ];
        document.addEventListener('acme-sdk-loaded', () => __awaiter(this, void 0, void 0, function* () {
            console.log('load complete');
            collectors.forEach((collector) => collector.startCollect());
            const intervalId = setInterval(() => {
                const data = {};
                collectors.forEach((collector) => {
                    data[collector.getKey()] = collector.getData;
                });
                // screenWidth
                document.getElementById('screenWidth').innerHTML = 'Screen width: <span style="color: red">' + data[collectors[0].getKey()] + 'px</span>';
                // screenHeight
                document.getElementById('screenHeight').innerHTML = 'Screen height: <span style="color: red">' + data[collectors[1].getKey()] + 'px</span>';
                // language
                document.getElementById('language').innerHTML = 'Language: <span style="color: red">' + data[collectors[2].getKey()] + '</span>';
                // userAgent
                document.getElementById('userAgent').innerHTML = 'User agent: <span style="color: red">' + data[collectors[3].getKey()] + '</span>';
                // timeZone
                document.getElementById('timeZone').innerHTML = 'TimeZone: <span style="color: red">' + data[collectors[4].getKey()] + '</span>';
                // cookiesEnabled
                document.getElementById('cookiesEnabled').innerHTML = 'Cookies enabled: <span style="color: red">' + data[collectors[5].getKey()] + '</span>';
                // javaScriptEnabled
                document.getElementById('javaScriptEnabled').innerHTML = 'Javascript Enabled: <span style="color: red">' + data[collectors[6].getKey()] + '</span>';
                // onlineStatus
                document.getElementById('onlineStatus').innerHTML = 'Online status: <span style="color: red">' + data[collectors[7].getKey()] + '</span>';
                // referrer
                document.getElementById('referrer').innerHTML = 'Referrer: <span style="color: red">' + data[collectors[8].getKey()] + '</span>';
                // localStorage
                document.getElementById('localStorage').innerHTML = 'LocalStorage: <span style="color: red">' + data[collectors[9].getKey()] + '</span>';
                // networkInformation
                document.getElementById('networkInformation').innerHTML = 'Network information: <span style="color: red">' + data[collectors[10].getKey()] + '</span>';
                // clipboard
                try {
                    document.getElementById('clipboard').innerHTML = 'Clipboard: <span style="color: red">' + data[collectors[101].getKey()] + '</span>';
                }
                catch (error) {
                    console.error('Document is not focused');
                }
                //browserInfo
                document.getElementById('browserInfo').innerHTML = 'BrowserInfo: <span style="color: red">' + data[collectors[12].getKey()] + '</span>';
                // platform
                document.getElementById('platform').innerHTML = 'Platform: <span style="color: red">' + data[collectors[13].getKey()] + '</span>';
                // deviceMemory
                document.getElementById('deviceMemory').innerHTML = 'Device memory: <span style="color: red">' + data[collectors[14].getKey()] + '</span>';
                // hardwareConcurrency
                document.getElementById('hardwareConcurrency').innerHTML = 'Hardware concurrency: <span style="color: red">' + data[collectors[15].getKey()] + '</span>';
                // plugins
                document.getElementById('plugins').innerHTML = 'Plugins: <span style="color: red">' + data[collectors[16].getKey()] + '</span>';
                // doNotTrack
                document.getElementById('doNotTrack').innerHTML = 'Do not track: <span style="color: red">' + data[collectors[17].getKey()] + '</span>';
                // battery
                document.getElementById('battery').innerHTML = 'Battery: <span style="color: red">' + data[collectors[18].getKey()] + '</span>';
                // currentUrl
                document.getElementById('currentUrl').innerHTML = 'Current Url: <span style="color: red">' + data[collectors[19].getKey()] + '</span>';
                // historyLength
                document.getElementById('historyLength').innerHTML = 'History length: <span style="color: red">' + data[collectors[20].getKey()] + '</span>';
                // colorDepth
                document.getElementById('colorDepth').innerHTML = 'Color depth: <span style="color: red">' + data[collectors[21].getKey()] + '</span>';
                // touchSupport
                document.getElementById('touchSupport').innerHTML = 'Touch support: <span style="color: red">' + data[collectors[22].getKey()] + '</span>';
                // mouseMove
                let MouseMovements = '';
                const mouseMoveData = collectors[23].getData();
                if (Array.isArray(mouseMoveData) && mouseMoveData !== null) {
                    mouseMoveData.forEach((obj) => MouseMovements += '<br>' + JSON.stringify(obj) + ',');
                    document.getElementById('mouseMove').innerHTML = 'Mouse move: <span style="color: red">' + MouseMovements + '</span>';
                }
                // keyboardPressing
                let keyboardPressing = '';
                const keyboardPressingData = collectors[24].getData();
                if (Array.isArray(keyboardPressingData) && keyboardPressingData !== null) {
                    keyboardPressingData.forEach((obj) => {
                        console.log(typeof obj);
                        keyboardPressing += '<br>' + JSON.stringify(obj) + ',';
                    });
                    document.getElementById('keyboardPressing').innerHTML = 'Keyboard pressing: <span style="color: red">' + keyboardPressing + '</span>';
                }
                // clicksPressing
                let clicksPressing = '';
                const clicksPressingData = collectors[25].getData();
                if (Array.isArray(clicksPressingData) && clicksPressingData !== null) {
                    clicksPressingData.forEach((obj) => clicksPressing += '<br>' + JSON.stringify(obj) + ',');
                    document.getElementById('clicksPressing').innerHTML = 'Clicks pressing: <span style="color: red">' + clicksPressing + '</span>';
                }
                // deviceMotion
                let deviceMotion = '';
                const deviceMotionData = collectors[26].getData();
                if (Array.isArray(deviceMotionData) && deviceMotionData !== null) {
                    deviceMotionData.forEach((obj) => deviceMotion += '<br>' + JSON.stringify(obj) + ',');
                    document.getElementById('deviceMotion').innerHTML = 'Device motion: <span style="color: red">' + deviceMotion + '</span>';
                }
                // deviceOrientation
                let deviceOrientation = '';
                const deviceOrientationData = collectors[27].getData();
                if (Array.isArray(deviceOrientationData) && deviceOrientationData !== null) {
                    deviceOrientationData.forEach((obj) => {
                        deviceOrientation += '<br>' + JSON.stringify(obj) + ',';
                    });
                    document.getElementById('deviceOrientation').innerHTML = 'Device orientation: <span style="color: red">' + deviceOrientation + '</span>';
                }
            }, 1000);
        }));
        const event = new CustomEvent('acme-sdk-loaded');
        document.dispatchEvent(event);
    });
}
main();
