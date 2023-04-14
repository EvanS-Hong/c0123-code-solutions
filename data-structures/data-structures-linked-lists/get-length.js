export default function getLength(list) {
  let x = 0;
  while (list) {
    list = list.next;
    x++;
  }
  return x;
}
