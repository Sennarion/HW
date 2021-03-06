import Person from './person';

export default class Veterinarian extends Person {
    #diagnosis = {
        ill: 'ill', 
        healthy: 'healthy'
    }

    constructor(firstName, lastName, hospital) {
        super(firstName, lastName);
        this.hospital = hospital;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName} (${this.hospital.name})`;
    }

    _setDiagnosis(animal) {
        if (animal.weight > 20000) {
            return {
                diagnosis: this.#diagnosis.ill,
                info: 'Overweight',
            }
        } 
        else if (animal.food == 'Korm') {
            return {
                diagnosis: this.#diagnosis.ill,
                info: `Change food. Now ${animal.nickname} eats ${animal.changeFood('Meal with rice')}`,
            }
        } else if (!animal.isHomless) {
            return {
                diagnosis: this.#diagnosis.healthy,
                info: `Сhange home. Now ${this.hospital.findHome(animal.nickname).name} have a new friend - ${animal.nickname}`,
            }
        } else {
            return {
            diagnosis: this.#diagnosis.healthy,
            info: `All OK`,
        }}
    }

    treatAnimal(animal) {
        let diagnosis = this._setDiagnosis(animal);
        if (diagnosis.diagnosis !== 'healthy') {
            this.hospital.addAnimal(animal);
        }
        return {
            info: `${animal.nickname} from ${animal.location}`,
            fullDiagnos: `${diagnosis.diagnosis}: ${diagnosis.info}`,
        }
    }
}