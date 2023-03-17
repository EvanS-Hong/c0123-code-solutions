import { writeFile } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';


async function newJsonData() {
  return JSON.parse(await readFile("./data.json"));

}
async function creation() {
  return await writeFile("./data.json", JSON.stringify(jsonData, null, 2), 'utf8');
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
      let noteArray = Object.entries(jsonData.notes).map(([k, v]) => ({ [k]: v }));
      noteArray.push({[jsonData.nextId]: `${process.argv[3]}`});
      let newObj = {}
      for (let x = 0; x < noteArray.length; x++) {
        Object.assign(newObj, noteArray[x]);
      }
      jsonData.notes = newObj
      jsonData.nextId = jsonData.nextId + 1;
      const newFile = await creation();
      console.log(newFile);
    } catch (err) {
      console.log(err);
    }
} else if (process.argv[2] === "update") {
  try {
  const jsonData = await newJsonData();
  let currentNumber = process.argv[3];
    jsonData.notes[currentNumber] = process.argv[4];
    const newFile = await creation();
  } catch (err) {
   console.log(err);
  }
} else if (process.argv[2] === "delete") {
  try {
  const jsonData = await newJsonData();
  let currentNumber = process.argv[3];
    delete jsonData.notes[currentNumber]
  } catch (err) {
  console.log(err);
  }
}
