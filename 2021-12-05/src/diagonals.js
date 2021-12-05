function vents(input) {
  const lines = input.split('\n');
  const ventCoords = parseVentLines(lines);
  const evaluatedArray = evaluateVents(ventCoords);
  return evaluatedArray;
}
module.exports = vents;

const parseVentLines = lines => {
  return lines.map(line => {
    const startStop = line.split(' -> ');
    const start = startStop[0].split(',');
    const end = startStop[1].split(',');
    return {
      startx: parseInt(start[0]),
      starty: parseInt(start[1]),
      endx: parseInt(end[0]),
      endy: parseInt(end[1]),
    };
  })
}

const evaluateVents = vents => {
  const map = new Map();
  for (const vent of vents) {
    const xChange = Math.abs(vent.startx - vent.endx);
    const yChange = Math.abs(vent.starty - vent.endy);
    const totalChange = Math.max(xChange, yChange);
    const xDirection = (xChange > 0) ? (vent.endx - vent.startx) / xChange : 0;
    const yDirection = (yChange > 0) ? (vent.endy - vent.starty) / yChange : 0;
    for (i = 0; i <= totalChange; i++) {
      const key = (vent.startx + (i * xDirection)) + ',' + (vent.starty + (i * yDirection));
      // console.log(key);
      map.set(key, map.has(key) ? map.get(key) + 1 : 1);
    }
  }

  return [...map.values()].filter(value => value > 1).length;
}