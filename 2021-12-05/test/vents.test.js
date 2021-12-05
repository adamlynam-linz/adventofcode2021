const vents = require('../src/vents');
const diagonals = require('../src/diagonals');

test('test input part 1', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input', 'utf8');
  expect(vents(data)).toBe(5);
});

test('test input part 2', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input', 'utf8');
  expect(diagonals(data)).toBe(12);
});

test('real input part 1', () => {
  fs = require('fs');
  data = fs.readFileSync('input', 'utf8');
  expect(vents(data)).toBe(5167);
});

test('real input part 2', () => {
  fs = require('fs');
  data = fs.readFileSync('input', 'utf8');
  expect(diagonals(data)).toBe(17604);
});