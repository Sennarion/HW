import Person from './person';
import Hospital from './hospital';
import Dog from './dog';
import Cat from './cat';
import Veterinarian from './veterinarian';

function main() {
    const newHospital = new Hospital(`VetExpert`);
    const newVeterinarian = new Veterinarian(`Steve`, `Irwin`, newHospital);

    newHospital.addPeople(new Person('Marilyn', 'Monroe'));
    newHospital.addPeople(new Person('Mother', 'Teresa'));
    newHospital.addPeople(new Person('Leonardo', 'daVinci'));
    newHospital.addPeople(new Person('George', 'Orwell'));
    newHospital.addPeople(new Person('Michael', 'Jordon'));
    newHospital.addPeople(new Person('Ronald', 'Reagan'));

    let dog1 = new Dog('April', 'Cesar', 'Kharkiv', 9500);
    let dog2 = new Dog('Chico', 'Pedigree', 'Kyiv', 21000);
    let dog3 = new Dog('Larry', 'Korm', 'Lviv', 3600);
    let cat1 = new Cat('Smoky', 'Whiskas', 'Kharkiv');
    let cat2 = new Cat('Tango', 'Korm', 'Odessa', false);
    let cat3 = new Cat('Leo', 'Felix', 'Lutsk', false);

    

    function goToVeterinarian(animal) {
        console.group(newVeterinarian.getFullName());
        let conclusion = newVeterinarian.treatAnimal(animal);
        console.log(conclusion.info);
        console.log(conclusion.fullDiagnos);
        console.groupEnd();
    }

    goToVeterinarian(cat1);
    goToVeterinarian(cat2);
    goToVeterinarian(cat3);
    goToVeterinarian(dog1);
    goToVeterinarian(dog2);
    goToVeterinarian(dog3);

    let illAnimalNicknames = newHospital.getAnimals().map(el => el.nickname)
    console.log('Animals in the hospital: ' + illAnimalNicknames);

    console.log(newHospital.getFindingPetsPeople());
    console.log(newHospital.getAnimals());
}

main();

