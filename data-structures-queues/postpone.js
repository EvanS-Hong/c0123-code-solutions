export default function postpone(queue) {
  if (queue.peek() !== undefined) {
    const x = queue.dequeue();
    return queue.enqueue(x);
  }
}
