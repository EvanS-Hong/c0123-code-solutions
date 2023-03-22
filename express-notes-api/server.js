import express from './node_modules/express/index.js';
import { writeFile } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';


async function newJsonData() {
  return JSON.parse(await readFile("./data.json"));
}

async function creation(data) {
  return await writeFile("./data.json", JSON.stringify(data, null, 2), 'utf8');
}

const app = express();

app.use(express.json());

app.get('/api/notes/', async (req, res) => {
  try {
    const jsonData = await newJsonData();
    const newArray = [];
    for (let keys in jsonData.notes) {
      newArray.push(jsonData.notes[keys])
    }
    res.status(200).json(newArray);
  } catch (err) {
    console.error('/api/notes error', err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const jsonData = await newJsonData();
    const id = +req.params.id;
    if (id <= 0) {
      res.status(400).json({ error: 'given id is not a positive integer' });
    } else if (jsonData.notes[id] === undefined) {
      res.status(400).json({ error: 'id not found in notes' });
    } else {
      res.status(200).json(jsonData.notes[id]);
    }
  } catch (err) {
    console.error('/api/notes error', err);
  }
});



app.post('/api/notes', async (req, res) => {
  try {
    if (req.body.content === undefined) {
      res.status(400).json({ error: 'Content property not found' });
    } else {
      const newObj = req.body;
      const jsonData = await newJsonData();
      const id = jsonData.nextId;
      newObj.id = id;
      jsonData.notes[id] = newObj;
      jsonData.nextId++;
      await creation(jsonData);
      res.status(201).json(newObj);
    }
  } catch (err) {
    console.error(err);
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const jsonData = await newJsonData();
    const id = +req.params.id;
    if (id <= 0) {
      res.status(400).json({ error: 'given id is not a positive integer' });
    } else if (jsonData.notes[id] === undefined) {
      res.status(400).json({ error: 'id not found in notes' });
    } else {
      delete jsonData.notes[id];
      await creation(jsonData);
      res.status(200).json({});
    }
  } catch (err) {
    console.error('/api/notes error', err);
  }
});


app.put('/api/notes/:id', async (req, res) => {
  try {
    const jsonData = await newJsonData();
    const id = +req.params.id;
    const newInfo = req.body
    newInfo.id = id;
    if (id <= 0) {
      res.status(400).json({ error: 'given id is not a positive integer' });
    } else if (jsonData.notes[id] === undefined) {
      res.status(400).json({ error: 'id not found in notes' });
    } else {
      jsonData.notes[id] = newInfo;
      console.log(jsonData);
      await creation(jsonData);
    }
  } catch (err) {
    console.error('/api/notes error', err);
  }
});


app.listen((8080), () => {
  console.log('The server is listening to port 8080');
});
