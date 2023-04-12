
export default function getTop(stack) {
  if (stack.length === 0) {
    return undefined;
  } else {
    return stack.peek();
  }
}
