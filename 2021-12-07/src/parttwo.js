const fuelResults = new Map();

function parttwo(input) {
  const distances = input.split('\n')[0].split(',').map(val => parseInt(val));
  const min = distances.reduce((min, next) => (next < min) ? next : min);
  const max = distances.reduce((max, next) => (next < max) ? max : next);
  var lowestFuel = Number.MAX_VALUE;
  for (i = min; i < max; i++) {
    const totalFuel = distances.reduce((fuel, distance) => fuel + calcFuelMemoization(distance, i), 0);
    lowestFuel = Math.min(lowestFuel, totalFuel);
  }
  return lowestFuel;
}
module.exports = parttwo;

const calcFuelMemoization = (distance, target) => {
  const key = distance + ',' + target;
  if (fuelResults.has(key)) {
    return fuelResults.get(key);
  }
  else {
    const result = calcFuel(distance, target);
    fuelResults.set(key, result);
    return result;
  }
}

const calcFuel = (distance, target) => {
  const distanceToTarget = Math.abs(distance - target);
  if (distanceToTarget < 1) {
    return 0;
  }
  return [...Array(distanceToTarget + 1).keys()].reduce((sum, next) => sum + next);
}