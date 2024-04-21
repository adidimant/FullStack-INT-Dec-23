//1
//Implement function "all" - the function recieves an array of promises, and returns a new Promise, that is resolved only when all the promises are resolved, 
//if one of them rejected - the returned promise is rejected.

async function promiseAllArray(promises) {
    const resolveArray=[];
    const rejectArray=[];

    for (const promise of promises) {
        try{
            const result= await promise;
            resolveArray.push(result);
        }
        catch (error){
            rejectArray.push(error);
        } 
    }
    if(rejectArray.length>0)
        throw new Error('One or more promises rejected: ${rejectArray}');
    return resolveArray;
};

// Example usage
const successPromise = Promise.resolve('Success');
const failurePromise = Promise.reject(new Error('Failed'));

const promises=[successPromise];

promiseAllArray(promises).then((resolveArray)=>{
    console.log('All promises resolved', resolveArray);
}).catch((error)=>{
    console.error('One or more promises rejected',error);
});

//2
//Implement function "any" - the function recieves an array of promises, and returns a new Promise that resolves the resolved data from the first succeeded promise. 
//if no promises succeeded (resolved) - the returned promise is rejected that rejects all the errors in array.

async function any(promises1) {
    const resolveData=[];
    const rejectData=[];

    for (const promise of promises1) {
        try{
            const result= await promise;
            resolveData.push(result);
        }
        catch(error){
            rejectData.push(error);
        }
    }
    if(resolveData.length>0)
        return resolveData[0];
    else
        throw new Error('all promises rejected: ${rejectData}');
};

//Example usage

const successPromise1 = Promise.resolve('Success');
const failurePromise1 = Promise.reject(new Error('Failed'));
const failurePromise2 = Promise.reject(new Error('Failed 2'));

const promises1=[successPromise1,failurePromise1,failurePromise2];

any(promises1).then((result)=>{
    console.log('All promises resolved', resolveData);
}).catch((error)=>{
    console.error('One or more promises rejected',error);
});