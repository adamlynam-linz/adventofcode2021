const polyMemo = new Map();

function parttwo(input) {
  const lines = input.split('\n');
  const insertionRules = parseRules(lines.filter(line => line.includes('->')));

  const counts = applyRules(lines[0], insertionRules, 40);
  // return counts;
  return score(counts);
}
module.exports = parttwo;

const parseRules = lines => {
  const rules = new Map();
  for (const line of lines) {
    const parts = line.split(' -> ');
    rules.set(parts[0], parts[0][0] + parts[1] + parts[0][1]);
  }
  return rules;
}

const applyRulesMemo = (polymer, rules, times) => {
  const key = polymer + ',' + times;
  if (polyMemo.has(key)) {
    return polyMemo.get(key);
  }
  else {
    const result = applyRules(polymer, rules, times);
    polyMemo.set(key, result);
    return result;
  }
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
    const elementCounts = applyRulesMemo(rules.get(pair), rules, times - 1);
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
  return [...polymer].reduce((res, char) => (res[char] = (res[char] || BigInt(0)) + BigInt(1), res), {});
}

const score = counts => {
  var max = counts['H'];
  var min = counts['H'];
  for (const element in counts) {
    if (counts[element] > max) {
      max = counts[element];
    }
    if (counts[element] < min) {
      min = counts[element];
    }
  }
  return max - min;
}