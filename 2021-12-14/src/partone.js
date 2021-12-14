function partone(input) {
  const lines = input.split('\n');
  const insertionRules = parseRules(lines.filter(line => line.includes('->')));

  const counts = applyRules(lines[0], insertionRules, 10);
  return score(counts);
}
module.exports = partone;

const parseRules = lines => {
  const rules = new Map();
  for (const line of lines) {
    const parts = line.split(' -> ');
    rules.set(parts[0], parts[0][0] + parts[1] + parts[0][1]);
  }
  return rules;
}

const applyRules = (polymer, rules, times) => {
  if (times < 1) {
    return counts(polymer);
  }
  const lastElement = polymer[polymer.length - 1];
  const pairs = [...polymer].flatMap((element, index) => {
    if (index == (polymer.length - 1)) {
      return [];
    }
    return element + polymer[index + 1]
  });
  var pairCounts = pairs.reduce((total, pair) => {
    const pairLast = pair[pair.length - 1];
    const elementCounts = applyRules(rules.get(pair), rules, times - 1);
    for (const element in elementCounts) {
      if (total[element]) {
        total[element] += elementCounts[element];
      }
      else {
        total[element] = elementCounts[element];
      }
    }
    total[pairLast]--;
    return total;
  }, {});
  pairCounts[lastElement]++;
  return pairCounts;
}

const counts = polymer => {
  return [...polymer].reduce((res, char) => (res[char] = (res[char] || 0) + 1, res), {});
}

const score = counts => {
  var max = 0;
  var min = Number.MAX_VALUE;
  for (const element in counts) {
    max = Math.max(max, counts[element]);
    min = Math.min(min, counts[element]);
  }
  return max - min;
}