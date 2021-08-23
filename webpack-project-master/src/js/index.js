import { time, logSomeData } from './text-export';
import Student from './text-export-default';





import Person from './person';
import Animal from './animal';
import Hospital from './hospital';
import Dog from './dog';
import Cat from './cat';








// const obj = {
//     width: 10,
//     height: 10,
// };

// console.log(obj);
// logSomeData(time);

// let student1 = new Student('Bob', 'Marley', 99);
// let student2 = new Student('Alina', 'Malina', 18);

// console.log(student1.getName());
// console.log(student2.getName());








let newPerson = new Person(`Serhii`, `Reznichenko`);
console.log(newPerson.getFullName());

let newAnimal = new Animal(`Smoky`, `Whiskas`, `Kharkiv`)
newAnimal.changeFood(`Friskies`);
console.log(newAnimal.food);

let newHospital = new Hospital(`Veterinarium`);
newHospital.addAnimal('Smoky', 'Whiskas', 'Kharkiv');
newHospital.addAnimal('Smoky', 'Whiskas', 'Kharkiv');
newHospital.addPeople('Serhii', 'Reznichenko');
newHospital.addPeople('Lisa', 'Holubenko');
newHospital.findHome('Sms');

console.log(newHospital.getAnimals());
console.log(newHospital.getFindingPetsPeople());

// let newCat = new Cat(true);
// console.log(newCat.isHomless);

// let newDog = new Dog(`700`);
// console.log(newDog.name);
