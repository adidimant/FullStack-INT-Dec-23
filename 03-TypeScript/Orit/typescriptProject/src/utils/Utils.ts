export class Utils<T> {
    

    constructor() {
    }

    static maintainLastXItems<T>(arr: Array<T | null>, bufferSize: number, newItem: T | null): Array<T | null> {
        arr.push(newItem);
        if (arr.length > bufferSize) {
            arr.shift(); // Remove the oldest item
        };
        return arr;
    }

    static generateUUID(): string {
        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
            (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
        );
    }
}