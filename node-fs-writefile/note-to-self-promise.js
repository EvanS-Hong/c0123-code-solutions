import { writeFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';
try {
  const controller = new AbortController();
  const { signal } = controller;
  const data = new Uint8Array(Buffer.from('Hello Node.js'));
  const promise = writeFile('promise-note.txt', (process.argv[2] + '\n'), 'utf8');

} catch (err) {
  console.error(err);
}
