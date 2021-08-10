// /* TASK 1 ---------------------------------------------------------- */

const student = {
    firstName: 'Hannibal',
    lastName: 'Lecter',
    averageScore: 4.8,
    isGrantHolder() {
        return this.averageScore >= 4;
    },
    getFullName() {
        return (`${this.firstName} ${this.lastName}`); 
    }
}

function Aspirant(dissertationTopic, isDissertationComplete) {
    this.dissertationTopic = dissertationTopic;
    this.isDissertationComplete = isDissertationComplete;
    this.isGrantHolder = function() {
        return this.averageScore >= 4.5 && this.isDissertationComplete;
    }
}

Aspirant.prototype = student;
let aspirant = new Aspirant('Test', false);
console.log(student.isGrantHolder());
console.log(aspirant.isGrantHolder());

for (let key in aspirant) {
    console.log(`Method/Property - ${key}`);
}


// /* TASK 2 ---------------------------------------------------------- */

class Plane {
    constructor(name) {
        this.name = name;
        this.isFlying = false;
    }
    takeOff() {
        return this.isFlying = true;
    }
    land() {
        return this.isFlying = false;
    }
}

let airport = {
    planes: [],
    getFlyingPlanes() {
        let flyingPlanes = this.planes.filter(el => el.isFlying)
        return flyingPlanes.length;
    }
}

let plane1 = new Plane('Monster');
plane1.takeOff();
let plane2 = new Plane('Killer');
let plane3 = new Plane('Godzilla');
plane3.takeOff();
let plane4 = new Plane('Hulk');
let plane5 = new Plane('Storm');
plane5.takeOff();
airport.planes.push(plane1, plane2, plane3, plane4, plane5);

console.log(airport.getFlyingPlanes());