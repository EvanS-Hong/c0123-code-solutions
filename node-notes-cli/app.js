import { writeFile } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';

if (process.argv[2] === "read") {
  try {
    const jsonData =  JSON.parse(await readFile("./data.json"));
    for (let keys in jsonData.notes) {
      console.log(`${keys}: ${jsonData.notes[keys]}`)
    }
  } catch (err) {
    console.log(err);
  }
} else if (process.argv[2] === "create") {
  try {
    const jsonData = JSON.parse(await readFile("./data.json"));
    const jsonID = JSON.stringify(jsonData.nextId, null, 2);
    let noteArray = Object.entries(jsonData.notes).map(([k, v]) => ({ [k]: v }));
    noteArray.push({[jsonID]: `${process.argv[3]}`});
    let newObj = {}
    for (let x = 0; x < noteArray.length; x++) {
      Object.assign(newObj, noteArray[x]);
    }
    jsonData.notes = newObj
    jsonData.nextId = jsonData.nextId + 1;
    await writeFile("./data.json", JSON.stringify(jsonData, null, 2), 'utf8');
    } catch (err) {
    console.log(err);
  }
} else if (process.argv[2] === "update") {
  const jsonData = JSON.parse(await readFile("./data.json"));
  let currentNumber = process.argv[3];
  for (let keys in jsonData.notes) {
    if (currentNumber === keys) {
      jsonData.notes[currentNumber] = process.argv[4];
      (jsonData.notes[currentNumber]);
      await writeFile("./data.json", JSON.stringify(jsonData, null, 2), 'utf8');
    }
  }
} else if (process.argv[2] === "delete") {
  const jsonData = JSON.parse(await readFile("./data.json"));
  let currentNumber = process.argv[3];
  for (let keys in jsonData.notes) {
    if (currentNumber === keys) {
      delete jsonData.notes[currentNumber]
      await writeFile("./data.json", JSON.stringify(jsonData, null, 2), 'utf8');
    }
  }
}
