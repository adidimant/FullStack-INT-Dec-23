// setTimeout(() => {
//     document.getElementById('title1').style.visibility = 'visible'
//     setTimeout(() => {
//         document.getElementById('title2').style.visibility = 'visible'
//         setTimeout(() => {
//             document.getElementById('title3').style.visibility = 'visible'
//             setTimeout(() => {
//                 document.getElementById('title4').style.visibility = 'visible'
//             }, 1000);            
//         }, 1000);
//     }, 1000);
// }, 1000);




// promise example (Promise Chain) =>

new Promise((resolve, reject) => {
    setTimeout(() => {
        document.getElementById('title1').style.visibility = 'visible'
        resolve()
    }, 1000);
})
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.getElementById('title2').style.visibility = 'visible'
                resolve()
            }, 1000);
        })
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.getElementById('title3').style.visibility = 'visible'
                resolve()
            }, 1000);
        })
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.getElementById('title4').style.visibility = 'visible'
                resolve()
            }, 1000);
        })
    }).catch((error) => {
        console.log("error from " + error)
    })




//////////////////////////////////////////////////////////////////////////////////

// async / await in javascript =>>> async = promise / then = await

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


///////////////////////////////////////////////////////////////////////////////////////////////////////


// Promise example 2)

let p = new Promise((resolve, reject) => {
    let a = parseInt(prompt('Chose Num1')) + parseInt(prompt('Chose Num2'))
    if (a > 10) {
        resolve('success')
    } else {
        reject('Failed')
    }
})

p.then((message) => {
    console.log('This is in the THEN ' + message)
}).catch((message) => {
    console.log('This is in the CATCH ' + message)
});
// ================================================================================================



// ==============================================================================================

// async / await in javascript =>>> async = promise / then = await

// function getUsers() {
//     return new Promise((resolve, reject) => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then(response => response.json())
//             .then(json => {
//                 resolve(json)
//             })
//     })
// }
// getUsers()
//     .then(() => {

//     })


async function getUsers() {

    let response = await fetch("https://jsonplaceholder.typicode.com/users=5")
    let json = await response.json()
    return json

}

async function getData() {
    await getUsers()
    let response = await fetch("https://jsonplaceholder.typicode.com/posts=5")
    let json = await response.json()
    console.log(json)
}