async function logJSONData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/258');
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error);
  }
}
logJSONData();
