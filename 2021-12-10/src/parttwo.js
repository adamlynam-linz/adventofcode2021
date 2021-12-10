function parttwo(input) {
  const lines = input.split('\n');
  var incompleteLines = new Array();
  for (const line of lines) {
    const processed = processLine(line);
    const incompleteLine = [...processed].filter(char => char == ')' || char == ']' || char == '}' || char == '>');
    if (incompleteLine.length == 0) {
      incompleteLines.push(processed);
    }
  }
  return calcScore(incompleteLines);
}
module.exports = parttwo;

const processLine = line => {
  var lineBefore = '';
  while (line != lineBefore) {
    lineBefore = line;
    line = line.replace('()', '');
    line = line.replace('[]', '');
    line = line.replace('{}', '');
    line = line.replace('<>', '');
  }
  return line;
}

const calcScore = lines => {
  const scores = lines.map(line => {
    return calcLineScore(line);
  });
  return scores.sort((a, b) => a - b)[Math.floor(scores.length / 2)];
}

const calcLineScore = (line) => {
  return [...line].reverse().reduce((score, char) => {
    switch(char) {
      case '(':
        return score * 5 + 1
      case '[':
        return score * 5 + 2
      case '{':
        return score * 5 + 3
      case '<':
        return score * 5 + 4 
    }
  }, 0);
}