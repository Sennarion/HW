// /* TASK 1 ---------------------------------------------------------- */

const student = {
    firstName: 'Hannibal',
    lastName: 'Lecter',
    averageScore: 4.8,
    isGrantHolder() {
        if (this.averageScore >= 4) {
            return true
        } else return false
    },
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}, ${this.isGrantHolder()}`); 
    }
}

student.getFullName();

function Aspirant() {
    this.dissertationTopic = 'Test';
    this.isDissertationComplete = false;
    this.isGrantHolder = function() {
        if (this.averageScore >= 4.5 && this.isDissertationComplete) {
            return true
        } else return false
    }
}

Aspirant.prototype = student;
let aspirant = new Aspirant();
console.log(student.isGrantHolder());
console.log(aspirant.isGrantHolder());

for (let key in aspirant) {
    console.log(`Method/Property - ${key}`);
}


// /* TASK 2 ---------------------------------------------------------- */

// class Plane {
//     constructor(name) {
//         this.name = name;
//         this.isFlying = false;
//         this.takeOff = function() {
//             return this.isFlying = true;
//         }
//         this.land = function() {
//             return this.isFlying = false;
//         }
//     }
// }

// let airport = {
//     planes: [],
//     getFlyingPlanes() {
//         let flyingPlanes = this.planes.filter(el => el.isFlying)
//         return flyingPlanes.length;
//     }
// }

// let plane1 = new Plane('Monster');
// plane1.takeOff();
// let plane2 = new Plane('Killer');
// let plane3 = new Plane('Godzilla');
// plane3.takeOff();
// let plane4 = new Plane('Hulk');
// let plane5 = new Plane('Storm');
// plane5.takeOff();
// airport.planes.push(plane1, plane2, plane3, plane4, plane5);

// console.log(airport.getFlyingPlanes());