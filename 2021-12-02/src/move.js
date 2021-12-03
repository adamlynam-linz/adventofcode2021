function move(input) {
  const lines = input.split('\n');
  var x = 0;
  var y = 0;
  lines.forEach(line => {
    const parts = line.split(' ');
    const instruction = parts[0];
    const distance = parseInt(parts[1]);
    if (instruction == 'forward') {
      x += distance;
    }
    else if (instruction == 'down') {
      y += distance
    }
    else if (instruction == 'up') {
      y -= distance
    }
  });
  return x * y;
}
module.exports = move;