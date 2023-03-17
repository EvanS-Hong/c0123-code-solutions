import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';

writeFile('random.txt', (Math.random().toString() +'\n') , 'utf8',(err,data) => {
  if (err) console.log(err);
});
