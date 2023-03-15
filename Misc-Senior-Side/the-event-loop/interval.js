let count = 3;

const decrement = () => {
  if (count > 0) {
    console.log(count);
    count--;
    } else if (count === 0) {
      clearInterval();
      console.log('Blast off!');
      clearInterval(myInverval);
    }
}

const myInverval = setInterval(decrement, 1000);
