import takeAChance from './take-a-chance.js';
takeAChance('evan')
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error.message);
  });
