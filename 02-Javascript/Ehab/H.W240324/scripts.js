const arr = [1,2,3,4,'aa',5,6,7,8,9];
function filterOddNumbers(arr){
    return 'The odd numbers in the array are: [' + arr.filter(index => (index % 2 !== 0 && typeof index == 'number'))+']';
}
console.log(filterOddNumbers(arr));

const arr2 = [1,9,'aa',{fName:'Ehab',lName:'Hassoun'},true,['key','value'],null];
function hasObject(arr){
    let res = arr.some(index => typeof index === 'object' && !Array.isArray(index) && index !== null);
    if(res)
        return "In this array there is a value that is an object";
    return "In this array there is no value that is an object";
    /* 
    typeof Array return object.
    typeof null return object.
    */
}
console.log(hasObject(arr2));