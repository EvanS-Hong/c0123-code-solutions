/* exported Shape */
class shape {
  constructor(area, circumference) {
    this.area = area;
    this.circumference = circumference;
  };

  print() {
    console.log(this.area + this.circumference);
  }
 }

const newArea = new shape(5, 8);
console.log(newArea);
