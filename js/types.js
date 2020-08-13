"use string";
// let a = prompt("Enter","");//null
// let b;//undefined

// console.log(a);
// console.log(b);

// 1 to string

// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// console.log(typeof(5 + ''));
// console.log(null + '');

// const num = 5;
// console.log("https://va.com/catalog/" + num);

//2  to number

// console.log(typeof(Number('4')));
// console.log(typeof(+'5'));

// console.log(typeof(parseInt("15px")));

// let a = +prompt("Hello","");
// console.log(a);
// console.log(typeof(a));

//3 to boolean

//0, '', null, undefined, NaN - false

let switcher = null;

if (switcher){
  console.log('Working');
}

switcher = 1;

if (switcher){
    console.log('Working new');
}

console.log(typeof(Boolean('4')));
console.log(Boolean('4'));

console.log(typeof(!!'444'));
console.log(!!'4');

console.log(!!undefined);