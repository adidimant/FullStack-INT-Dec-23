export default class Utils {
  static maintainLastXItems<T>(arr: T[], bufferSize: number, item: T): void {
    if (arr.length >= bufferSize) {
      arr.shift();
    }
    arr.push(item);
  }
}
