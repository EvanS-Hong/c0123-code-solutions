import express from './node_modules/express/index.js';

const app = express();

let nextId = 1;
const grades = {}

app.get('/api/grades', (req, res) => {
  const newArray = [];
  newArray.push(grades);
  res.json(newArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  res.send()
}
);


app.listen((8080), () => {
  console.log('The server is listening to port 8080');
});
