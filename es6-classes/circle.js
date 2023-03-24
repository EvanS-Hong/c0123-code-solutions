/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends shape {
  constructor (area, circumference, radius) {
    super(area, circumference);
    this.radius = radius;
  }

  print() {
    console.log(shape.print + this.radius);
  }
}

const newCurve = new Circle(3, 4, 12);
console.log(newCurve);
