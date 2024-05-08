
/* 3 */
    // one way//
async function changeEventLEMENTbYnewData() {
    const a = 7;
    const response = await fetch("https://our-server.com");
    const data = await response.json();
    document.getElementById("user-data-el").innerHTML = data;
    return data;
}

// usage;
const newData = await changeEventLEMENTbYnewData();



/*----------------------------------------------------------------*/

 // second way//
const promise = new Promise(async(resolve, reject) => {

    try{
        const a = 7;
        const response = await fetch("https://our-server.com");
        const data = await response.json();
        document.getElementById("user-data-el").innerHTML = data;
        resolve(data);
    } catch(err){
        reject(err);
    }
});

// usage;
const newData2 = await promise;
