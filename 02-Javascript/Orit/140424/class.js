function ex1() {
    const promise1 = new Promise((resolve) => setTimeout(resolve, 90, 'quickResolve'));
    const promise2 = new Promise((reject) => setTimeout(reject, 100, 'quickReject'));
    function testPromise() {
        const promise4 = new Promise((resolve) => setTimeout(resolve, 300, 'slow'));
    }
    //const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

    promise2.then((value) => {
        console.log('Promise resolved with value:', value);
      }).catch((error) => {
        console.error('Promise rejected with error:', error);
    });

    /*const promises = [promise1, promise2, promise3];

    Promise.any(promises).then((value) => console.log(value));*/
}


/* /**
 * Class task:
 * Write 4 promises:
 * 1 - with new Promise, should be resolved
 * 2 with new Promise, should be rejected
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