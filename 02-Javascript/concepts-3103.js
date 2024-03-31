/*
1) for / while
2) object functions
3) setTimeout / setInterval
4) js browser
5) fetch
6) promises - intro
*/

const arr = [2,7,6,6,10];

for (let i = 0; i<arr.length;i++) {
  console.log(arr[i]);
}

for (let i = arr.length -1 ; i >= 0; i--) {
  console.log(arr[i]);
}

const num = 1000;

// this code brings you the logn of a number
let count = 0;
for (let i = num; i > 1; i = Math.floor(i / 2)) {
  count++;
}
console.log(count);

// i-1000, count - 1
// i-500, count - 2
// i-250, count -3
// i-125, count -4
// i-62,count-5
// i-31,count-6
// i-15,count-7
// i-7,count-8
// i-3,count -9
// i-1, count -10

[1,2,4,7,9,10,11,16,20,26,30]
// middle index - Math.floor(arr.length / 2)

const indexOf = (arr, value) => {
  for (let i = 0; i<arr.length;i++) {
    if (arr[i] == value) {
      return i;
    }
  }
  return -1;
}


// for "of":
// this for loop increases each item in the array with 6, and console.log this value
for (let item of arr) {
  item+=6;
  console.log(item);
}

for (let i in arr) {
  console.log(i); // prints the index
}

const obj = {
  name: 'Ofer',
  age: 30,
  email: 'ofer.b@gmail.com',
};

const obj2 = {
  address: 'shlomo hamelech 24, rishon lezion',
}

obj.lastName = 'Raskin';

Object.keys(obj); // ['name', 'age', 'email'];
Object.values(obj); // ['Ofer', 30, 'ofer.b@gmail.com']
Object.entries(obj); // [[name, 'Ofer'], [age, 30], [email, 'ofer.b@gmail.com']]
Object.assign(obj, obj2); // obj: { name: 'Ofer', age: 30, email: 'ofer.b@gmail.com', lastName: 'Raskin'}

// iterating the array items
for (let item of arr) {
  item+=6;
  console.log(item);
}

// iterating the array indexes
for (const index in arr) {
  console.log(index);
}

const objKeys = Object.keys(obj);
for (let i=0; i< objKeys.length; i++) {
  console.log(objKeys[i]);
}

for (const [value, key] of Object.entries(obj)) {
  console.log(key, value);
}

// the function will call the function inside only once - after the timer reached
// example of usage: you want to present some add that is taking over all the user screen a few seconds after the user opened the window
setTimeout(() => {
  console.log('hey! timeout reached!');
}, 3000);

// the function will be called again and again every 3000 ms (3 seconds)
// example of usage: you have a dashboard, and you want to update the graphs in the dashboard from the server every 10 seconds
setInterval(() => {
  console.log('hey! interval reached!');
}, 3000);
