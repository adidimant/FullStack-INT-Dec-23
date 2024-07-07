//1)
let p = new promise ((res, rej) => {
    let a = 1 + 1
    if (a == 2) {
        res(`Success`);
    } else {
        rej(`Failure`);
    }
});


p.then((message) => {
    console.log(` this is the then ` + message)
}).catch((message) => {
    console.log(` this is the catch ` + message)
})


function cleanKitchen() {
    return new promise((res, rej) => {
        setTimeout(() => {
            const dogWalked = true;

            if(dogWalked){
                res(`You walked the dog`);
            }
            else{
                rej(`You didnt walked the dog`)
            }
        }, 3000);
    });
}

function cleanKitchen() {
    return new promise((res, rej) => {
        setTimeout(() => {
            const kitchenCleaned = true;

            if(kitchenCleaned){
                res(`You cleaned the kitchen`);
            }
            else{
                rej(`You didnt clean the kitchen`)
            }
        }, 3000);
    });
}

function takeOutTrash() {
    return new promise((res, rej) => {
        setTimeout(() => {
            const trashTakenOut = true;

            if(trashTakenOut){
                res(`You took out the trash`);
            }
            else{
                rej(`You didnt take out the trash`)
            }
        }, 3000);
    });
}



async function doChores() { 

    try {

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchen); 
    
    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrash);
        
    const walkDogResult = await walkDog();
    console.log(walkDog);
     } catch (error) { 

        } console.error( `error` );

}

const promise1 = new promise(async(resolve, reject) => {

    
}); 

const promise2 = new promise(async(resolve, reject) => {
    console.log(reject, `denied!`)
    reject();
});


        




























