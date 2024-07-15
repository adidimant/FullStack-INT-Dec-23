"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
class Utils {
    static maintainLastXItems(array, bufferSize, newItem) {
        if (typeof newItem === 'object' && 'isTrusted' && 'key' && 'KeyT' && 'location' && 'ctrlKey') {
            console.log('keyupEvent');
        }
        if (array.length < bufferSize) {
            array.push(JSON.parse(JSON.stringify(newItem)));
        }
        else {
            array.shift();
            array.push(newItem);
        }
    }
}
exports.Utils = Utils;
