export default function getFront(queue) {
  const x = queue.peek();
  if (x === undefined) {
    return undefined;
  } else {
    return x;
  }
}
