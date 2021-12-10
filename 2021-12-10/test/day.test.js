const partone = require('../src/partone');
const parttwo = require('../src/parttwo');

test('test input part 1', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input', 'utf8');
  expect(partone(data)).toBe(26397);
});

test('test input part 2', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input', 'utf8');
  expect(parttwo(data)).toBe(288957);
});

test('real input part 1', () => {
  fs = require('fs');
  data = fs.readFileSync('input', 'utf8');
  expect(partone(data)).toBe(311895);
});

test('real input part 2', () => {
  fs = require('fs');
  data = fs.readFileSync('input', 'utf8');
  expect(parttwo(data)).toBe(2904180541);
});