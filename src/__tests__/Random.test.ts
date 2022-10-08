import { Random } from '../Random';

describe('Random', () => {
  test('should be a random item from array', () => {
    const originalArray = [1, 2, 3]
    expect(originalArray.includes(Random(originalArray))).toBeTruthy();
  });

  test('should be random caracter of string', () => {
    const originalArray = 'aaaaaa'
    expect(Random(originalArray)).toBe('a');
  });

  test('should be number', () => {
    expect(Random(3) <= 3).toBeTruthy();
  });
});
