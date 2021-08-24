import Person from './person';
import Animal from './animal';
import Hospital from './hospital';
import Dog from './dog';
import Cat from './cat';
import Veterinarian from './veterinarian';


let newPerson = new Person(`Serhii`, `Reznichenko`);
console.log(newPerson.getFullName());

let newAnimal = new Animal(`Smoky`, `Whiskas`, `Kharkiv`)
newAnimal.changeFood(`Friskies`);
console.log(newAnimal.food);

let newHospital = new Hospital(`Veterinarium`);
newHospital.addAnimal('Smoky', 'Whiskas', 'Kharkiv');
newHospital.addAnimal('Pushok', 'Friskies', 'Kiev');
newHospital.addPeople('Serhii', 'Reznichenko');
newHospital.addPeople('Lisa', 'Holubenko');
console.log(newHospital.findHome('Pushok'))

console.log(newHospital.getAnimals());
console.log(newHospital.getFindingPetsPeople());


let newTest = new Dog('Smok', 'Friskies', 'New York', 700);
console.log(newTest);










let persons = ['Marilyn Monroe', 'Mother Teresa', 'Leonardo da Vinci', 'George Orwell', 'Michael Jordon', 'Ronald Reagan'];
nickname, food, location, weight
let dogs = [
    { 
        nickname: 'April', 
        food: 'Cesar', 
        location: 'Kharkiv', 
        weight: 6500
    },
    { 
        nickname: 'Chico', 
        food: 'Pedigree', 
        location: 'Kyiv', 
        weight: 9400
    },
    { 
        nickname: 'Larry', 
        food: 'Bakers', 
        location: 'Lviv', 
        weight: 3600
    }
]


let cats = [
    { 
        nickname: 'Smoky', 
        food: 'Whiskas', 
        location: 'Kharkiv', 
    },
    { 
        nickname: 'Tango', 
        food: 'Friskies', 
        location: 'Odessa', 
        isHomless: false,
    },
    { 
        nickname: 'Leo ', 
        food: 'Felix', 
        location: 'Lutsk', 
    }
]