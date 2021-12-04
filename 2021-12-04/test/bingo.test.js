const bingo = require('../src/bingo');
const lose = require('../src/lose');

test('test input part 1', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input', 'utf8');
  expect(bingo(data)).toBe(4512);
});

test('test input part 2', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input', 'utf8');
  expect(lose(data)).toBe(1924);
});

test('real input part 1', () => {
  fs = require('fs');
  data = fs.readFileSync('input', 'utf8');
  expect(bingo(data)).toBe(25410);
});

test('real input part 2', () => {
  fs = require('fs');
  data = fs.readFileSync('input', 'utf8');
  expect(lose(data)).toBe(2730);
});