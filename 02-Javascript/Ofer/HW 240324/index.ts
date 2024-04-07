console.log("test");

const arr: number[] = [
    1, 2, 3, 4, 5, 34, 24, 1, 2, 32, 44, 12, 34, 33, 45, 657, 241,
];

const arr2 = ["check", {key: "value"}, 123, false, undefined];
function filterOdd(arr: number[]) {
    return arr.filter((item) => item % 2 != 0);
}
function checkIfObjExist(arr:any) {
    return arr.some((item: any) => typeof item == "object");
}

console.log(filterOdd(arr));
console.log(`check if arr2 has obj: ${checkIfObjExist(arr2)}`)
