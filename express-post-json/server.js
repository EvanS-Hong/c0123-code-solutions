import express from './node_modules/express/index.js';

const app = express();

let nextId = 1;
const grades = {}

app.get('/api/grades', (req, res) => {
  const newArray = [];
  for (let keys in grades) {
    newArray.push(grades[keys]);
  }
  res.json(newArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const newObj = req.body;
  newObj.nextId = nextId++
  grades[nextId] = newObj;
  res.status(201).json(newObj);
}
);


app.listen((8080), () => {
  console.log('The server is listening to port 8080');
});
