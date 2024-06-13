//check-if-a-number-is-palindrome
function checkPalindrome(num: number) {
  if (num <= 9) {
    return true;
  }
  let strNum = String(num).split("");
  const firstDig = Number(strNum.shift());
  const lastDig = Number(strNum.pop());
  const numWithoutFirstAndLastDigits = Number(strNum.join(""));

  if (firstDig == lastDig) {
    return checkPalindrome(numWithoutFirstAndLastDigits);
  }
  return false;
}
console.log(checkPalindrome(1002));



//program-find-minimum-maximum-element-array
function findMinMaxNumsInArr(arr: number[], min: number = Infinity, max: number = -Infinity) {
	if (arr.length <= 1) {
		arr[0] > max ? (max = arr[0]) : "";
		arr[0] < min ? (min = arr[0]) : "";
		return { max: max, min: min };
	}
	arr[0] > max ? (max = arr[0]) : "";
	arr[0] < min ? (min = arr[0]) : "";
	const [removed, ...newArr] = arr;
	return findMinMaxNumsInArr(newArr, min, max);
}
const arr = [10, 20, 11, 1111, 102412, 23];
console.log(findMinMaxNumsInArr(arr));
