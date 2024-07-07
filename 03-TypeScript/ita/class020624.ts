// write the function getLongestKey, that recieves an object and needs to return it's longest 1st level key, and retruns the longest key
// your goals is to it in the most accurate way in TS (generic, and exactly what you expect to return - not just "string")
function getLongestKey<T>(obj: T): keyof T {
    let keys = Object.keys(obj as object); // מערך של כל הkeys
    let maxLength = Math.max(...keys.map((str) => str.length)); // ממפה את האיברים במערך לאורכים ומוצא את המקסימום
    return keys.find((str) => str.length === maxLength) as keyof T; //מוצא את האיבר הראשון שאורכו שווה למספר הכי ארוך
}



// hint - from the previous function:

