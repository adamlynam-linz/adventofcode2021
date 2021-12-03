function aim(input) {
  const lines = input.split('\n');
  var aim = 0;
  var x = 0;
  var y = 0;
  lines.forEach(line => {
    const parts = line.split(' ');
    const instruction = parts[0];
    const value = parseInt(parts[1]);
    if (instruction == 'forward') {
      x += value;
      y += value * aim;
    }
    else if (instruction == 'down') {
      aim += value
    }
    else if (instruction == 'up') {
      aim -= value
    }
  });
  return x * y;
}
module.exports = aim;