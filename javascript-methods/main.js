var a = 5;
var b = 9;
var c = 13;

var maximumValue = Math.max(a,b,c);
console.log(maximumValue);

var heroes = ['All Might', 'Iron man', 'Lucina', 'Cordellia'];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log(randomIndex);

var randomHero = heroes[randomIndex];

console.log(randomHero);

var library = [{
    title: 'Percy Jackson',
    author: 'Rick Riordan',
  },
  {
    title: 'Javascript & Jquery',
    author: 'Jon Duckett',
  },
  {
    title: 'random',
    author: 'person',
  }];

var lastBook = library.pop()
console.log(lastBook);

var firstBook = library.shift();
console.log(firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
}

library.push(js);

library.unshift(css);

library.splice(1,1);

console.log(library);

var fullName = 'Evan Hong';
var firstAndLastName = fullName.split(' ');

console.log(firstAndLastName);

firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase()

console.log(sayMyName);
