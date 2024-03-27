console.log("test");
var arr = [
    1, 2, 3, 4, 5, 34, 24, 1, 2, 32, 44, 12, 34, 33, 45, 657, 241,
];
var arr2 = ["check", { key: "value" }, 123, false, undefined];
function filterOdd(arr) {
    return arr.filter(function (item) { return item % 2 != 0; });
}
function checkIfObjExist(arr) {
    return arr.some(function (item) { return typeof item == "object"; });
}
console.log(filterOdd(arr));
console.log("check if arr2 has obj: " + checkIfObjExist(arr2));
