const arraySort = require('./app');

test('adds 1 + 1', () => {
  expect(1 + 1).toBe(2);
});

test('arraySort re-ordered 1,2,3,5,4 should return 5,4,3,2,1', () => {
  expect(arraySort([1, 2, 3,5,4])).toEqual([5,4,3,2,1]);
});
