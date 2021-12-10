function partone(input) {
  const lines = input.split('\n');
  const map = linesToArray(lines);
  var risk = 0;
  for (i = 0; i < map.length; i++) {
    for (j = 0; j < map[0].length; j++) {
      // console.log(i + ':' + j);
      var adjacentHeights = [];
      if (i - 1 >= 0) {
        adjacentHeights.push(map[i - 1][j]);
      }
      if (j - 1 >= 0) {
        adjacentHeights.push(map[i][j - 1]);
      }
      if (i + 1 < map.length) {
        adjacentHeights.push(map[i + 1][j]);
      }
      if (j + 1 < map[0].length) {
        adjacentHeights.push(map[i][j + 1]);
      }
      const currentHeight = map[i][j];
      // console.log(currentHeight);
      const lowerHeights = adjacentHeights.filter(adjacentHeight => adjacentHeight <= currentHeight);
      if (lowerHeights.length == 0) {
        risk += currentHeight + 1;
      }
    }
  }
  return risk;
}
module.exports = partone;

const linesToArray = lines => {
  return lines.map(line => {
    return line.split('').map(val => parseInt(val));
  })
}