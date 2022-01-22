import { getFruit, setProperties } from "../src/fruit.app";
import { Fruit } from "../src/model/fruit.model";


describe('fruit works', () => {

    let aFruit;
    let anotherFruit;
    let fruits;

    beforeEach(() => {
        aFruit = new Fruit(0, "apple", [
          { origin: "korea", price: 1000 },
          { origin: "japan", price: 2000 },
        ]);
        anotherFruit = new Fruit(1, "banana", [
          { origin: "korea", price: 1000 },
          { origin: "japan", price: 2000 },
        ]);

        fruits = [aFruit, anotherFruit];
    })

    test('if fruit find anything', () =>{
        expect(getFruit).toBeCalled;
    })

    test('if setProperties can be binding', () => {
        
        let result = setProperties(fruits);

        expect(result[0]).toBe(aFruit);
        expect(result[1]).toBe(anotherFruit);
    })




}) 

