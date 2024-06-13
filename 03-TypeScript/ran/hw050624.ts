class Utils {
  private static statistics: { [key: string]: number } = {};

  static {
    const funcs = [
      'convertToBool', 'cleanText', 'getStatistics', 'executeSafe', 'deepClone',
      'debounce', 'throttle', 'mergeObjects', 'sleep', 'arrayToObject',
      'generateUUID', 'getRandomInt', 'isPalindrome', 'getCurrentDate',
      'capitalizeFirstLetter', 'dateDiffInDays', 'isInViewport', 'flattenArray'
    ];
    funcs.forEach(func => Utils.statistics[func] = 0);
  }

  static convertToBool(value: any): boolean {
    Utils.statistics.convertToBool++;
    return !(value === '0' || value === 0 || value === false || value === 'false' || value === 'f');
  }

  static cleanText(paragraph: string): string {
    Utils.statistics.cleanText++;
    return paragraph.replace(/\s+/g, ' ').replace(/,,|;;|,;/g, '');
  }

  static getStatistics() {
    Utils.statistics.getStatistics++;
    return { ...Utils.statistics };
  }

  static executeSafe(func: Function) {
    Utils.statistics.executeSafe++;
    try {
      return func();
    } catch (error) {
      console.error('Error:', error);
    }
  }

  static deepClone(obj: any): any {
    Utils.statistics.deepClone++;
    return JSON.parse(JSON.stringify(obj));
  }

  static debounce(func: Function, wait: number) {
    Utils.statistics.debounce++;
    let timeout: any;
    return function(...args: any) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  static throttle(func: Function, limitCalls: number, limitTime: number) {
    Utils.statistics.throttle++;
    let lastCall = 0, callCount = 0;
    return function(...args: any) {
      const now = Date.now();
      if (now - lastCall >= limitTime || callCount < limitCalls) {
        lastCall = now;
        callCount++;
        return func.apply(this, args);
      }
    };
  }

  static mergeObjects(obj1: any, obj2: any): any {
    Utils.statistics.mergeObjects++;
    return { ...obj1, ...obj2 };
  }

  static sleep(ms: number) {
    Utils.statistics.sleep++;
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  static arrayToObject(arr: any[]): { [key: number]: any } {
    Utils.statistics.arrayToObject++;
    return arr.reduce((acc, val, idx) => (acc[idx] = val, acc), {});
  }

  static generateUUID(): string {
    Utils.statistics.generateUUID++;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  static getRandomInt(min: number, max: number): number {
    Utils.statistics.getRandomInt++;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static isPalindrome(str: string): boolean {
    Utils.statistics.isPalindrome++;
    const cleaned = str.replace(/[\W_]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
  }

  static getCurrentDate(): string {
    Utils.statistics.getCurrentDate++;
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  static capitalizeFirstLetter(string: string): string {
    Utils.statistics.capitalizeFirstLetter++;
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static dateDiffInDays(date1: Date, date2: Date): number {
    Utils.statistics.dateDiffInDays++;
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  static isInViewport(element: HTMLElement): boolean {
    Utils.statistics.isInViewport++;
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 &&
           rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
           rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }

  static flattenArray(arr: any[]): any[] {
    Utils.statistics.flattenArray++;
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(Utils.flattenArray(val)) : acc.concat(val), []);
  }
}