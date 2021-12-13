function parttwo(input) {
  const lines = input.split('\n');
  var dots = new Set(lines.filter(line => line.includes(',')));
  const folds = lines.filter(line => line.includes('fold')).map(line => {
    const parts = line.replace('fold along ', '').split('=');
    return {
      dimension: parts[0],
      index: parseInt(parts[1]),
    };
  });
  for (const nextFold of folds) {
    dots = fold(nextFold, dots);
  }
  return printDots(dots);
}
module.exports = parttwo;

const fold = (foldInstruction, dots) => {
  if (foldInstruction.dimension == 'y') {
    return foldUp(foldInstruction.index, dots);
  }
  else {
    return foldLeft(foldInstruction.index, dots);
  }
}

const foldUp = (index, dots) => {
  return [...dots].reduce((folded, dot) => {
    const parts = dot.split(',');
    const x = parts[0];
    const y = parts[1];
    if (y < index) {
      return new Set([...folded, dot]);
    }
    const newy = index - (y - index);
    return new Set([...folded, x + ',' + newy]);
  }, new Set());
}

const foldLeft = (index, dots) => {
  return [...dots].reduce((folded, dot) => {
    const parts = dot.split(',');
    const x = parts[0];
    const y = parts[1];
    if (x < index) {
      return new Set([...folded, dot]);
    }
    const newx = index - (x - index);
    return new Set([...folded, newx + ',' + y]);
  }, new Set());
}

const printDots = dots => {
  const maxx = [...dots].reduce((max, dot) => {
    const parts = dot.split(',');
    return Math.max(max, parseInt(parts[0]))
  }, 0);
  const maxy = [...dots].reduce((max, dot) => {
    const parts = dot.split(',');
    return Math.max(max, parseInt(parts[1]))
  }, 0);
  var lines = [];
  for (i = 0; i <= maxy; i++) {
    var line = '';
    for (j = 0; j <= maxx; j++) {
      if (dots.has(j + ',' + i)) {
        line += '#';
      }
      else {
        line += '.';
      }
    }
    lines.push(line);
  }
  console.log(lines);
  return lines;
}