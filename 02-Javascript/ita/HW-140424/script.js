
const promise = new Promise((res, rej) => {
    try {
        res("promise is resolve")
    } catch(arr) {
        rej("reject-promise")
    }
});

const result = await promise;


const promise2 = new Promise((res, rej) => {
    try {
        res("promise 2 is resolve")
    } catch(arr) {
        rej("reject-promise2")
    }
});

const result2 = await promise2;

const promise3 = new Promise((res, rej) => {
    try {
        res("promise 2 is resolve")
    } catch(arr) {
        rej("reject-promise2")
    }
});

const result3 = await promise3;


const promises = [promise, promise2, promise3];
const results = [result, result2, result3];




const allPromisesRes = async (promises) => {
    return new Promise((res,rej) => {
        if (result && result2 && result3) {
            res([result, result2, result3]);
        } else {
            rej("error");
        }
    })
}

///////////////////

const anyPromisesRes = async () => {

}

