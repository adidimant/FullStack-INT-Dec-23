function isPalindrome(num: number): boolean{
    if(num < 0){
        num = num * (-1);
    }
    if(num %10 == num){
        return true
    }
    else if (String(num)[0] == String(num)[String(num).length -1]){
        return isPalindrome(num / 10);
    }
    else{
        return false;
    }
}
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(12325)); // false


function findMaxOrMin(arr: number[], index: number , findMax: boolean): number{
    if(index === arr.length-1){
        return arr[index];
    }
    else {
        if(findMax){
            let max = findMaxOrMin(arr,index+1,true);
            return Math.max(arr[index],max);
        }
        else{
            let min = findMaxOrMin(arr,index+1,false);
            return Math.min(arr[index], min);
        }
    }
}

console.log(findMaxOrMin([1,2,5,6,3,-8,4,1,-3],0,true)); // 6
console.log(findMaxOrMin([1,2,5,6,3,-8,4,1,-3],0,false)) // -8


function copy(str: string): string{
    if(str.length == 1) {
        return str[0];
    }else {
        return  str[0] + copy(String(str).substring(1));
    }
}
console.log(copy('aaa')); //aaa