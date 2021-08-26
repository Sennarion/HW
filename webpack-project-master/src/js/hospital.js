export default class Hospital {
    #illAnimals = [];
    #findingPetsPeople = [];

    constructor(name) {
        this.name = name;
    }

    getAnimals() {
        return this.#illAnimals;
    }

    getFindingPetsPeople() {
        return this.#findingPetsPeople;
    }

    addAnimal(animal) {
        this.#illAnimals.push(animal);
    }

    addPeople(person) {
        this.#findingPetsPeople.push(person);
    }

    findHome(nickname) {
        let animalNames = this.#illAnimals.map(el => el.nickname); 
        if (animalNames.includes(nickname)) {
            return {
                status: `restricted`,
                message: `We need to heal ${nickname} firstly`,
            }
        } else {
            let randomPerson = Math.floor(Math.random() * this.#findingPetsPeople.length);
            let removedPerson = this.#findingPetsPeople.splice(randomPerson, 1);
            return {
                status: `success`,
                name: `${removedPerson[0].firstName} ${removedPerson[0].lastName}`,
            }
        }
    }
}