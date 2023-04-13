export default function takeFront(queue) {
  const x = queue.peek();
  if (x === undefined) {
    return undefined;
  } else {
    return queue.dequeue();
  }
}
