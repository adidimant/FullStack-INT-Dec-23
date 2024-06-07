// write the function getLongestKey, that recieves an object and needs to return it's longest 1st level key, and retruns the longest key
// your goals is to it in the most accurate way in TS (generic, and exactly what you expect to return - not just "string")

function getLongestKey1<T>(obj: T): keyof T | null {
  if (!obj || typeof obj != 'object' || Object.keys(obj).length == 0) {
    return null;
  }
  let longestKey: string = '';
  const keys = Object.keys(obj);
  keys.forEach((key: string) => {
    if (key.length > longestKey.length) {
      longestKey = key;
    }
  });
  return longestKey as keyof T;
}