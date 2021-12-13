function partone(input) {
  const lines = input.split('\n');
  const dots = new Set(lines.filter(line => line.includes(',')));
  const folds = lines.filter(line => line.includes('fold')).map(line => {
    const parts = line.replace('fold along ', '').split('=');
    return {
      dimension: parts[0],
      index: parseInt(parts[1]),
    };
  });
  return fold(folds[0], dots).size;
}
module.exports = partone;

const fold = (foldInstruction, dots) => {
  if (foldInstruction.dimension == 'y') {
    return foldUp(foldInstruction.index, dots);
  }
  else {
    return foldRight(foldInstruction.index, dots);
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

const foldRight = (index, dots) => {
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