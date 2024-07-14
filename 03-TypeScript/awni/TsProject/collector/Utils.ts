
export class Utils {
    /**
     * maintainLastXItems
     * @param {Array<T>} arr
     * @param {number} bufferSize
     * @param {T} newItem
     * @returns {Array<T>}
     */
    public static maintainLastXItems<T>(arr: Array<T>, bufferSize: number, newItem: T): Array<T> {
      if (arr.length < bufferSize) {
        arr.push(newItem);
      } else {
        arr.shift();
        arr.push(newItem);
      }
      return arr;
    }
  }