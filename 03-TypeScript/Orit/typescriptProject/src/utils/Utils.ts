export class Utils<T> {

    constructor() {
    }

    static maintainLastXItems<T>(arr: T[], bufferSize: number, newItem: T): T[] {
        if (arr.length >= bufferSize) {
            arr.shift(); //Remove the first item
        }
        arr.push(newItem); 
        return arr;
    }
}