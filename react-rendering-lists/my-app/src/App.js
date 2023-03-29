import List from "./PokemonList";

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function App() {
  return (
    <div >
      <List pokedex={pokedex} />
    </div>
  );
}

export default App;
