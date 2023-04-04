import Carousel from './Carousel';

const pokedex = [
  { id: 1, name: 'pikachu', img: './images/025.png' },
  { id: 2, name: 'squirtle', img: './images/007.png' },
  { id: 3, name: 'charmander', img: './images/004.png' },
  { id: 4, name: 'bulbasaur', img: './images/001.png' },
  { id: 5, name: 'jigglypuff', img: './images/039.png' },
];

function App() {
  return (
    <div className="App">
      <Carousel pokedex={pokedex} />
    </div>
  );
}

export default App;
