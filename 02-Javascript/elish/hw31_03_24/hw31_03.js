//1
//Write a function that receives an array of objects, and filters all the objects that has at least 5 keys

let array=[
    {firstName:'elish', lastName: 'gado', id:56789088889, age:21, average:90},
    {firstName:'elish', lastName: 'gado', id:56789088889, average:90},
    {firstName:'elish', lastName: 'gado', id:56789088889, age:21},
    {firstName:'elish', id:56789088889, age:21, average:90},
    {firstName:'elish', lastName: 'gado', age:21, average:90},
];

function check(array) {
    return array.filter((obj)=>Object.keys(obj).length>=5);
};

console.log('The function that has at least 5 keys is: '+ check(array));

//2

//א
//return an array objects from the shape of: [{ fullName, id }]

async function fetchUsers() {
    try{
        const response = await fetch("https://randomuser.me/api/?results=10");
        const data = await response.json();

        const users=data.results.map((user, index)=>({
            fullName: `${user.name.first} ${user.name.last}`,
            id: index + 1
        }));
        return users;
    }
    catch  (error){
        console.error("Error fetching users:", error);
        return [];
    }
};

//ב
//filter all the users with complex passwords (passwords that is at least 6 chars and contain special chars)

async function fetchUsersWithComplexPasswords(){
    try{
        const response = await fetch("https://randomuser.me/api/?results=10");
        const data = await response.json();

        const users=data.results.map((user,index)=>({
            fullName:`${user.name.first} ${user.name.last}`,
            id: index+1,
            password: user.login.password
        }));

        const usersWithComplexPasswords =users.filter(user=>{
            const password=user.password;
            return password.length>=6 && /[!@#$%^&*(),.?":{}|<>]/ .test(password);
        });
        return usersWithComplexPasswords;
    }
    catch (error){
        console.error("error fetching users:",error);
        return[];
    }
};

//ג
// get the youngest people from the data.

async function fetchYoungestPeople(){
    try{
        const response = await fetch("https://randomuser.me/api/?results=10");
        const data = await response.json();

        const users=data.results.map((user, index)=>({
            fullName:`${user.name.first} ${user.name.last}`,
            id: index+1,
            age: user.dob.age
        }));

        const minAge=Math.min(...users.map(user=>user.age));
        const youngestPeople=users.filter(user=>user.age==minAge);

        return youngestPeople;
    }
    catch (error){
        console.error("error fetching users:",error);
        return[];
    }
};


