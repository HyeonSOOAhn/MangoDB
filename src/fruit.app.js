import fs from 'fs';
import { Fruit } from './model/fruit.model';

let fruits = new Array();
let results = new Object();

export function getFruit() {
        results = fs.readFileSync('./mango.db', 'utf-8');
        
        return results;
    }




export function setProperties(results) {
        let jsonResults = JSON.parse(results);

        jsonResults.data.forEach(e => {
        Fruit(e.id,e.name,e.origins);
            fruits.push(Fruit);
        });

        return fruits;
    }





