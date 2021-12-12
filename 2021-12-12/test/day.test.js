const partone = require('../src/partone');
const parttwo = require('../src/parttwo');

test('test input part 1', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input', 'utf8');
  expect(partone(data)).toBe(10);
});
test('test input (larger) part 1', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input-larger', 'utf8');
  expect(partone(data)).toBe(19);
});
test('test input (even larger) part 1', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input-even-larger', 'utf8');
  expect(partone(data)).toBe(226);
});

test('test input part 2', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input', 'utf8');
  expect(parttwo(data)).toBe(36);
});
test('test input (larger) part 1', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input-larger', 'utf8');
  expect(parttwo(data)).toBe(103);
});
test('test input (even larger) part 1', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input-even-larger', 'utf8');
  expect(parttwo(data)).toBe(3509);
});

test('real input part 1', () => {
  fs = require('fs');
  data = fs.readFileSync('input', 'utf8');
  expect(partone(data)).toBe(5178);
});

test('real input part 2', () => {
  fs = require('fs');
  data = fs.readFileSync('input', 'utf8');
  expect(parttwo(data)).toBe(130094);
});