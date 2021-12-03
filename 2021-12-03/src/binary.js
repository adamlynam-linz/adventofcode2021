function binary(input) {
  const lines = input.split('\n');
  var gamma = '';
  var epsilon = '';
  for (i = 0; i < lines[0].length; i++) {
    const seen = lines.map(line => {
      return line[i];
    })
    const zeros = seen.filter(number => number == '0').length;
    const ones = seen.filter(number => number == '1').length;
    if (zeros > ones) {
      gamma += '0';
      epsilon += '1';
    }
    else {
      gamma += '1';
      epsilon += '0';
    }
  }
  return parseInt(gamma, 2) * parseInt(epsilon, 2);
}
module.exports = binary;