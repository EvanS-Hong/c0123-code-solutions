import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

describe('toDolars', () => {
  it('returns a number in $ format', () => {
    const amount = 3;
    const result = toDollars(amount);
    expect(result).toEqual(`$${amount}.00`);
  });
});

describe('divideBy', () => {
  it('returns a newArray of numbers divided by divisor', () => {
    const numbers = [2, 6, 8, 10, 14, 20];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([1, 3, 4, 5, 7, 10]);
  });
});

describe('multiplyBy', () => {
  it('returns an object with a modified key if key is a number value', () => {
    const obj = {
      name: 'jacob',
      age: 10,
      grade: 'A',
      gpa: 2
    };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({
      name: 'jacob',
      age: 20,
      grade: 'A',
      gpa: 4
    });
  });
});
