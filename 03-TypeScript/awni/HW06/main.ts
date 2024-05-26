// =======================> HW06/05 <===========================  

enum TrafficLight {
    RED = 'RED',
    ORANGE = 'ORANGE',
    GREEN = 'GREEN',
    RED_ORANGE = 'RED-ORANGE'
}

let currentLight: TrafficLight = TrafficLight.RED;
const trafficLightElement = document.getElementById('traffic-light') as HTMLDivElement;

function changeLight() {
    switch (currentLight) {
        case TrafficLight.RED:
            currentLight = TrafficLight.RED_ORANGE;
            trafficLightElement.style.backgroundColor = 'darkorange';
            break;
        case TrafficLight.RED_ORANGE:
            currentLight = TrafficLight.GREEN;
            trafficLightElement.style.backgroundColor = 'green';
            break;
        case TrafficLight.GREEN:
            currentLight = TrafficLight.ORANGE;
            trafficLightElement.style.backgroundColor = 'orange';
            break;
        case TrafficLight.ORANGE:
            currentLight = TrafficLight.RED;
            trafficLightElement.style.backgroundColor = 'red';
            break;
    }
}

setInterval(changeLight, 5000);
changeLight();

// ///////////////////////////////////////////////////////////////////////////////




//EXcamples =====>



interface PersonInterface {
    id: number,
    name: string,
    register(): string
}


// main class

class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    register(): string {
        return `${this.name} is now registered`
    }
}

//sub class

class Employee extends Person {
    postion: string
    constructor(id: number, name: string, postion: string) {
        super(id, name)
        this.postion = postion;
    }
}

const person1 = new Person(1, "Awni");
const emp = new Employee(10, "awni", "web Developer")


console.log(person1.register());
console.log(emp.id);
console.log(emp.name);
console.log(emp.register());
console.log(emp.postion);


////////////////////////////////////////////////////////////////////////////////////////

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]); // only Numbers

let strArray = getArray<string>(["awni", "ali", "alla"]); // only String



// =======================> HW15/05 <===========================  

