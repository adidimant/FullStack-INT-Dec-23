interface FuncStats {
	convertToBool: number;
	cleanText: number;
	executeSafe: number;
	deepClone: number;
	debounce: number;
	throttle: number;
	mergeObjects: number;
	sleep: number;
	arrayToObject: number;
	generateUUID: number;
	getRandomInt: number;
	isPalindrome: number;
	getCurrentDate: number;
	capitalizeFirstLetter: number;
	dateDiffInDays: number;
  getStatistics: number;
}


class Utils {
  private static funcStats: FuncStats ={
    convertToBool :0,
    cleanText :0,
    executeSafe :0,
    deepClone :0,
    debounce :0,
    throttle :0,
    mergeObjects :0,
    sleep :0,
    arrayToObject :0,
    generateUUID :0,
    getRandomInt :0,
    isPalindrome :0,
    getCurrentDate :0,
    capitalizeFirstLetter :0,
    dateDiffInDays :0,
    getStatistics: 0
  };

  // converts '1', 1, 'true', true, or any existing object/array/string/number to true; '0', 0, false, 'f', 'F', 'false' and others to false
	public static convertToBool<T>(someData: T): boolean {
		//falses
    Utils.funcStats.convertToBool++
		if (typeof someData == "string") {
			if ((someData as string).toLowerCase() === "f" || (someData as string).toLowerCase() === "false" || (someData as string) === "0") {
				return false;
			}
			if ((someData as string).toLowerCase().includes("false")) return false;
		}
		if (someData === 0 || someData === false) return false;

		//trues
		if (typeof someData === "object") {
			if (Object.keys(someData as object).length !== 0) return true;
		}
		if (Array.isArray(someData)) {
			if (someData.length !== 0) return true;
		}
		// debugger;
		if (typeof someData === "string" || typeof someData === "number") return true;
		return false;
	}
	// prepares string for the newspaper: clean text from extra spaces, extra line breaks, extra redundant word boundaries (like: ',,', ';;', ',;')
	public static cleanText(str: string): string {
    Utils.funcStats.cleanText++
		let letters = str.split("");
		console.log(`letters before: ${letters}`);
		// debugger;
		letters.forEach((letter, index) => {
			if (letter === " " || letter === ";" || letter === ":" || letter === ",") {
				if (letters[index + 1] === letter) {
					letters.splice(index, 1);
				}
			}
		});
		console.log(`letters after: ${letters}`);
		return letters.join("").trim();
	}
  // returns an object that in the keys we have the name of the funcs, the values are the number of calls to that function.
  // looks like: { cleanText: 6, convertToBool: 4 }
  // make sure to initialize this statistics object in a static { } block, and that this object is not exposed outside as public

  public static getStatistics():FuncStats {
    Utils.funcStats.getStatistics++
    return Utils.funcStats
  }


	// // execute the received function on a safe way, it means that if we have an error in the function - it won't break the application - but still will do console.error with the detailed error
	public static executeSafe(func: () => any): void {
    Utils.funcStats.executeSafe++
		try {
			func();
		} catch (error) {
			console.error(error);
		}
	}
	// receives an objected and returns an exact copy (other) object
	public static deepClone<T>(obj: T): T | null {
    Utils.funcStats.deepClone++
		if (typeof obj === "object") {
			const clone = Object.assign({}, obj as object);
			return clone as T;
		}
		return null;
	}
	// // execute the received function with a little latency - according to the wait parameter
	public static debounce<T>(func: () => any, wait: number): void {
    Utils.funcStats.debounce++
		setTimeout(func, wait);
	}
	// // returns a throtteled function, that calling to that function is actually calling to 'func' function, but with the limitations of the amount & time
	// // limit the number of the number of the calls to the function
	// // hint - you can put things on the function object!
	public static throttle(func: () => any, limitCalls: number, limitTimeMs: number): void {
    Utils.funcStats.throttle++
		setInterval(() => {
			let count = 0;
		}, limitTimeMs);
	}
	// // merges obj1 & obj2
	public static mergeObjects<T, K>(obj1: T, obj2: K): (T & K) | null {
    Utils.funcStats.mergeObjects++
		if (typeof obj1 === "object" && typeof obj2 === "object") {
			const clone = Object.assign({}, obj1 as object, obj2 as object);
			return clone as T & K;
		}
		return null;
	}
	public static async sleep(ms: number):Promise<void> {
     const promise = await new Promise((res) => setTimeout(() => res(""),ms))
     return promise as Promise<void>
	}
	// // the key of the object should be the index in the array, the value - should be the value in the array
	// public static arrayToObject<T>(arr: T): object{

	// }
	// // create a new UUID, you can use the internet
	// // read about: the UUID usages, how difficult is to get a collision on the same UUID
	// public static generateUUID(): string{

	// }
	// public static getRandomInt(min:number, max: number): number{

	// }
	// public static isPalindrome(str:string): boolean{

	// }
	// public static getCurrentDate(): string{
	//   return `${year}-${month}-${day}`
	// }
	// // make first letter big
	// public static capitalizeFirstLetter(str:string): void{

	// }
	// // returns the difference between dates in days
	// public static dateDiffInDays(date1:Date, date2:Date): number{

	// }
	static {

  }
}

//checks
const str = "no wys  like this;; why  ,,";
const objToClone1 = { a: "123", b: 34 };
const objToClone2 = { c: "ofer", d: true };
const clonedObj = Utils.deepClone(objToClone1);
if (clonedObj) {
	clonedObj.a = "asd";
}
console.log(objToClone1);
console.log(clonedObj);
console.log(
	Utils.debounce(() => {
		console.log(`first`);
	}, 3000)
);

Utils.throttle(
	() => {
		console.log(`first`);
	},
	5,
	10000
);

const mergedObjs = Utils.mergeObjects(objToClone1,objToClone2);
console.log(mergedObjs)
console.log(Utils.getStatistics())
console.log(Utils.sleep(5000))
console.log(Utils.getStatistics())
