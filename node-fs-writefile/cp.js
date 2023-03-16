import { writeFile } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';

try {
  const filePath = new URL(process.argv[2], import.meta.url);
  const contents = await readFile(filePath, { encoding: 'utf8' });
  await writeFile('copied-note.txt', (contents + '\n'), 'utf8');
} catch (err) {
  console.error(err.message);
}
