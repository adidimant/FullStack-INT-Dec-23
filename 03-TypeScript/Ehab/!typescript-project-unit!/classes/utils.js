export class Utils {
  static maintainLastXItems(array, bufferSize, newItem) {
    if (array.length < bufferSize) {
      array.push(newItem);
    } else {
      array.shift()
      array.push(newItem);
    }
  }
}
  