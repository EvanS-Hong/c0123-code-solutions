async function logJSONData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonData = await response.json();
    console.log(jsonData);
    response.ok();
  } catch (error) {

    console.log(error);
  }
}
logJSONData();
