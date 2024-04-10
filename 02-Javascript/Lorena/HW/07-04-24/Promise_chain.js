// DO THESE CHORES IN ORDER

// 1. WALK THE DOK
// 2. CLEAN THE KITCHEN
// 3. TURN ON THE DISHWASHER
// 4. TAKE OUT THE TRASH

function walkDog(){

    return new Promise((resolve, reject) => {
    setTimeout(() => {
        
        const dogwalked = true;

        if (dogwalked){
            resolve("you walk the dog");
        }
        else{
            reject("you didn't walk the dog")
        }
    }, 1500);
  });
}


function cleanKithcen(){

    return new Promise((resolve, reject) => {
    setTimeout(() => {

        const kitchenCleaned = true;
        
        if (kitchenCleaned){
            resolve("you clean the kitchen");
        }
        else{
            reject("you didnt cleaned the kitchen");
        }
    }, 2500)
    });
}

function turnOnTheDishwasher(){

    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const DishwasherturnedOn = true;
        if (DishwasherturnedOn){
            resolve("you turned on the dishwasher");
        }
        else{
            reject("you didn't turn on the dishwasher");
        }
    }, 1000)
    }); 
}

function takeOutTrash(){

    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const trashTakenOut = true;
        if (trashTakenOut){
            resolve("you taked out the trash");
        }
        else{
            reject("you didn't taked out the trash");
        }
    }, 500)
    });
}

walkDog().then(value => {console.log(value); return cleanKithcen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); return turnOnTheDishwasher()})
         .then(value => {console.log(value); console.log("you finished all the chores!")})
         .catch(error => console.error(error)); 