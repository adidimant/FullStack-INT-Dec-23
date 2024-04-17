/**
 * Class task:
 * Write 4 promises:
 * 1 - with new Promise, should be resolved
 * 2 - with new Promise, should be rejected
 * 3 - with Promise.resolve, should be xx?
 * 4 - with async function, should be resolved
 * 5 with async function, should be rejected
 * 6 - with Promise.reject, should be yy?
 * 
 * 
 * Use Promise.all on all the resolved promises, and print the resolved value
 *  * Use Promise.all on all the promises, and catch the rejected value. explain why it's rejected
 * Use Promise.any on all the promises, and print the resolved value
 * Use Promice.race on all the promises, make sure the first promise is resolved, and print the resolved value
 * Use Promice.race on all the promises, make sure the first promise is rejected, and catch the error or print the resolved value
 */


//1 - with new Promise, should be resolved
const promise1 = new Promise((res,rej)=>{
    let x=true;
    if(x){
        res();
    }else{
        rej();
    }
});

//2 - with new Promise, should be rejected
const promise2 = new Promise((res,rej)=>{
    let x=true;
    if(!x){
        res();
    }else{
        rej();
    }
});

//3 - with Promise.resolve, should be xx?
let promise3 = Promise.resolve(3);

//4 - with async function, should be resolved
async function promise4(){
    return 1;
}

//5 with async function, should be rejected
async function promise5(){
    throw new Error("Promise rejected!");
}

//6 - with Promise.reject, should be yy?

const promise6 = Promise.reject(new Error("Promise rejected!"));



//Use Promise.all on all the resolved promises, and print the resolved value
const results = await Promise.all([promise1,promise3,func4()]);
//Use Promise.all on all the promises, and catch the rejected value. explain why it's rejected
const results2 = await Promise.all([promise1,promise2,promise3,promise4(),promise5(),promise6]).catch((error) => {
    console.log(error)}
);
//Use Promise.any on all the promises, and print the resolved value
const results3 = await Promise.any([promise1,promise2,promise3,promise4(),promise5(),promise6]);
console.log(results3);

//Use Promice.race on all the promises, make sure the first promise is resolved, and print the resolved value
const results4 = await Promise.race([[promise1,promise2,promise3,promise4(),promise5(),promise6]]);
console.log(results4);
//Use Promice.race on all the promises, make sure the first promise is rejected, and catch the error or print the resolved value
const results5 = await Promise.race([promise6,promise1,promise2,promise3,promise4(),promise5()]).catch((errors)=> {
    console.log(errors);
});
