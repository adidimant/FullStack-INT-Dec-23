
//1

let temperature=[];

function temper(temperature) {
   return temperature.map((item)=>{
    (f-32)* 5 / 9;
   })
}

//2

let arry=[];

function reverseArry(arry) {
    return arry.reduce((newarry, item)=>{
        newarry.unshift(item);
        return newarry;
    },[])
};

//3

function arrayToObj(array) {
    return array.reduce((newObj, item, index) => {
      newObj[index] = item;
      return newObj;
    }, {});
  }
  const objFromArray1 = arrayToObj(array1);
  console.log("object from array1:", objFromArray1);

  //4

  function findInArray(array, condition) {
    return array.reduce((status, item) => {
      if (status !== "not found") {
        return status;
      }
      if (condition(item)) {
        return item;
      }
      return status;
    }, "not found");
  }
  function checkNum(num) {
    return num < 22 && num > 20;
  }
  const nums = [30, 54, 6, 21, 2, 5];
  const find = findInArray(nums, checkNum);
  console.log("nums", nums);
  console.log("find checkNum in nums:", find);

  //5

  function checkName(array) {
    return array.map((person) => {
      if (person.name.length > 6) {
        return { ...person, hasLongName: true };
      } else return { ...person, hasLongName: false };
    });
  }
  const people = [
    { name: "Adi", age: 30 },
    { name: "Anastasia", age: 29 },
    { name: "Benjamin", age: 24 },
    { name: "Azul", age: 17 },
  ];
  const hasLongName = checkName(people);
  console.log("people:", people);
  console.log("people with hasLongName:", hasLongName);