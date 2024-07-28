export default class Utils {
  static maintainLastXItems<T>(arr: T[], bufferSize: number, item: T) {
    if (arr.length < bufferSize) {
      arr.push(item);
    } else {
      arr.shift();
      arr.push(item);
    }
  }
}
