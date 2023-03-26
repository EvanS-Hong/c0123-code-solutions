/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class square extends shape {
  constructor (width) {
    super(2 * width, 4 * width);
    this.width = width;
  }

  print() {
    return `${super.print()}, width: ${this.width}`;
  }
}

const newEdge = new square(8);
console.log(newEdge.print());
