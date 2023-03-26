/* exported Shape */
class shape {
  constructor(area, circumference) {
    this.area = area;
    this.circumference = circumference;
  };

  print() {
    return `area: ${this.area}, circumference: ${this.circumference}`
  }
 }

const newArea = new shape(5, 8);
console.log(newArea.print());
