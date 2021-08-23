import Animal from './animal';

export default class Cat extends Animal {
    constructor(isHomless = true) {
        this.isHomless = isHomless;
    }
}