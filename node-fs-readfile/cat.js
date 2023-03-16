import { readFile } from 'node:fs/promises';

const promiseArray = process.argv.slice(2)
const newPromises = promiseArray.map(x =>
  { try {
  const filePath = new URL(x, import.meta.url);
  const contents = await readFile(filePath, { encoding: 'utf8' });
  console.log(contents);
} catch (err) {
  console.error(err.message);
}
  Promise.all(newPromises).then((values) => {
    console.log(values);
  }});

// promiseArray.forEach((link) => {
// try {
//   const filePath = new URL(link, import.meta.url);
//   const contents = await readFile(filePath, { encoding: 'utf8' });
//   console.log(contents);
// } catch (err) {
//   console.error(err.message);
// }});
