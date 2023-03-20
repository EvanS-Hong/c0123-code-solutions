import express from './node_modules/express/index.js';

const app = express();

app.use((req, res) => {
  console.log(req.method);
  res.send('Hello World');
});

app.listen((8080), () => {
  console.log('The server is listening(Port 8080)');
});
