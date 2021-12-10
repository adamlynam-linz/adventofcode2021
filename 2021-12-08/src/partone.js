function partone(input) {
  const lines = input.split('\n');
  return lines.reduce((sum, line) => {
    const parts = line.split(' | ');
    // const signal = parts[0].split(' ');
    const output = parts[1].split(' ');
    console.log(output);
    return sum + countEasyNumbers(output);
  }, 0);
}
module.exports = partone;

const countEasyNumbers = numbers => {
  return numbers.reduce((sum, number) => {
    if (number.length == 2 || number.length == 3 || number.length == 4 || number.length == 7) {
      return sum + 1;
    }
    return sum;
  }, 0);
}