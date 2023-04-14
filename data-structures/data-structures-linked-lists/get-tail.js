export default function getTail(list) {
  while (list) {
    if (!list.next) {
      return list.data;
    }
    list = list.next;
  }
}
