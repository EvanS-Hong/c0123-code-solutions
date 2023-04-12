export default function countValues(stack) {
  let x = 0;
  if (stack.peek() === undefined) {
    return 0;
  } else {
    while (stack.pop() !== undefined) {
      x += 1;
    }
  }
  return x;
}
