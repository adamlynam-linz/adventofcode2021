function air(input) {
  const lines = input.split('\n');
  const o2 = oxygen(lines);
  const co2 = carbon(lines);
  return o2 * co2;

  function oxygen(lines) {
    var oxygen = lines;
    var index = 0;
    while (oxygen.length > 1) {
      const seen = oxygen.map(line => {
        return line[index];
      });
      const zeros = seen.filter(number => number == '0').length;
      const ones = seen.filter(number => number == '1').length;
      if (zeros > ones) {
        console.log('more zeros');
        oxygen = oxygen.filter(line => line[index] == '0');
      }
      else {
        oxygen = oxygen.filter(line => line[index] == '1');
      }
      console.log(oxygen);
      index++;
    }
    return parseInt(oxygen[0], 2);
  }

  function carbon(lines) {
    var carbon = lines;
    var index = 0;
    while (carbon.length > 1) {
      const seen = carbon.map(line => {
        return line[index];
      });
      const zeros = seen.filter(number => number == '0').length;
      const ones = seen.filter(number => number == '1').length;
      if (zeros <= ones) {
        carbon = carbon.filter(line => line[index] == '0');
      }
      else {
        carbon = carbon.filter(line => line[index] == '1');
      }
      index++;
    }
    return parseInt(carbon[0], 2);
  }
}
module.exports = air;