import { writeFile } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';


async function newJsonData() {
  return JSON.parse(await readFile("./data.json"));

}
async function creation(data) {
  return await writeFile("./data.json", JSON.stringify(data, null, 2), 'utf8');
}

if (process.argv[2] === "read") {
  try {
    const jsonData = await newJsonData();
    for (let keys in jsonData.notes) {
      console.log(`${keys}: ${jsonData.notes[keys]}`)
    }
  } catch (err) {
    console.log(err);
  }
} else if (process.argv[2] === "create") {
    try {
      const jsonData = await newJsonData();
      jsonData.notes[jsonData.nextId] = process.argv[3];
      jsonData.nextId = jsonData.nextId + 1;
      const newFile = await creation(jsonData);
    } catch (err) {
      console.log(err);
    }
} else if (process.argv[2] === "update") {
  try {
    const jsonData = await newJsonData();
    let currentNumber = process.argv[3];
    jsonData.notes[currentNumber] = process.argv[4];
    await creation(jsonData);
  } catch (err) {
   console.log(err);
  }
} else if (process.argv[2] === "delete") {
  try {
    const jsonData = await newJsonData();
    let currentNumber = process.argv[3];
    delete jsonData.notes[currentNumber];
    await creation(jsonData)
  } catch (err) {
  console.log(err);
  }
}
