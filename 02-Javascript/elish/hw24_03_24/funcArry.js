//פונקציה שמקבל מערך מספרים ומחזירה מערך של המספרים האי זוגים

let arr=[];
// let arrNum=arr.filter((num)=>{
//     if(arr[i]!=num%2)
//         return false;
//     return true;
// })

function oddNum(arr){
    let odd=arr.filter((num)=>num % 2 !=0);
    return odd;
}
console.log(oddNum(arr));



//פונקציה שמקבלת מערך ובודקת האם קיים אייבר במערך שהוא אובייקט

let arr2=[];

function check(arr2) {
    if(arr2.some((item)=> typeof item=="object"))
        return true;
    return false;
}

function check2(arr2) {
    return arr2.some((item)=> typeof item=='object'); 
}