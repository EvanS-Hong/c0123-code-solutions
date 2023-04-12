export default function countValues(stack) {
  let x = 0;
  while (stack.pop() !== undefined) {
    x += 1;
  }
  return x;
}
