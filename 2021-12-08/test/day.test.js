const partone = require('../src/partone');
const parttwo = require('../src/parttwo');

test('test input part 1', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input', 'utf8');
  expect(partone(data)).toBe(0);
});

test('test input (larger) part 1', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input-larger', 'utf8');
  expect(partone(data)).toBe(26);
});

test('test input part 2', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input', 'utf8');
  expect(parttwo(data)).toBe(5353);
});

test('test input (larger) part 2', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input-larger', 'utf8');
  expect(parttwo(data)).toBe(61229);
});

test('real input part 1', () => {
  fs = require('fs');
  data = fs.readFileSync('input', 'utf8');
  expect(partone(data)).toBe(288);
});

test('real input part 2', () => {
  fs = require('fs');
  data = fs.readFileSync('input', 'utf8');
  expect(parttwo(data)).toBe(940724);
});