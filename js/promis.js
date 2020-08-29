"use strict";

const prom = new Promise(resolve => {
  setTimeout(() => {
      console.log('first');
      resolve();
  }, 3000);
});

prom.then(() => {
    console.log('second');
});