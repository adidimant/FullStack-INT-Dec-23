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
// creat class utils
class Utils {
    static maintainLastXItems(array, bufferSize, newItem) {
        if (array.length >= bufferSize) {
            array.shift();
        }
        array.push(newItem);
    }
}
//create data collectors
class ScreenWidthCollector {
    constructor(interval) {
        this.data = null;
        this.collectInterval = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    startCollect() {
        this.data = screen.width;
        this.collectInterval = globalThis.setInterval(() => {
            this.data = screen.width;
        }, this.interval);
    }
    finishCollect() {
        if (this.collectInterval !== null) {
            globalThis.clearInterval(this.collectInterval);
            this.data = null;
        }
    }
}
class MouseMoveCollector {
    constructor(interval, bufferSize = 10) {
        this.data = [];
        this.collectInterval = null;
        this.interval = interval;
        this.bufferSize = bufferSize;
    }
    getData() {
        return this.data;
    }
    startCollect() {
        document.addEventListener('mousemove', this.collectData.bind(this));
        this.collectInterval = globalThis.setInterval(() => {
            // Process data if needed
        }, this.interval);
    }
    finishCollect() {
        if (this.collectInterval !== null) {
            globalThis.clearInterval(this.collectInterval);
            this.data = [];
        }
        document.removeEventListener('mousemove', this.collectData.bind(this));
    }
    collectData(event) {
        Utils.maintainLastXItems(this.data, this.bufferSize, event);
    }
}
function getConfig() {
    // Example URL: "https://acme-server.com/conf?customerId=12345"
    // In practice, this would fetch from the server. Here we return a constant.
    return {
        COLLECTORS_INTERVAL: 60000,
        DEFAULT_BUFFER_CONTINOUS_COLLECTORS: 10,
        SDK_ENABLED: true
    };
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const config = getConfig();
        if (!config.SDK_ENABLED)
            return;
        const collectors = [
            new ScreenWidthCollector(config.COLLECTORS_INTERVAL),
            new MouseMoveCollector(config.COLLECTORS_INTERVAL, config.DEFAULT_BUFFER_CONTINOUS_COLLECTORS)
        ];
        collectors.forEach(collector => collector.startCollect());
        globalThis.setInterval(() => {
            collectors.forEach(collector => {
                const data = collector.getData();
                if (data !== null) {
                    console.log(data); // Replace with actual server update
                }
            });
        }, config.COLLECTORS_INTERVAL);
        // Fetch configuration every 1 minute
        globalThis.setInterval(() => __awaiter(this, void 0, void 0, function* () {
            const newConfig = getConfig();
            localStorage.setItem('acme-cyber-config', JSON.stringify(newConfig));
        }), 60000);
    });
}
document.addEventListener('acme-sdk-loaded', main);
// Dispatch the custom event to start the SDK
globalThis.addEventListener('load', () => {
    const event = new Event('acme-sdk-loaded');
    document.dispatchEvent(event);
});
