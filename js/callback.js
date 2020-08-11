"use strict";

function first(callback){
    //do something
    setTimeout(function(){
       console.log(1);
       callback();
    },5000);
    
}

function second(){
   console.log(2); 
}

first(second);
//second();

// function learnJS(lang, callback){
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// learnJS('Java Script', function(){
//    console.log('Я прошел этот урок');
// });

// function learnJS(lang, callback){
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done(){
//     console.log('Я прошел этот урок');
// }

// learnJS('Java Script', done);
 
