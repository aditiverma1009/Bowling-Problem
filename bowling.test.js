const calculatedScore = require('./bowling');

// console.log(calculatedScore);
const inputAllZero = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
test('Testing for all 0 strikes and hence the result must be 0', () => {
  expect(calculatedScore(inputAllZero)).toBe(0);
});

const inputAllOpenFrame = [1, 2, 3, 4, 4, 2, 1, 1, 1, 1, 3, 3, 2, 2, 8, 1, 1, 1, 1, 3];
test('Testing for all open frames strikes and hence the result must be ', () => {
  expect(calculatedScore(inputAllOpenFrame)).toBe(45);
});
