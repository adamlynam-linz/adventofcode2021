function vents(input) {
  const lines = input.split('\n');
  const ventCoords = parseVentLines(lines);
  const sameXOrYVents = filterSameXOrY(ventCoords);
  const evaluatedArray = evaluateVents(sameXOrYVents);
  return evaluatedArray.length;
}
module.exports = vents;

const parseVentLines = lines => {
  return lines.map(line => {
    const startStop = line.split(' -> ');
    const start = startStop[0].split(',');
    const end = startStop[1].split(',');
    return {
      startx: start[0],
      starty: start[1],
      endx: end[0],
      endy: end[1],
    };
  })
}

const filterSameXOrY = coords => {
  return coords.filter(coord => (coord.startx == coord.endx) || (coord.starty == coord.endy))
}

const evaluateVents = vents => {
  const map = new Map();
  for (const vent of vents) {
    const minx = Math.min(vent.startx, vent.endx);
    const maxx = Math.max(vent.startx, vent.endx);
    const miny = Math.min(vent.starty, vent.endy);
    const maxy = Math.max(vent.starty, vent.endy);
    for (i = minx; i <= maxx; i++) {
      for (j = miny; j <= maxy; j++) {
        const key = i + ',' + j;
        map.set(key, map.has(key) ? map.get(key) + 1 : 1);
      }
    }
  }

  return [...map.values()].filter(value => value > 1);
}