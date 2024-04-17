
///   promise

//     promise.all()
// מקבל כמה promisem 
//ומחזיר את כולם בשורה אחת אם הכל עבד 
const myPromise1=Promise.resolve(3);
const myPromise2=42;
const myPromise3=new Promise((reject)=>{
    setTimeout(100,'foo');
});

Promise.all([myPromise1,myPromise2,myPromise3]).then((value)=>{
    console.log(value);
});

//  [3, 42, 'foo']

//מחכים לכל ההתממשויות, גם אם יש ערכים לא קשורים
const promiseArray=[Promise.resolve(33),Promise.reject(44)];
const p=Promise.all(promiseArray);
console.log(p);
setTimeout(()=>{
    console.log('התור ריק');
    console.log(p);
});

//Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "rejected"[[PromiseResult]]: 44
//התור ריק
// Promise {<rejected>: 44}

//   promise.any()
//מחכה לכל התממשויות , אם  הכל הצליחה הוא מחזיר את הראשון, אם נכשל הוא מחזיר את הראשון שהצליח
//הכל מצליח
const promise1=Promise.resolve(3);
const promise2=new Promise((resolve,reject)=> setTimeout(resolve,100,'foo'));
const promise3=Promise.reject(new Error('promise3 failed'));
Promise.any([promise1,promise2,promise3]).then(value =>{
    console.log(value);
}).catch(error=>{
    console.error(error);
});

//הפלט  3

//לא מצליח
const failure=new Promise((resolve,reject)=>{
    reject('נכשל תמיד');
});
Promise.any([failure]).catch(error=>{
    console.log(error);
});

//AggregateError: All promises were rejected
//לא יוחזר שום דבר 

//      Promise.race()
//מחזיר את ההתממשות הראשונה 

const promise4=new Promise((resolve,reject)=>{
    setTimeout(resolve,500,'one');
});

const promise5=new Promise((resolve,reject)=>{
    setTimeout(resolve,100,'tow');
});

Promise.race([promise4,promise5]).then((value)=>{
    console.log(value);
});

//tow
//שתיהם עובדים אך מה שיחזור זה התוצאה המהירה ביותר 

//   Promise.resolve()

const p1=Promise.resolve('hello world');
p1.then((value)=>{
    console.log(value);
});

//hello world

//    Promise.reject()

const p2 = Promise.reject(new Error('אופס!'));
p2.catch((err) => {
  console.log(err.message); 
});

//// 'אופס!'

/////////////////////////////////////////////////

const fetchData =async ()=>{
    try{
        const response = await fetch("https://our-server.com");
        if(!response.ok)
            throw new Error('Network response was not ok');

        const data = await response.json();
        return data;
    }
    catch(error){
        console.error("Error fetching data:",error);
        throw error;
    }
};
fetchData().then((data)=>{
    document.getElementById("user-data-el").innerHTML = data;
})
.catch((error)=>{
    console.error("Error:", error);
});