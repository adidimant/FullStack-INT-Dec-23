class Utils{
    // converts '1', 1, 'true', true, or any existing object/array/string/number to true; '0', 0, false, 'f', 'F', 'false' and others to false
    
    
    
    
    static convertToBool(value: any): boolean {        
        if(value === null || value === undefined){
            return false;
        }
        if (typeof value === 'boolean'){
            return value;
        }
        if(typeof value === 'number'){
            if(value === 1){
                return true;
            }
            return false;
        }
        if (typeof value === 'string'){
            const lowerValue = value.trim().toLowerCase();
            if(lowerValue  === '1' || lowerValue === 'true'){
                return true;
            }
            return false;
        }
        if (typeof value === 'object') {
            return Object.keys(value).length > 0;
        }
        if(Array.isArray(value) === true){
            return true;
        }
        return false;
    }

// prepares string for the newspaper: clean text from extra spaces, extra line breaks, extra redundant word boundaries (like: ',,', ';;', ',;')
    static cleanText(paragraph: string): string {
        let newParagraph = '';
        // remove extra space
        newParagraph = paragraph.replace(/\s+/g, ' ');
        
        // remove extra line breaks
        newParagraph = paragraph.replace(/(\r\n|\n|\r)+/g, ' ');
        
        // remove extra redundant word boundaries
        newParagraph = paragraph.replace(/(,|;|\.|:|\?|!)+/g, '$1')
        // The regex (,|;|\.|:|\?|!)+ matches one or more of the specified punctuation marks 
        //and replaces them with a single instance of that mark.
        
        newParagraph = paragraph.trim();

        return newParagraph;
    }

    // returns an object that in the keys we have the name of the funcs, the values are the number of calls to that function.
    // looks like: { cleanText: 6, convertToBool: 4 }
    // make sure to initialize this statistics object in a static { } block, and that this object is not exposed outside as public
    static getStatistics() {
        //02:24:30
    }

    // execute the received function on a safe way, it means that if we have an error in the function - it won't break the application - but still will do console.error with the detailed error
    static executeSafe(func: () => any): void {
        try{
            func();
        } catch(error){
            console.error("An error occurred:", error);
        }
    }

    // receives and objected and returns an exact copy (other) object
    static deepClone(obj: object): object{
        return JSON.parse(JSON.stringify(obj));
        //OR return {...obj};
    }

    // execute the received function with a little latency - according to the wait parameter
    static debounce(func: () => any, wait: number): void {
        setTimeout(func, wait);
    }
    // returns a throtteled function, that calling to that function is actually calling to 'func' function, but with the limitations of the amount & time
    // limit the number of the number of the calls to the function
    // hint - you can put things on the function object!
    /*static throttle<T>(func: T, limitCalls: number, limitTime: number): T {
       
    }*/

    // merges obj1 & obj2
    static mergeObjects<T>(obj1: T, obj2: T): T {
        return{...obj1, ...obj2};
    }

    // just stop the code and sleep according to ms parameter
    static async sleep(ms: number): Promise<void> {
        return new Promise((res) => {
            setTimeout(res,ms);
        }) 
    }  

    // the key of the object should be the index in the array, the value - should be the value in the array
    static arrayToObject<T>(arr: T[]): {[key: number]: T} {
        return arr.reduce((obj,value,index)=>{
            obj[index] = value;
            return obj;
        },{})
    }


    // create a new UUID, you can use the internet
    // read about: the UUID usages, how difficult is to get a collision on the same UUID
    // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
    static generateUUID() { 
        // Get the current time in milliseconds since the Unix epoch.
        let dt = new Date().getTime();
        // Replace the placeholders in the UUID template with random hexadecimal characters.
        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            // Generate a random hexadecimal digit.
            let r = (dt + Math.random()*16)%16 | 0;
            // Update dt to simulate passage of time for the next random character.
            dt = Math.floor(dt/16);
            // Replace 'x' with a random digit and 'y' with a specific digit (4 for UUID version 4).
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        // Return the generated UUID.
        return uuid;
    }

    // returns a random integer between min & max
    static getRandomInt(min: number, max: number): number {
        if(min < max){
            return Math.floor(Math.random() * (max - min) + min);
        }else {
            return Math.floor(Math.random() * (-1 * (max - min) + min));
        }
    }
}