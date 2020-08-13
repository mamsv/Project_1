"use strict";

const box = document.getElementById('box');
console.log(box);//выбрать 1 элемент по id

const btns = document.getElementsByTagName('button');
console.log(btns);//выбрать ВСЕ элементы по тэгу

const btn = document.getElementsByTagName('button')[1];
console.log(btn);//выбрать первый элемент из коллекции по тэгу
//или (результат тот же)
const btn1 = document.getElementsByTagName('button');
console.log(btn1[1]);

const  circles = document.getElementsByClassName('circle');
console.log(circles);//выбрать ВСЕ элементы по имени класса

const hearts = document.querySelectorAll('.heart');
console.log(hearts);//выбрать ВСЕ элементы по СЕЛЕКТОРУ .heart
hearts.forEach(item => {
  console.log(item);   
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);
//ИЛИ по тэгу:
const oneHeart1 = document.querySelector('div');
console.log(oneHeart1);

