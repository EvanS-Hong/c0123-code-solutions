import { writeFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';
try {
await writeFile('promise-note.txt', (process.argv[2] + '\n'), 'utf8');
} catch (err) {
  console.error(err);
}
