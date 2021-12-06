const totalFishForDayResults = new Map();

function lantern(input, days) {
  const lines = input.split('\n');
  const fishies = lines[0].split(',').map(val => parseInt(val));
  return fishies.reduce((sum, fish) => {
    return sum + totalFishInDaysMemoization(fish, days);
  }, 0);
}
module.exports = lantern;

const totalFishInDaysMemoization = (fish, days) => {
  const key = fish + ',' + days;
  if (totalFishForDayResults.has(key)) {
    return totalFishForDayResults.get(key);
  }
  else {
    const result = totalFishInDays(fish, days);
    totalFishForDayResults.set(key, result);
    return result;
  }
}

const totalFishInDays = (fish, days) => {
  if (fish >= days) {
    return 1;
  }
  else {
    const remainingDays = days - fish - 1;
    return totalFishInDaysMemoization(6, remainingDays) + totalFishInDaysMemoization(8, remainingDays);;
  };
}