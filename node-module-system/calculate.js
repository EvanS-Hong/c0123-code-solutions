import add from "./add.js";
import subtract from "./subtract.js";
import multiply from "./multiply.js";
import divide from  "./divide.js";

if (isNaN(+process.argv[2])) {
  console.log(process.argv[2] + ' is not a number.');
  }
if (isNaN(+process.argv[4])) {
  console.log(process.argv[4] + ' is not a number.');
  }
if ((typeof +process.argv[2] == 'number') && (typeof +process.argv[4] == 'number')) {
  if (process.argv[3] === "plus") {
    console.log('result: ', add(+process.argv[2], +process.argv[4]))
    }  else if (process.argv[3] === "minus") {
    console.log('result: ', subtract(+process.argv[2], +process.argv[4]))
    }  else if (process.argv[3] === "times") {
    console.log('result: ', multiply(+process.argv[2], +process.argv[4]))
    }  else if (process.argv[3] === "divide") {
    console.log('result: ', divide(+process.argv[2], +process.argv[4]))
    } else { console.log(`That's not a valid operator`);
    }
  }
