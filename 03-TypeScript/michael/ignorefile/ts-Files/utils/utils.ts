export class Utils {
    static maintainLastXItems<T>(array: T[], bufferSize: number, newItem: T): T[] {
      if (array.length >= bufferSize) {
        array.shift();
      }
      array.push(newItem);
      return array;
    }
  }
  