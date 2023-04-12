export default function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  } else {
    let z = stack.pop();
    while (stack.peek() !== undefined) {
      if (z < stack.peek()) {
        z = stack.pop();
      } else {
        stack.pop();
      }
    }
    return z;
  }
}
