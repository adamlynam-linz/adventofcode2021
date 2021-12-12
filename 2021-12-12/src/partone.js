function partone(input) {
  const lines = input.split('\n');
  const connections = parseConnections(lines);
  return countUniquePaths(connections, new Set(), 'start');
}
module.exports = partone;

const parseConnections = lines => {
  const connections = new Map();
  for (const line of lines) {
    const parts = line.split('-');
    const from = parts[0];
    const to = parts[1];
    if (connections.has(from)) {
      connections.set(from, [...connections.get(from), to]);
    }
    else {
      connections.set(from, [to]);
    }
    if (connections.has(to)) {
      connections.set(to, [...connections.get(to), from]);
    }
    else {
      connections.set(to, [from]);
    }
  }
  return connections;
};

const countUniquePaths = (connections, visited, current) => {
  if (current == 'end') {
    return 1;
  }
  
  const nowVisited = new Set([...visited, current]);
  return connections.get(current).reduce((sum, node) => {
    if (!visited.has(node) || /[A-Z]+$/.test(node)) {
      return sum + countUniquePaths(connections, nowVisited, node);
    }
    else {
      return sum;
    }
  }, 0);
}