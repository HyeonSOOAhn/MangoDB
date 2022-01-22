export default class getFruitError extends Error{

    name;

    constructor(name){
        this.name = name;
    }

}

console.log(getFruitError);