const partone = require('../src/partone');
const parttwo = require('../src/parttwo');

test('test input part 1', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input', 'utf8');
  expect(partone(data)).toBe(15);
});

test('test input part 2', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input', 'utf8');
  expect(parttwo(data)).toBe(1134);
});

test('real input part 1', () => {
  fs = require('fs');
  data = fs.readFileSync('input', 'utf8');
  expect(partone(data)).toBe(465);
});

test('real input part 2', () => {
  fs = require('fs');
  data = fs.readFileSync('input', 'utf8');
  expect(parttwo(data)).toBe(1269555);
});