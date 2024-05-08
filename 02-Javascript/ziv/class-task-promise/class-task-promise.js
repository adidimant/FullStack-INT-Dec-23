const prom1 = new Promise((resolve, reject) => {
    resolve("Resolved!");   
});


const prom2 = new Promise((resolve, reject) => {
    reject( new Error("Rejected!"));
});


const prom3 = Promise.resolve("Resolves!");  


const prom4 = async () => {
    return "Resolved!";
};        


const prom5 = async () => {
    throw new Error("Rejected!");
};  

const prom6 = Promise.reject(new Error("Rejected!"));


const resolvePromise = [prom1,prom3, prom4()];
const allPromises = [prom1,prom2,prom3,prom4(),prom5(),prom6];

const results = await Promise.all(resolvePromise);
console.log(results);


const results2 = await Promise.all(allPrommies).catch((errors) =>{
    console.warn(errors);
})


const results3 = await Promise.any(allPromises);
comsole.log(results3);


const results4 = await Promise.race(allPromises);
console.log(results4);


const results5 = await Promise.race([
    prom6, ...allPromises
]).catch((errors) =>{
    console.warn(errors);
});

const results6 = await Promise.any([prom6 , prom2, prom5()]).catch((errors) =>{
    console.warn(errors);
});
   










