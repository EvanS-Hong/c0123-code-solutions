import { readFile } from 'node:fs/promises';

const textFileArray = process.argv.slice(2)
const promises = textFileArray.map((x) => readFile(x,'utf8' ))
Promise.all(promises)
  .then((values) => {
    console.log(values.join('\n'));
  })
  .catch((error) => {
    console.log(error.message);
  });
