const explored = new Map();

function parttwo(input) {
  const lines = input.split('\n');
  const map = linesToArray(lines);
  for (i = 0; i < map.length; i++) {
    for (j = 0; j < map[0].length; j++) {
      if (map[i][j] == 9) {
        const key = i + '-' + j;
        explored.set(key, true);
      }
    }
  }
  var basins = new Array();
  for (i = 0; i < map.length; i++) {
    for (j = 0; j < map[0].length; j++) {
      const key = i + '-' + j;
      if (explored.has(key)) {
        continue;
      }
      else {
        basins.push(findRegionSize(map, i, j));
      }
    }
  }
  const sortedBasins = basins.sort((a, b) => b - a);
  return sortedBasins[0] * sortedBasins[1] * sortedBasins[2];
}
module.exports = parttwo;

const linesToArray = lines => {
  return lines.map(line => {
    return line.split('').map(val => parseInt(val));
  })
}

const findRegionSize = (map, i, j) => {
  explored.set(makeKey(i, j), true);
  var regionSize = 1;
  if (i - 1 >= 0 && !explored.has(makeKey(i - 1, j))) {
    regionSize += findRegionSize(map, i - 1, j);
  }
  if (j - 1 >= 0 && !explored.has(makeKey(i, j - 1))) {
    regionSize += findRegionSize(map, i, j - 1);
  }
  if (i + 1 < map.length && !explored.has(makeKey(i + 1, j))) {
    regionSize += findRegionSize(map, i + 1, j);
  }
  if (j + 1 < map[0].length && !explored.has(makeKey(i, j + 1))) {
    regionSize += findRegionSize(map, i, j + 1);
  }
  return regionSize;
}

const makeKey = (i, j) => {
  return i + "-" + j;
}