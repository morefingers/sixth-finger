import { Random } from '../random';

describe('#Random', () => {
  test('should return one item of array', () => {
    expect(Random(['go', 'go', 'go'])).toBe('go');
  });
});
