//                                                      MATH 

// console.log(Math.abs(-6)); // تحول الرقم من سالب الى موجب
// console.log(Math.sqrt(4)); // الجذر التربيعي للرقم 
// console.log(Math.pow(2, 4)); // عملية تربيع 
// console.log(Math.round(10.4)); // تقرب الرقم الى الاعلى او الاسفل حسب الرقم 
// console.log(Math.ceil(10.9)); // تقرب الرقم الى الاعلى 
// console.log(Math.floor(10.9)); // تقرب الرقم الى الاسفل 
// console.log(Math.min(1, 4, 6, 7, 8, 10.5)); // تخرج اصغر رقم من بينهم 
// console.log(Math.max(9, 19, 5, 666, 2, 3, 4, 66, 1002)); // تخرج اكبر رقم من بينهم 



//                                         function لحساب زكاة المال 

// // let zakah = window.prompt();
// // document.write(0.025 * zakah + 'Shekel');


//                                             تحويل الارقام الى نصوص 

// let x = 100;
// console.log(typeof x);
// console.log(typeof String(x));
// console.log(typeof x.toString());



//                                                       STRING  

// let name = "ali ";
// console.log(name.repeat(5));
// console.log(name.length);
// console.log(name.indexOf);

// // concat  merge 2 arry or more 

// // || "or"
// // && "and"


//                                                   Merge Array


// const m = ['ali', 'awni', 'alaa'];
// const z = ['same', 'omar', 'samer'];

// console.log(m.concat(z))


//                                                    IF Example


// const resultStud = prompt('What is your result');
// if (resultStud >= 90) {
//     document.write('excelant')
// }
// else if (resultStud >= 80) {
//     document.write('very good')
// }
// else if (resultStud >= 70) {
//     document.write('good')
// }
// else if (resultStud >= 50) {
//     document.write('accepted')
// }
// else {
//     document.write('fail')
// }

//                                               IF (2) Example



// const resultStud = prompt('What is your result');
// resultStud >= 90 ?
//     document.write('excelant')
//     : resultStud >= 80 ?
//         document.write("very good")
//         : resultStud >= 70 ?
//             document.write("good")
//             : resultStud >= 50 ?
//                 document.write("accepted")
//                 : document.write("fail");


//                                                 SWICH Example


// const roleUser = prompt('What is your role?')
// switch (roleUser) {
//     case 'admin':
//         document.write("You can creat , update and delete products")
//         break;
//     case 'user':
//         document.write("You can create and unpdate products only")
//         break;
//     default:
//         document.write(" Welcome User");
// }


//                                        LOOP    FOR Example for(Start; condition; Steps)
// i += 1 => i++ 
// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }


//                                             Reverse Loop 


// for (let i = 10; i >= 0; i--) {
//     console.log(i)
// }

// for (let i = 0; i <= 4; i++) {
//     console.log('Awni' + i)
// }

//                                                         LOOP Example


// const names = ['awni', 'ali', 'omar', 'same', 'mona'];

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// //                                                         REVERSE LOOP Example


// const names1 = ['awni', 'ali', 'omar', 'same', 'mona'];

// for (let i = names1.length - 1; i >= 0; i--) {
//     console.log(names1[i]);
// }


//                                                         NASTED LOOP 


// const cars = ['BMW', 'Mazda', 'Skoda', 'audi'];
// const model = [2020, 2021, 2022, 2023, 2024];
// const color = ['black', 'red', 'white', 'blue'];

// for (let i = 0; i < cars.length; i++) {
//     console.log(`Car : ${cars[i]} `)
//     for (let m = 0; m < model.length; m++) {
//         console.log(`Models : ${model[m]}` )
//     }
//     for(let f = 0; f < color.length; f++){
//         console.log(`Color : ${color[f]} `)
//     }
//     console.log('_______________')
// }

// const cars = ['BMW', 'Mazda', 'Skoda', 'audi'];
// const model = [2020, 2021, 2022, 2023, 2024];
// const color = ['black', 'red', 'white', 'blue'];

// for (let i = 0; i < cars.length; i++) {
//     document.write(`<p>Car: ${cars[i]}</p>`);
//     for (let m = 0; m < model.length; m++) {
//         document.write(`<p>Models: ${model[m]}</p>`);
//     }
//     for (let f = 0; f < color.length; f++) {
//         document.write(`<p>Color: ${color[f]}</p>`);
//     }
// }


//                              WHILE Example

// let i = 0;
// while (i < 3) {
//     document.write('<h1> Hellow World </h1>');
//     i++;
// }

// let i = 0;
// do {
//     document.write('<h1> hellow world </h1>');
//     i++;
// } while (i < 5)


//                                                        FUNCTION

// function calcAge(age) {
//     let ageUser = prompt('What is your Age')
//     let result = ageUser * 365;
//     console.log(result);
// }
// calcAge();

// function pro() {
//     let productPrice = prompt('What Is The Price');
//     let taxes = 0.17;
//     let ads = 5;
//     let product = productPrice - (productPrice * taxes);
//     let result = product + ads;
//     console.log(result);
// }
// pro();


//                                                        FUNCTION RETURN 

// function pro(price, taxes, ads){
//     let product = price * taxes;
//     let result = product + ads;
//     return result;
// }
// let x = pro(350, 1.15, 10);
// console.log(x)


// function days(age)
// {
//     let result = age * 365;
//     return result;
// }
// let day = days(25);

// function calaAgeByHours(age)
// {
//     let result = age * 24;
//     return result;
// }
// let hour = calaAgeByHours(day);
// console.log(hour + ' Hours');


//                                               HOiSTING 

//                                            var x;        
// console.log(x);                            console.log(x);

//                     // ===> hoisting      
// var x = 10;                                x = 10;  // x undefinde !! in JAVASCRIPT

//   let not hoisting !!! 


// console.log(hello());
// function hello ()
// {                                        // Declaration Function ====> HOISTING 
//     return 1;
// }


// let hello = function()
// {                                        // Expression Function  ====> Not HOISTING 
//     return 1;
// }





//                                          Function ARGUMENTS 

// function calc(...numbers) {

//     let result = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i];
//     }
//     console.log(result);
// }
// calc(10, 9, 100, 1023, 132123, 4412, 32124, 12421, 3213, 1231231);


//                                           Arrow Function 


// let x = function(){
//     return 1;
// }
// console.log(x());

// let x = () => {
//     return 1;
// }
// console.log(x());



//                                                   OBJECT 


// let car = {
//     title: 'BMW', 
//     price: 500000,
//     color: 'red',
//     model:2020,

//     hello:function(){
//         return `hello`;
//     }
// };
// console.log(car);


//                                                NASTED OBJECT 


// let user = {
//     // prperty 
//     firstName: 'awni',
//     lastName: 'jwayed',
//     email: 'awni.n95@gmail.com',
//     age: prompt('What is your age'),
//     skills: ['html', 'css', 'js'],
//     active: true,
//     phoneNumber: {
//         first: '010129392139',
//         secound: '1238762136',
//     },
//     address: {
//         Israel: 'shefa-amr',
//         uae: 'abu dhabi',
//     },

//     // method
//     isActive: function () {
//         if (user.active === true) {
//             return `hello user`;
//         }
//         else {
//             return `sorry your not active`;
//         }
//     },
//     getAge: function () {
//         if (user.age >= 18) {
//             return `avialable`;
//         }
//         else {
//             return `unavailable`;
//         }
//     },
// };

// console.log(user);
// console.log(user.isActive());
// console.log(user.getAge());

//                                                  CREATE OBJECT

// let user = {};

// user.name = 'awni';
// user['age'] = 28;
// user.hello = function(){
//     return `hello`;
// }
// console.log(user.name);
// console.log(user.age);
// console.log(user.hello());

// =============================

// let user = new Object();
// user.title = 'awni';
// console.log(user);



//                                                      THIS Keyword 

// // let user = {
// //     name: 'awni',

// //     getName: function () {
// //         return this.name
// //         // return user.name  this => object
// //     }
// // }
// // console.log(user.getName());

// // let x = this;               // this => window
// // console.log(x);

// // function hello() {
// //     return this;      // this => window
// // }
// // console.log(hello());

// "use strict";
// function calc() {
//     return this;      // this => undefinde !!
// }
// console.log(calc());