function parttwo(input) {
  const lines = input.split('\n');
  return lines.reduce((sum, line) => {
    const parts = line.split(' | ');
    const signal = parts[0].split(' ');
    const output = parts[1].split(' ');
    const lookup = calculateLookup(signal);
    return sum + lookupOutput(lookup, output);
  }, 0);
}
module.exports = parttwo;

const calculateLookup = numbers => {
  var lookup = new Map();
  const one = numbers.filter(number => number.length == 2)[0];
  const four = numbers.filter(number => number.length == 4)[0];
  lookup.set(one, 1);
  lookup.set(numbers.filter(number => number.length == 3)[0], 7);
  lookup.set(four, 4);
  lookup.set(numbers.filter(number => number.length == 7)[0], 8);

  const lengthFive = numbers.filter(number => number.length == 5);
  const lengthSix = numbers.filter(number => number.length == 6);

  const three = lengthFive.filter(number => {
    return number.includes(one[0]) &&
      number.includes(one[1])
  })[0];
  lookup.set(three, 3);
  const nine = lengthSix.filter(number => {
    return number.includes(three[0]) &&
      number.includes(three[1]) &&
      number.includes(three[2]) &&
      number.includes(three[3]) &&
      number.includes(three[4])
  })[0];
  lookup.set(nine, 9);
  const fourWithoutOne = [...four].filter(char => !one.includes(char));
  const six = lengthSix.filter(number => {
    return number != nine &&
      number.includes(fourWithoutOne[0]) &&
      number.includes(fourWithoutOne[1])
  })[0];
  lookup.set(six, 6);
  const zero = lengthSix.filter(number => {
    return number != six &&
      number != nine
  })[0];
  lookup.set(zero, 0);
  const partOfFive = [...fourWithoutOne].filter(char => zero.includes(char));
  const five = lengthFive.filter(number => number.includes(partOfFive[0]))[0];
  lookup.set(five, 5);
  const two = lengthFive.filter(number => {
    return number != three &&
      number != five
  })[0];
  lookup.set(two, 2);
  
  return lookup;
}

const lookupOutput = (lookup, output) => {
  const outputNumbers = output.map(number => {
    for (const key of lookup.keys()) {
      if (number.length == key.length && [...number].filter(char => key.includes(char)).length == key.length) {
        return lookup.get(key);
      }
    }
  });
  return parseInt(outputNumbers.join(''));
}