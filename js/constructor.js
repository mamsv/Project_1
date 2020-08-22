"use strict";

function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
     console.log(`Hello ${this.name}`);   
    };
}

User.prototype.exit = function(){
 console.log(`User ${this.name} ушел`);
};




const ivan = new User('Ivan', 28);
ivan.exit();
const alex = new User('Alex', 20);
alex.exit();
// console.log(ivan);
// ivan.hello();
// console.log(alex);
// alex.hello();
