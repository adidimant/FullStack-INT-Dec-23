export class Utils {
  static maintainLastXItems<T>(array: T[], bufferSize: number, newItem: T): T[] {
    if (array.length >= bufferSize) {
      array.shift();
    }
    array.push(newItem);
    return array;
  }

  static isSDKEnabled(): boolean {
    // This could be expanded to check local storage or other conditions
    return true;
  }
}