import express from './node_modules/express/index.js';

const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
}

app.get('/api/grades' , (req, res) => {
  let newObj = {};
  for (let key in grades) {
     newObj[key] = (grades[key]);
  }
   res.send(newObj);
}

);
app.listen((8080), () => {
  console.log('The server is listening(Port 8080)');
});
