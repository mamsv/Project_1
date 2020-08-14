"use strict";

  const btns = document.querySelectorAll('button'),
       overlay = document.querySelector('.overlay'),
       telo = document.querySelector('body');

//   btn.onclick = function (){
//       alert('Click');
//   };

//   btn.onclick = function (){
//     alert('Second click');
// };


/////////////////////////////////////////////
let i = 0;
const deleteElement = (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.type);
    // i++;
    // if (i == 1){
    //     btn.removeEventListener('click', deleteElement);      
    // }
    //event.target.remove();
};



// btn.addEventListener('click',(event) => {
//   event.target.remove();
// });

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);
//telo.addEventListener('click', deleteElement);


const link = document.querySelector('a');

link.addEventListener('click', (event) => {
 event.preventDefault();
 console.log(event.target);
});

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true}); 
});

