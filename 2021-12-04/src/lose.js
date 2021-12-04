function lose(input) {
  const lines = input.split('\n');
  const bingoCalls = lines[0].split(',').map(string => parseInt(string));
  const gridData = lines.slice(1);
  const grids = gridDataToGrids(gridData);
  const winningCombinations = gridsToWinningCombinations(grids);
  var gridState = winningCombinations;
  for (const call of bingoCalls) {
    gridState = removeCall(gridState, call);
    while (checkWinner(gridState) != undefined) {
      const lastWinner = checkWinner(gridState)
      gridState = removeWinners(gridState);
      console.log(gridState);
      if (gridState.length == 0) {
        return calculateResult(lastWinner, call);
      }
    }
  };
}
module.exports = lose;

const gridDataToGrids = (gridData) => {
  const gridCount = gridData.length / 6;
  return [...Array(gridCount).keys()].map(gridIndex => {
    return [
      stringToInts(gridData[(gridIndex * 6) + 1]),
      stringToInts(gridData[(gridIndex * 6) + 2]),
      stringToInts(gridData[(gridIndex * 6) + 3]),
      stringToInts(gridData[(gridIndex * 6) + 4]),
      stringToInts(gridData[(gridIndex * 6) + 5]),
    ]
  });
}

const stringToInts = (string) => {
  return string.trim().split(/\s+/).map(number => parseInt(number));
}

const gridsToWinningCombinations = (grids) => {
  return grids.map(grid => {
    return {
      rows: gridToWinningRow(grid),
      columns: gridToWinningColumns(grid)
    };
  });
}

const gridToWinningRow = (grid) => {
  return grid.map(row => row);
}

const gridToWinningColumns = (grid) => {
  return [...Array(grid[0].length).keys()].map(column => {
    return [...Array(grid[0].length).keys()].map(row => {
      return grid[row][column];
    });
  });
}

const removeCall = (grids, call) => {
  return grids.map(grid => {
    return {
      columns: grid.columns.map(column => column.filter(value => value != call)),
      rows: grid.rows.map(column => column.filter(value => value != call))
    };
  })
}

const checkWinner = (grids) => {
  for (const grid of grids) {
    for (const row of grid.rows) {
      if (row.length == 0) {
        return grid.rows;
      }
    }
    for (const column of grid.columns) {
      if (column.length == 0) {
        return grid.columns;
      }
    }
  }
}

const calculateResult = (remaingNumbers, call) => {
  return remaingNumbers.flat().reduce((sum, next) => sum + next) * call;
}

const removeWinners = (grids) => {
  var index = 0;
  for (const grid of grids) {
    var removed = false;
    for (const row of grid.rows) {
      if (row.length == 0) {
        grids.splice(index, 1);
        return grids;
      }
    }
    if (!removed) {
      for (const column of grid.columns) {
        if (column.length == 0) {
          grids.splice(index, 1);
          return grids;
        }
      }
    }
    index++;
  }
  return grids;
}