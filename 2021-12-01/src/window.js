function window(input, windowsize) {
  const lines = input.split('\n');
  const values = slideWindow(lines, windowsize)
  var increases = 0;
  var last = 9007199254740991;
  values.forEach(value => {
    if (value > last) {
      increases++;
    }
    last = value;
  });
  return increases;
}
module.exports = window;

const slideWindow = (lines, windowsize) => {
  return lines.flatMap((line, index, lines) => {
    if (index + windowsize > lines.length) {
      return [];
    }
    const windowValues = [...Array(windowsize).keys()].map(offset => {
      return parseInt(lines[index + offset]);
    });
    return windowValues.reduce((sum, next) => sum + next);
  });
}