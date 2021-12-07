function partone(input) {
  const distances = input.split('\n')[0].split(',').map(val => parseInt(val));
  const min = distances.reduce((min, next) => (next < min) ? next : min);
  const max = distances.reduce((max, next) => (next < max) ? max : next);
  var lowestFuel = 999999;
  for (i = min; i < max; i++) {
    const totalFuel = distances.reduce((fuel, distance) => fuel + Math.abs(distance - i), 0);
    lowestFuel = Math.min(lowestFuel, totalFuel);
  }
  return lowestFuel;
}
module.exports = partone;