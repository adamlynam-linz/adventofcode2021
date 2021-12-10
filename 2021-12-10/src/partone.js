function partone(input) {
  const lines = input.split('\n');
  var firstCorrupted = new Array();
  for (const line of lines) {
    const processed = processLine(line);
    const corruptedCharacters = [...processed].filter(char => char == ')' || char == ']' || char == '}' || char == '>');
    if (corruptedCharacters.length > 0) {
      firstCorrupted.push(corruptedCharacters[0]);
    }
  }
  return calcScore(firstCorrupted);
}
module.exports = partone;

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

const calcScore = characters => {
  return characters.reduce((score, char) => {
    switch(char) {
      case ')':
        return score + 3
      case ']':
        return score + 57
      case '}':
        return score + 1197
      case '>':
        return score + 25137 
    }
  }, 0);
}