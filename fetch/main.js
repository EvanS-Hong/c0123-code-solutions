async function logJSONData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/258');
    const jsonData = await response.json();
    console.log(jsonData);
    console.log(response.ok);
    if (!response.ok) {
      throw new Error(`error ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }
}
logJSONData();
