const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 },
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' },
];

let initialValue = 0;
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue,
  initialValue);
console.log(sum);

const product = numbers.reduce((total, current) => total * current);
console.log(product);

const balance = account.reduce((total, current) =>  (current.type === 'withdrawal')
  ? (total - current.amount)
  : (total + current.amount), initialValue);
console.log(balance);

const composite = traits.reduce((object, current) => Object.assign(object, current), {});
console.log(composite);
