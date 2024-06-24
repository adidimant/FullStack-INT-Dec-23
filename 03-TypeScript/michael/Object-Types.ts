// Working With Object Types
function printName(person: {first: string, last: string}) {
     console.log(`${person.first}, ${person.last}.`)
}

printName({first: "saf", last: "afsfsa"});

//More Object Types

let coords:{x: number, y:number} = {x:42,y:12};


function randomCoords(): { x:number, y:number} {
  return {x:Math.random( ), y: Math.random( ) };
}

// Excess Properties

