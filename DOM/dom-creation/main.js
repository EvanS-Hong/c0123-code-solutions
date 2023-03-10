/* exported pokedex */

var pokedex = [
  {
    number: '001',
    name: 'Bulbasaur',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png',
  },
  {
    number: '004',
    name: 'Charmander',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png',
  },
  {
    number: '007',
    name: 'Squirtle',
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png',
  },
  {
    number: '002',
    name: 'Ivysaur',
    description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png',
  },
  {
    number: '005',
    name: 'Charmeleon',
    description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png',
  },
  {
    number: '008',
    name: 'Wartortle',
    description: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png',
  },
  {
    number: '003',
    name: 'Venusaur',
    description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png',
  },
  {
    number: '006',
    name: 'Charizard',
    description: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png',
  },
  {
    number: '009',
    name: 'Blastoise',
    description: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png',
  },
];


function renderPokemon(pokemon) {

  var div1 = document.createElement('div');
  div1.setAttribute('class', 'column-third');

  var div2 = document.createElement('div');
  div2.setAttribute('class', 'pokemon-card');
  div1.appendChild(div2);

  var img = document.createElement('img');
  div2.appendChild(img);
  img.setAttribute('src', pokemon.imageUrl);

  var div3 = document.createElement('div');
  div3.setAttribute('class', 'pokmon-card-text');
  div2.appendChild(div3);

  var h2 = document.createElement('h2');
  var h2Text = document.createTextNode(pokemon.name);
  h2.appendChild(h2Text);
  div2.appendChild(h2);

  var h3 = document.createElement('h3');
  var h3Text = document.createTextNode('#' + pokemon.number);

  h3.appendChild(h3Text);
  div2.appendChild(h3);

  var p = document.createElement('p');
  var pText = document.createTextNode(pokemon.description);
  p.appendChild(pText);
  div2.appendChild(p);

  return div1;
}

var div0 = document.querySelector('.row');
for (i=0; i < pokedex.length; i++) {
  console.log('div0', div0);
  var newElement = renderPokemon(pokedex[i]);
  // console.log('newElement', newElement);
  div0.appendChild(newElement);
}
