import express from './node_modules/express/index.js';

var app = express();

app.listen(8080, () => {
  console.log('express server listening on port 8080');
});
