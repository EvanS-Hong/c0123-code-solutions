/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends shape {
  constructor (radius) {
    super(Math.PI * 2 * radius, Math.PI * 2 * radius);
    this.radius = radius;
  }

  print() {
    return `${super.print()} & radius: ${this.radius}`;
  }
}

const newCurve = new Circle(3);
console.log(newCurve.print());
