"use strict";
//console.log(4+"4");
//console.log(4 + +"-4");

let incr = 10,
    decr = 10;

//let a = incr++;
//let b = decr--;

let a = ++incr;
let b = --decr;


console.log(a);
console.log(b);
console.log(2*4 === 8);
console.log(2 + 2 * 2 == '6');
const isChecked = false,
      isClose = false;
      
console.log(isChecked || !isClose ? "правда" : "Ложь");    