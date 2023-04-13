export default function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    for (let i = 0; i < index; i++) {
      const x = queue.dequeue();
      queue.enqueue(x);
    }
    return queue.dequeue();
  }
}
