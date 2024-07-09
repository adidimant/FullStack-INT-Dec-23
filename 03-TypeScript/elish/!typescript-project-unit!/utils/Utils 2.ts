export class Utils {
    static maintainLastXItems<T>(array: T[], bufferSize: number, newItem: T){
        if(array.length >= bufferSize){
            array.shift(); // הסרת הפריט הראשון מהמערך 
            array.push(newItem);
        }
        else
            array.push(newItem);
    };
};