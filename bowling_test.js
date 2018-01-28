const tester = require('./bowling');

//all
let input1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let input2=[1,0,2,0,3,0,4,0,5,0,6,0,7,0,3,0,2,0,1,0];
let input3=[1,9,2,1,3,3,4,4,5,5,3,4,7,2,3,7,1,8,1,9,2,2];
let input4=[1,9,2,1,3,3,4,4,5,5,3,4,7,2,3,7,1,8,1,9,2,8];
let input5=[1,9,2,8,3,7,4,6,5,5,3,7,7,3,3,7,1,9,1,9,2,8];
let input6=[10,10,10,10,10,10,10,10,10,10,10,10];
let input7=[10,0,9,10,8,2,10,10,1,9,10,10,10,9,1];

describe('To check for various cases of open frames,spares and strikes', () => {
  test('all zeros', () => {
    expect(tester(input1)).toBe(0);
  });
  test('open frames', () => {
    expect(tester(input2)).toBe(34);
  });
  test('open+spares+fill is open frame', () => {
    expect(tester(input3)).toBe(92);
  });
  test('open+spares+fill is a spare', () => {
    expect(tester(input4)).toBe(98);
  });
  test('all spares', () => {
    expect(tester(input5)).toBe(139);
  });
  test('all strikes', () => {
    expect(tester(input6)).toBe(300);
  });
  test('all strikes+spares', () => {
    expect(tester(input7)).toBe(208);
  });
});
describe('To check for various invalid inputs', () => {
  test('null', () => {
    expect(tester(null)).toBe(false);
  });
  test('undefined', () => {
    expect(tester(undefined)).toBe(false);
  });
});
let input8=[1,2,1,9,10,10,2,5];
let input9=[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1];
let input10=[1,9,2,8,3,7,4,6,5,5,3,7,7,3,3,7,1,9,1,9];
let input11=[1,10,2,8,3,7,4,6,5,5,3,7,7,3,3,7,1,9,1,9];
describe('To check for impossible score cards', () => {
  test('score array with unusual no of elements', () => {
    expect(tester(input8)).toBe(false);
  });
  test('score array with unusual no of elements', () => {
    expect(tester(input9)).toBe(false);
  });
  test('score array with impossible element sequence such as, strike in 10th frame not followed by fill ball', () => {
    expect(tester(input10)).toBe(false);
  });
  test('score array with sum more than 10 in a frame', () => {
    expect(tester(input11)).toBe(false);
  });
  test('score array with empty array', () => {
    expect(tester([])).toBe(false);
  });
  test('score array with empty array', () => {
    expect(typeof(tester(input2))).toBe(typeof(9));
  });
});
//check if output is a number
