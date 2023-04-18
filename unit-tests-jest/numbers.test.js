import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
  it('does not accept NAN', () => {
    const numbers = [NaN];
    const result = evenNumbers(numbers);
    expect(result).toEqual([]);
  });
});

describe('toDolars', () => {
  it('returns a number in $ format', () => {
    const amount = 12.4335;
    const result = toDollars(amount);
    expect(result).toEqual('$12.43');
  });
  it('accepts negative values', () => {
    const amount = -43.23;
    const result = toDollars(amount);
    expect(result).toEqual('$-43.23');
  });
});

describe('divideBy', () => {
  it('returns a newArray of numbers divided by divisor', () => {
    const numbers = [2, 6, 8, 10, 14, 20];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([1, 3, 4, 5, 7, 10]);
  });
  it('does not modify the original array', () => {
    const numbers = [2, 6, 8, 10, 14, 20];
    const divisor = 2;
    divideBy(numbers, divisor);
    expect(numbers).toEqual([2, 6, 8, 10, 14, 20]);
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
