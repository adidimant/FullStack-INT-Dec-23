export default class Utils {
    static maintainLastXItems(arr, bufferSize, item) {
        if (arr.length >= bufferSize) {
            arr.shift();
        }
        arr.push(item);
    }
}
