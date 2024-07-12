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
exports.EventsManager = exports.Utils = void 0;
class Utils {
    static maintainLastXItems(arr, bufferSize, newItem) {
        if (arr.length >= bufferSize) {
            arr.shift();
            arr.push(newItem);
        }
        else {
            arr.push(newItem);
        }
    }
    static fetch(config) {
        if (!localStorage.getItem("fakeConfig")) {
            localStorage.setItem("fakeConfig", JSON.stringify(config));
        }
        setInterval(() => {
            try {
                const fakeConfig = EventsManager.getConfig("https://acme-server.com/conf"); // faking GET request to a server
                localStorage.setItem("fakeConfig", JSON.stringify(config));
                console.log(`new FakeConfig fetched at ${new Date()}`);
            }
            catch (error) {
                console.error(error);
            }
        }, config.COLLECTORS_INTERVAL);
    }
}
exports.Utils = Utils;
class EventsManager {
    static getConfig(url) {
        var _a;
        const config = JSON.parse((_a = localStorage.getItem("fakeConfig")) !== null && _a !== void 0 ? _a : "");
        return config;
    }
    /*
    faking getting config from server:
    public static fakeGetConfig(url: string): Config {
        setInterval(async() => {
            const data = await fetch(url);
            const jsonData = await data.json();
            return jsonData;
        }, config.COLLECTORS_INTERVAL);
    }
    */
    static updateData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                if (!localStorage.getItem("dataToLocalStorage")) { // saving the data on localStorage
                    localStorage.setItem("dataToLocalStorage", JSON.stringify([data]));
                    console.log(`localStorage initialized`);
                }
                else {
                    const dataFromLocalStorage = JSON.parse((_a = localStorage.getItem("dataToLocalStorage")) !== null && _a !== void 0 ? _a : "");
                    dataFromLocalStorage.push(data);
                    localStorage.setItem("dataToLocalStorage", JSON.stringify(dataFromLocalStorage));
                    console.log(`data added to local storage! `);
                }
                const response = yield fetch("https://acme-server.com/conf", {
                    method: "POST",
                    body: JSON.stringify(data),
                });
                console.log(`status of the request: ${response}`);
            }
            catch (error) {
                console.error(`Cannot post data to the server, exit with error: ${error}`);
            }
        });
    }
}
exports.EventsManager = EventsManager;
