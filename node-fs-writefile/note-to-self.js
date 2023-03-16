import { writeFile } from 'node:fs';

writeFile('note.txt', (process.argv[2]+'\n'), 'utf8', (err, data) => {
  if (err) console.log(err);
});
