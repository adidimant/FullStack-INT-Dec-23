// Task number 1
// new Promise
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        const data = true ? {data: "I have data"} : null; // פנייה ל'דטה' אם הוא 'אמת' להחזיר אובייקט ואם הוא 'שקר' תחזיר ריק
        if (data) {
            res(data); //אם זה true אז הוא יחזיר את האובייקט
        } else {
            rej(data) // fulst יחזיר null
        }
    } ,3000);
})

promise.then((result) => {
    console.log(result.data); // מחזיר רק את הstring של האובייקט
})
.catch((error) => {
    console.error(error)  // נותן שגיעה
})


// async

async function promise() {
    console.log("hey!")

}




// Task number 2

const numbers = [1, 3, 2, 10, 14, 20, 31];

const promise2 = new Promise((res, rej) => {
    if (numbers[3] == 10) {
        res(numbers[3]);
    } else {
        rej("error");
    }
});

promise2.then((result) => {
    console.log(result)
    return new Promise((res, rej) => {
        setTimeout(() => res(result * 3), 2000)
    })
})
.then((result) => {
    console.log(result)
    return new Promise((res, rej) => {
        setTimeout(() => res(result / 15), 2000)
    })
})
.then((result) => {
    console.log(result)
    return new Promise((res, rej) => {
        setTimeout(() => res(result + 2), 2000)
    })
})
.then((result) => {
    console.log(result)
})
.catch("error");
    




// Task number 3

function getPromiseWithStatus(promise) {
    let status = "pending"; // יצירת משתנה של 
    console.log({status});
    promise.then((result) => {
        status = "fulfilled";
        console.log({result, status})
    })
    .catch((error) => {
        status = "rejected";
        console.log({error, status})
    })
}


