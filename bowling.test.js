const calculatedScore = require('./bowling');

// console.log(calculatedScore);
const inputAllZero = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

test('Testing for all 0 strikes and hence the result must be 0', () => {
  expect(calculatedScore(inputAllZero)).toBe(0);
});
