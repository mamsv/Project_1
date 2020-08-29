"use strict";

const persone ={
    name: 'Alex',
    tel: '+744444444',
    parents:{
        mom: 'Olga',
        dad: 'Mike'
    }
};

//console.log(JSON.stringify(persone));//to JSON
//console.log(JSON.parse(JSON.stringify(persone)));//to Object

// let clone = persone;
// clone.parents.mom = 'Ann';
// console.log(clone);
// console.log(persone);

let clone1 = JSON.parse(JSON.stringify(persone));
clone1.parents.mom = 'Ann';
console.log(clone1);
console.log(persone);

