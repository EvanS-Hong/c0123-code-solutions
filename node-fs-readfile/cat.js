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



  // Promise.all(newPromises).then((values) => {
  //   console.log(values);
  // });

// try {
//   const filePath = new URL(link, import.meta.url);
//   const contents = await readFile(filePath, { encoding: 'utf8' });
//   console.log(contents);
// } catch (err) {
//   console.error(err.message);
// }});
