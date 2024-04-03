//  Write a function that receives an array of objects, and filters all the objects that has at least 5 keys

function filterObj(array) {
  return array.filter(element => Object.keys(element).length >= 5)
};




let arrayOfObjects = [
  { name: 'Alice', age: 28, job: 'Engineer', city: 'Seattle' },
  { brand: 'Apple', product: 'iPhone', model: '12', color: 'Black', price: 999 },
  { title: 'The Alchemist', author: 'Paulo Coelho', year: 1988, genre: 'Adventure' },
  { make: 'Toyota', model: 'Corolla', year: 2020, color: 'Red', mileage: 15000 },
  { restaurant: 'Chez Panisse', cuisine: 'French', rating: '5 Stars', location: 'Berkeley' },
  { game: 'The Witcher 3', platform: 'PC', genre: 'RPG', releaseYear: 2015 },
  { language: 'Spanish', country: 'Spain', difficulty: 'Intermediate', script: 'Latin' },
  { coffee: 'Espresso', origin: 'Ethiopia', roast: 'Dark', servings: 30 },
  { artist: 'Van Gogh', masterpiece: 'Starry Night', year: 1889, style: 'Post-Impressionism' },
  { planet: 'Mars', diameter: '6779 km', gravity: '3.721 m/s²', moons: ['Phobos', 'Deimos'] }
];

const filterArray = filterObj(arrayOfObjects);
console.log(filterArray);


// 2) consider the following example:
//const response = await fetch("https://randomuser.me/api/?results=10");
//const data = await response.json();
//2.1) return an array objects from the shape of: [{ fullName, id }]
//2.2) filter all the users with complex passwords (passwords that is at least 6 chars and contain special chars)
//2.3) get the youngest people from the data.


// const response = await fetch("https://randomuser.me/api/?results=5");
// const data = await response.json();

const url = "https://randomuser.me/api/?results=20";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();


    data.results.forEach(user => {
      const fullName = `${user.name.first} ${user.name.last}`;
      const email = user.email;
      const userAge = user.dob.age
      console.log(`${fullName}, ${email}, ${userAge}`);
    });
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchData();

const youngestUser = url.reduse((ele, curruser) => {
  return (ele.dob.age < curruser.dob.age) ? youngest : curruser;

});

console.log(youngestUser);
