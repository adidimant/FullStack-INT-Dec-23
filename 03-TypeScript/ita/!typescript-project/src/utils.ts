export class Utils {
    static maintainLastXItems<T>(arr: T[], bufferSize: number, item: T): void { //האם בהפעולות נעשות על אותו מערך או מחזירות העתק ועליו הפעולות
        if (arr.length >= bufferSize) {
            arr.shift();
        }  
        arr.push(item); 
        
    }
}