export default function pokemonList({pokedex}) {

  const listItems = pokedex.map(pokedex =>
    <li key={pokedex.number}>
      <p> {pokedex.name} </p>
    </li>
  );

return (
  <ul>{listItems}</ul>
  )
}
