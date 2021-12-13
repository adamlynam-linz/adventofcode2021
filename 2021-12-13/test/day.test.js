const partone = require('../src/partone');
const parttwo = require('../src/parttwo');

test('test input part 1', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input', 'utf8');
  expect(partone(data)).toBe(17);
});

test('test input part 2', () => {
  fs = require('fs');
  data = fs.readFileSync('test-input', 'utf8');
  // O
  expect(parttwo(data)).toStrictEqual([
    "#####",
    "#...#",
    "#...#",
    "#...#",
    "#####"
  ]);
});

test('real input part 1', () => {
  fs = require('fs');
  data = fs.readFileSync('input', 'utf8');
  expect(partone(data)).toBe(664);
});

test('real input part 2', () => {
  fs = require('fs');
  data = fs.readFileSync('input', 'utf8');
  // EFJKZLBL
  expect(parttwo(data)).toStrictEqual([
    "####.####...##.#..#.####.#....###..#...",
    "#....#.......#.#.#.....#.#....#..#.#...",
    "###..###.....#.##.....#..#....###..#...",
    "#....#.......#.#.#...#...#....#..#.#...",
    "#....#....#..#.#.#..#....#....#..#.#...",
    "####.#.....##..#..#.####.####.###..####"
  ]);
});