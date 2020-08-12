"use strict";

const personalMovieDB={
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?","");
      
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count= +prompt("Сколько фильмов вы уже посмотрели?","");     
        }//while
      },//start
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов",""),
                  b = prompt("На сколько оцените его?","");
            
            if (a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a]=b; 
                console.log('done');    
            } else {
                console.log('error');
                i--;
            }  
        }
        
    },//rememberMyFilms
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
         } else if (personalMovieDB.count >= 10 && personalMovieDB.count<30) {
             console.log('Вы классический зритель'); 
         } else if (personalMovieDB.count >= 30) {
             console.log('Вы киноман'); 
         } else {
             console.log('Ошибка'); 
         }
    },//detectPersonalLevel
    showMyDB: (hidden) => {
        if (!hidden){
         console.log(personalMovieDB);
        }
       
    },//showMyDB
    toggleVisibleMyDB: function (){
      if (personalMovieDB.privat){
        personalMovieDB.privat = false; 
      } else {
         personalMovieDB.privat = true; 
      }
     return(true);
    },//toggleVisibleMyDB
    writeYourGenres: () => {
        for (let i = 0; i < 3; i++ ){
         let genre = prompt(`Ваш любимый жанр под номером ${i+1}`,"");
          if (genre === '' || genre == null){
            console.log ('Некорректные данные');  
            i--;  
          }  else {
            personalMovieDB.genres[i] = genre;  
          }
        }//for
       personalMovieDB.genres.forEach( (item, index) => {console.log(`Любимый жанр #${index+1} - это ${item}`);});
      }//writeYourGenres

   };//personalMovieDB
