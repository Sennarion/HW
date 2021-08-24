import Person from './person';

export default class Veterinarian extends Person{
    constructor(firstName, lastName, hospital, diagnosis = {
        ill: 'ill', 
        healthy: 'healthy'
    }) {
        super(firstName, lastName);
        this.hospital = hospital;
        this.diagnosis = diagnosis;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName} (${this.hospital})`;
    }

    setDiagnosis() {
        return {
            diagnosis: 'healthy or ill diagnosis from #diagnosis property',
            info: 'some message to user',
        };
    }

    treatAnimal() {
        
    }
}