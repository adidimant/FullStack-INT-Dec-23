// Write a promise of your own with two ways: 1) standard way via new Promise, 2) write an async function
// your promise & async function should contain something we didn't showed in class
let allGood = true;

let fetchSomeData = new Promise((resolve, reject) => {
    if (allGood) {
        resolve({
            id: 1,
            message: "nice work"
        })

    } else {
        reject("error fetching data")
    }
})

fetchSomeData.then(fetchSomeData => {
    console.log('then:', fetchSomeData);
}).catch(err => {
    console.error('catch:', err)
})

//////////////////////////////////////////////////////////

const count = false;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});
countValue.then(msg => {
    console.log(`Resolved`, msg)
}).catch(msg => {
    console.error(`Catch:`, msg)
})




/////////////////////////////////////////////////////////////////////////////////////

async function showTitles() {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById("title11").style.visibility = 'visible'
            resolve()
        }, 1000);
    })
    await new Promise((resolve) => {
        setTimeout(() => {
            document.getElementById("title22").style.visibility = 'visible'
            resolve()
        }, 1000);
    })
    await new Promise((resolve) => {
        setTimeout(() => {
            document.getElementById("title33").style.visibility = 'visible'
            resolve()
        }, 1000);
    })

    setTimeout(() => {
        document.getElementById("title44").style.visibility = 'visible'
    }, 1000);

}

showTitles()


/////////////////////////////////////////////////////////////////////////////////////

const url = "https://restcountries.com/v3.1/all";

async function fetchData() {
    console.log(1);
    const response = await fetch(url);
    const countires = await response.json();

    for (let i = 0; i <= 20; i++) {
        console.log(countires[i].name.common);
    }

    console.log(2);
}
fetchData();






////////////////////////////////////////////////////////////////////////////////

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    addColor(1000, '.first', 'red').then(() => console.log('Iam Red'))
        .then(() => addColor(3000, '.second', 'blue')).then(() => console.log('Iam Blue'))
        .then(() => addColor(2000, '.third', 'green')).then(() => console.log('Iam Green'))
        .then(() => console.log('Done'))
        .catch((err) => console.log(err))
});

function addColor(time, selector, color) {
    const element = document.querySelector(selector)
    return new Promise((resolve, reject) => {
        if (element) {
            setTimeout(() => {
                element.style.color = color
                resolve()
            }, time);
        } else {
            reject(`There is no such element : "${selector}"`)
        }
    })
}





//////////////////////////////////////////////////////////////////////////////////////

//Write a "promise chain" - you need to write 4 different promises, that 1 promise is calling the next one
//when the first promise is resolved - it means that all the promises are resolved
//(Promise Chain) =>
new Promise((resolve, reject) => {
    setTimeout(() => {
        document.getElementById('title1').style.visibility = 'visible'
        resolve()
    }, 1000);
})
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                document.getElementById('title2').style.visibility = 'visible'
                resolve()
            }, 1000);
        })
    })
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                document.getElementById('title3').style.visibility = 'visible'
                resolve()
            }, 1000);
        })
    })
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                document.getElementById('title4').style.visibility = 'visible'
                resolve()
            }, 1000);
        })
    }).catch((error) => {
        console.error("error from " + error)
    })


////////////////////////////////////////////////////////////////////

let myPromiseForPepoleDetails = new Promise((resolve, reject) => {
    let user = [
        { name: 'awni', age: 28, adress: 'shefa-amr' },

    ];

    resolve(user)

})
myPromiseForPepoleDetails.then(user => {
    user.forEach(user => {
        setTimeout(() => {
            console.log(`I Am ${user.name}`);
        }, 1000);

        new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`I Am ${user.age} Years Old`);
                resolve(user)
            }, 2000);
        }).then(user => {
            setTimeout(() => {
                console.log(`I From ${user.adress}`);
            }, 1000);
        }).catch(error => {
            console.log('From Ctach:', error);
        })
    })
})




/////////////////////////////////////////////////////////////////////////////////////////////
//Write the function `getPromiseWithStatus`, the function gets a promise, and returns the promise with an extra field with its `status`: "pending"/"fulfilled"/"rejected"
//hint: use the .then,.catch functions on the received promise


function getPromiseWithStatus(p) {
    const t = {};
    return Promise.race([p, t])
        .then(v => (v === t) ? "pending" : "fulfilled", () => "rejected");
}

var a = Promise.resolve();
var b = Promise.reject();
var c = new Promise(() => { });

getPromiseWithStatus(a).then(state => console.log(state)); // fulfilled
getPromiseWithStatus(b).then(state => console.log(state)); // rejected
getPromiseWithStatus(c).then(state => console.log(state)); // pending









 




































