// Write a function that receives an array of objects, and filters all the objects that has at least 5 keys.
console.log('Ex1\n')
function FiveKeys(arr) {
    return arr.filter(obj => Object.keys(obj).length >= 5);
}
const arr = [
    { a: 1, b: 2, c: 3, d: 4, e: 5 },
    { a: 1, b: 2, c: 3 },
    { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 },
    { a: 1, b: 2, c: 3, d: 4 },
    { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 }
];
console.log(FiveKeys(arr));

//2
async function getData(url){
    const response = await fetch(url);
    const data = await response.json();
    return  data;
}

//2.1 return an array objects from the shape of: [{ fullName, id }]
async function objData() {
    const data = await getData('https://randomuser.me/api/?results=10');
    console.log('\nEx2.1\n')
    return await data.results.map(user => {
        const fullName = `${user.name.first} ${user.name.last}`;
        const id = user.id.value;
        return { fullName, id };
    });
}
objData().then(result => console.log(result)); 

/*
2.2) filter all the users with complex passwords (passwords that is at least 6 chars 
and contain special chars)
*/

async function complexPasswords(){
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;;
    const data = await getData('https://randomuser.me/api/?results=500');
    console.log('\nEx2.2 \n')
    return await data.results.filter(user => user.login.password.length > 6 && specialChars.test(user.login.password));
}
complexPasswords().then(result => console.log(result)); 

/*
get the youngest people from the data.
*/
async function youngestPeople(){
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();
    
    // sort array by age
    data.results.sort((a, b) => {
        const ageA = a.dob.age;
        const ageB = b.dob.age;
        return ageA - ageB;
    });
    console.log('\nEx2.3 \n')
    return data.results.filter((person,index) => index < 3);
}
youngestPeople().then(result => console.log(result));

