
// // let content;
// // let content2;
// // let content3;
// // let content4;

// // new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         content = document.createElement('button');
// //         content.style.position = ' absolute';
// //         content.style.padding = '30px'
// //         content.textContent = 'Hey Man Iam Here 😎';
// //         document.body.appendChild(content);
// //         resolve()
// //     }, 700);
// // }).then(() => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             content.style.display = 'none';
// //             content2 = document.createElement("button");
// //             content2.style.position = ' absolute';
// //             content2.style.padding = '30px'
// //             content2.style.top = '500px';
// //             content2.textContent = 'No Iam Here 🙄';
// //             document.body.appendChild(content2);
// //             resolve()
// //         }, 700);

// //     })
// // })
// //     .then(() => {
// //         return new Promise((resolve, reject) => {
// //             setTimeout(() => {
// //                 content2.style.display = 'none';
// //                 content3 = document.createElement('button');
// //                 content3.style.position = ' absolute';
// //                 content3.style.padding = '30px'
// //                 content3.style.top = '0';
// //                 content3.style.right = '500px';
// //                 content3.textContent = 'No No!! Iam Here 🤓';
// //                 document.body.appendChild(content3);
// //                 resolve()
// //             }, 700);

// //         })
// //     })
// //     .then(() => {
// //         return new Promise((resolve, reject) => {
// //             setTimeout(() => {
// //                 content3.style.display = 'none';
// //                 content4 = document.createElement('button');
// //                 content4.style.position = ' absolute';
// //                 content4.style.padding = '30px'
// //                 content4.style.top = '500px';
// //                 content4.style.right = '500px'
// //                 content4.textContent = 'Ok Ok Iam Here 😂'
// //                 document.body.appendChild(content4);
// //                 setTimeout(() => {
// //                     alert('You failed 😛');
// //                     window.location.reload();
// //                 }, 300);
// //             }, 700);
// //         })
// //     }).catch(err => {
// //         console.log(err)
// //     })



// // function catchClick() {
// //     document.addEventListener('click', function (event) {
// //         if (event.target.tagName === 'BUTTON') {
// //             alert('You caught me ');
// //         }
// //     });
// // }

// // catchClick();

// // async function whereIam() {
// //     await new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             content = document.createElement('button');
// //             content.style.position = ' absolute';
// //             content.textContent = 'Hey Man Iam Here 😎';
// //             document.body.appendChild(content);
// //             resolve()
// //         }, 700);
// //     })
// //     await new Promise((resolve) => {
// //         setTimeout(() => {
// //             content.style.display = 'none';
// //             content2 = document.createElement("button");
// //             content2.style.position = ' absolute';
// //             content2.style.top = '500px';
// //             content2.textContent = 'No Iam Here 🙄';
// //             document.body.appendChild(content2);
// //             resolve()
// //         }, 700);
// //     })
// //     await new Promise((resolve) => {
// //         setTimeout(() => {
// //             content2.style.display = 'none';
// //             content3 = document.createElement('button');
// //             content3.style.position = ' absolute';
// //             content3.style.top = '0';
// //             content3.style.right = '500px';
// //             content3.textContent = 'No No!! Iam Here 🤓';
// //             document.body.appendChild(content3);
// //             resolve()
// //         }, 700);
// //     })
// //     setTimeout(() => {
// //         content3.style.display = 'none';
// //         content4 = document.createElement('button');
// //         content4.style.position = ' absolute';
// //         content4.style.top = '500px';
// //         content4.style.right = '500px'
// //         content4.textContent = 'Ok Ok Iam Here 😂'
// //         document.body.appendChild(content4);
// //         setTimeout( () => {
// //             alert('You failed 😛');
// //             window.location.reload();
// //         }, 300);
// //     }, 700);
// // }

// // whereIam();

// // //////////////////////////////////////////////////////////////////////////////////


// // const myPromise1 = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         content = document.createElement('button');
// //         content.style.position = 'absolute';
// //         content.textContent = 'Hey Man Iam Here 😎';
// //         document.body.appendChild(content);
// //         console.log("Promise 1 is resolved");
// //         resolve(content);
// //     }, 700);
// // });

// // const myPromise2 = (content) => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             content.style.display = 'none';
// //             content2 = document.createElement("button");
// //             content2.style.position = 'absolute';
// //             content2.style.top = '500px';
// //             content2.textContent = 'No Iam Here 🙄';
// //             document.body.appendChild(content2);
// //             console.log("Promise 2 is resolved");
// //             resolve(content2);
// //         }, 700);
// //     });
// // };
// // const myPromise3 = (content2) => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             content2.style.display = 'none';
// //             content3 = document.createElement('button');
// //             content3.style.position = 'absolute';
// //             content3.style.top = '0';
// //             content3.style.right = '500px';
// //             content3.textContent = 'No No!! Iam Here 🤓';
// //             document.body.appendChild(content3);
// //             console.log("Promise 3 is resolved");
// //             resolve(content3);
// //         }, 700);
// //     });
// // };
// // const myPromise4 = (content3) => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             content3.style.display = 'none';
// //             content4 = document.createElement('button');
// //             content4.style.position = ' absolute';
// //             content4.style.top = '500px';
// //             content4.style.right = '500px'
// //             content4.textContent = 'Ok Ok Iam Here 😂'
// //             document.body.appendChild(content4);
// //             console.log("Promise 4 is resolved");
// //             resolve(content4)
// //             setTimeout(() => {
// //                 alert('You failed 😛');
// //                 window.location.reload();
// //             }, 500);
// //         }, 700);
// //     });
// // };

// // myPromise1.then((btnContent) => myPromise2(btnContent))
// //     .then((btnContent) => myPromise3(btnContent))
// //     .then((btnContent) => myPromise4(btnContent))
// //     .then((msg) => {
// //         console.log("done")
// //     }).catch((error) => {
// //         console.error('Catch:', error)
// //     })


// ///////////////////////////////////////////////////////////////////


// // let allGood = true;

// // let fetchSomeData = new Promise((resolve, reject) => {
// //     if (allGood) {
// //         resolve({
// //             id: 1,
// //             message: "nice work"
// //         })

// //     } else {
// //         reject("error fetching data")
// //     }
// // })

// // fetchSomeData.then(fetchSomeData => {
// //     console.log('then:', fetchSomeData);
// // }).catch(err => {
// //     console.error('catch:', err)
// // })

// // //////////////////////////////////////////////////////////

// // const count = false;

// // let countValue = new Promise(function (resolve, reject) {
// //     if (count) {
// //         resolve("There is a count value.");
// //     } else {
// //         reject("There is no count value");
// //     }
// // });
// // countValue.then(msg => {
// //     console.log(`Resolved`, msg)
// // }).catch(msg => {
// //     console.error(`Catch:`, msg)
// // })




// // ///////////////////////////////////////////////////////////////////



// // const url = "https://restcountries.com/v3.1/all";

// // async function fetchData() {
// //     console.log(1);
// //     const response = await fetch(url);
// //     const countires = await response.json();

// //     for (let i = 0; i <= 2; i++) {
// //         console.log(countires[i].name.common);
// //     }

// //     console.log(2);
// // }
// // fetchData();

// // ///////////////////////////////////////////////////////////////////


// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//     addColor(1000, '.first', 'red').then(() => console.log('Iam Red'))
//         .then(() => addColor(3000, '.second', 'blue')).then(() => console.log('Iam Blue'))
//         .then(() => addColor(2000, '.third', 'green')).then(() => console.log('Iam Green'))
//         .then(() => console.log('Done'))
//         .catch((err) => console.log(err))
// });

// function addColor(time, selector, color) {
//     const element = document.querySelector(selector)
//     return new Promise((resolve, reject) => {
//         if (element) {
//             setTimeout(() => {
//                 element.style.color = color
//                 resolve()
//             }, time);
//         } else {
//             reject(`There is no such element : "${selector}"`)
//         }
//     })
// }

// // ///////////////////////////////////////////////////////////////////
// function getPromiseWithStatus(p) {
//     const t = {};
//     return Promise.race([p, t])
//         .then(v => (v === t) ? "pending" : "fulfilled", () => "rejected");
// }

// var a = Promise.resolve();
// var b = Promise.reject();
// var c = new Promise(() => { });

// getPromiseWithStatus(a).then(state => console.log(state)); // fulfilled
// getPromiseWithStatus(b).then(state => console.log(state)); // rejected
// getPromiseWithStatus(c).then(state => console.log(state)); // pending



function getPromiseWithStatus(promise) {
    let isPending = true;
    let isFulfilled = false;
    let isRejected = false;

    let result = promise.then(() => {
        isPending = false;
        isFulfilled = true;
        console.log('entered .then');
        return;
    }).catch(() => {
        isPending = false;
        isRejected = true;
        console.log('entered .catch');
        return;
    }).then(() => {
        if (isPending) {
            result.status = 'pending';
            console.log('entered pending');
        } else if (isFulfilled) {
            result.status = 'fulfilled';
            console.log('entered fulfilled');
        } else { // isRejected == true
            result.status = 'rejected';
            console.log('entered rejected');
        }

        
    })
    return result;
}
const a = new Promise((res, rej) => {
    setTimeout(res, 6000);
});
console.log(getPromiseWithStatus());