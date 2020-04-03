'use strict';

let films = [{
    name: 'Матрица',
    genre: 'action',
    year: 1999
},
{
    name: 'Побег из Шоушенка',
    genre: 'drama',
    year: 	1994
},
{
    name: 'Мстители 4: Финал',
    genre: 'action',
    year: 2019
},
{
    name: 'Форрест Гамп',
    genre: 'drama',
    year: 1994
},
{
    name: 'Остров проклятых',
    genre: 'detective',
    year: 	2009
},
{
    name: 'Большой куш',
    genre: 'comedy',
    year: 	2000
},
{
    name: 'Помни',
    genre: 'detective',
    year: 	2000
}];
films[Symbol.iterator] = function() {
    let filmsValue = Object.values(films);
    let index = 0;
    return {
        next() {
            if(index === filmsValue.length) {
                return {done: true};
            }
            return {
                done: false,
                value: filmsValue[index++].name
            }
        }
    }
};

const filmsObj = films.reduce(function(prev, film) {
    const mainGenre = film.genre;
    if(prev[mainGenre]) {
        prev[mainGenre].push({name:film.name, year:film.year});
    } else {
        prev[mainGenre] = [{name:film.name, year:film.year}];
    }
    return prev;
}, {});

filmsObj[Symbol.iterator] = function() {
    let filmsObjValue = Object.values(filmsObj);
    let mainIndex = 0;
    let index = 0;
    return {
        next() {
            if(index === filmsObjValue[mainIndex].length) {
                mainIndex++ ;
                index = 0;
            }
            if(mainIndex === filmsObjValue.length) {
                return {done: true};
            }
            return {
                done: false,
                value: filmsObjValue[mainIndex][index++].name
            }
        }
    }
};

filmsObj.action.push({name:'Начало', year:2010});
filmsObj.detective.push({name:'Тело', year:2012});


for(const film of filmsObj) {
    console.log(film);
};
