export class Utils {
    constructor() {
    }
    static maintainLastXItems(arr, bufferSize, newItem) {
        if (arr.length >= bufferSize) {
            arr.shift(); //Remove the first item
        }
        arr.push(newItem);
        return arr;
    }
}
