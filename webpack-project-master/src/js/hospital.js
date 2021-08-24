import Person from './person';
import Animal from './animal';
import Dog from './dog';
import Cat from './cat';

export default class Hospital {
    constructor(name, illAnimals = [], findingPetsPeople = []) {
        this.name = name;
        this.illAnimals = illAnimals;
        this.findingPetsPeople = findingPetsPeople;
    }

    // #illAnimals = [];
    // #findingPetsPeople = [];

    getAnimals() {
        return this.illAnimals;
    }

    getFindingPetsPeople() {
        return this.findingPetsPeople;
    }

    addAnimal(nickname, food, location) {
        this.illAnimals.push(new Animal(nickname, food, location))
    }

    addPeople(firstName, lastName) {
        this.findingPetsPeople.push(new Person(firstName, lastName))
    }

    findHome(nickname) {
        let animalNames = [];
        this.illAnimals.forEach(element => {
            animalNames.push(element.nickname);
        });
        if (animalNames.includes(nickname)) {
            return {
                status: `restricted`,
                message: `We need to heal ${nickname} firstly`,
            }
        } else {
            let randomPerson = Math.floor(Math.random() * this.findingPetsPeople.length);
            let deletedName = this.findingPetsPeople[randomPerson].firstName;
            let deletedLastname = this.findingPetsPeople[randomPerson].lastName;
            this.findingPetsPeople.splice(randomPerson, 1);
            return {
                status: `success`,
                name: `${deletedName} ${deletedLastname}`,
            }
        }
    }
}