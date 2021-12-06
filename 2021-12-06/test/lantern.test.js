const lantern = require('../src/lantern');

test('test input part 1 - my test 1', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input', 'utf8');
  expect(lantern(data, 8)).toBe(10);
});

test('test input part 1 - my test 2', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input', 'utf8');
  expect(lantern('1', 1)).toBe(1);
});

test('test input part 1 - example 1', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input', 'utf8');
  expect(lantern(data, 18)).toBe(26);
});

test('test input part 1 - example 2', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input', 'utf8');
  expect(lantern(data, 80)).toBe(5934);
});

test('test input part 2', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input', 'utf8');
  expect(lantern(data, 256)).toBe(26984457539);
});

test('real input part 1', () => {
  fs = require('fs');
  data = fs.readFileSync('input', 'utf8');
  expect(lantern(data, 80)).toBe(345387);
});

test('real input part 2', () => {
  fs = require('fs');
  data = fs.readFileSync('input', 'utf8');
  expect(lantern(data, 256)).toBe(1574445493136);
});