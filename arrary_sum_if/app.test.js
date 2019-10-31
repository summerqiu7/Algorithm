const arraySum = require('./app');

test('adds 1 + 1', () => {
  expect(1 + 1).toBe(2);
});

test('arraySum adds 1,2,3,4,5 given number 3 should return 9', () => {
  expect(arraySum([1, 2, 3, 4, 5], 3)).toBe(9);
});

test('arraySum should ignore string in array', () => {
  expect(arraySum([1, 2, 3, 4, 5, 'six'], 3)).toBe(9);
});

test('arraySum should ignore an object in array', () => {
  expect(arraySum([1, 2, 3, 4, 5, {}], 3)).toBe(9);
});

test('arraySum should ignore an object in array', () => {
  expect(arraySum([1, 2, 3, 4, 5, {}], 3)).toBe(9);
});

test('arraySum should handle negative target', () => {
  expect(arraySum([1, 2, 3, 4, 5], -3)).toBe(15);
});
