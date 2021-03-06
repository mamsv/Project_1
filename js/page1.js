"use strict";
///Работа с элементами (изменение их свойств)
//
//
//
const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

      //oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue';      
// box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`;
let num = 500;
box.style.cssText = `background-color: blue; width: ${num}px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';


// for (let i = 0; i < hearts.length; i++){
//   hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
  item.style.backgroundColor ='blue'; 
});

///Создание элементов
//
//
//
const div = document.createElement('div');
//const text = document.createTextNode('Тут был я');

div.classList.add('black');

//добавить элемент на страницу
//
//
//
//document.body.append(div);//BODY - КАК РОДИТЕЛЬ ДЛЯ НОВОГО тэга

wrapper.append(div);
// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

//Занесение данных ВНУТРЬ элемента (тэга)
//
//
//
 div.innerHTML = "<h1>Hello World</h1>";
// div.textContent = "Hello";//ТОЛЬКО текст, не тэги

//div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>');
//div.insertAdjacentHTML("afterbegin", '<h2>Hello</h2>');
//div.insertAdjacentHTML("beforeend", '<h2>Hello</h2>');
div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');