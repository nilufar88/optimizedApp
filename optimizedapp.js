'use strict'

const numberOfFilms = +prompt('How many movies have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('What is your last watched film?', '');
          b = prompt('How would you evaluate it?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

if (personalMovieDB.count < 10) {
    console.log('Too less');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('The classic watcher');
} else if (personalMovieDB.count >= 30) {
    console.log('The fan');
} else {
    console.log('There is an error');
}

    personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);