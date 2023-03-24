/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class square extends shape {
  constructor (area, circumference, width) {
    super(area, circumference);
    this.width = width;
  }

  print() {
    console.log(shape.print + this.width);
  }
}

const newEdge = new square(3, 4 ,8);
console.log(newEdge);
