export class Fruit{

    id;
    name;
    origins;

    constructor(id,name,origins){
        this.id = id;
        this.name = name;
        this.origins = origins;
    }

    get id() {
        return this.id;
    }
    get name() {
        return this.name;
    }
    get origins() {
        return this.origins;
    }
}

