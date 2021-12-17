function partone(input) {
  const lines = input.split('\n');
  const parts = lines[0].split(' ');
  const targetXParts = parts[2].split('=')[1].split('..');
  const targetYParts = parts[3].split('=')[1].split('..');
  const minTargetX = parseInt(targetXParts[0]);
  const maxTargetX = parseInt(targetXParts[1]);
  const minTargetY = parseInt(targetYParts[0]);
  const maxTargetY = parseInt(targetYParts[1]);
  // return bestYForVelocity(6, 9, minTargetX, maxTargetX, minTargetY, maxTargetY);
  return bestY(
    minTargetX,
    maxTargetX,
    minTargetY,
    maxTargetY
  );
}
module.exports = partone;

const bestY = (minTargetX, maxTargetX, minTargetY, maxTargetY) => {
  // even with no drag anything higher than this would pass over the target area completely
  const maxYVelocity = maxTargetY + maxTargetX;
  var bestSeenY = 0;
  for (x = minTargetX; x > 0; x--) {
    for (y = minTargetY; y < maxYVelocity; y++) {
      bestSeenY = Math.max(bestSeenY, bestYForVelocity(x, y, minTargetX, maxTargetX, minTargetY, maxTargetY));
    }
  }
  return bestSeenY;
}

const bestYForVelocity = (startXVelocity, startYVelocity, minTargetX, maxTargetX, minTargetY, maxTargetY) => {
  var currentX = 0;
  var currentY = 0;
  var currentXVelocity = startXVelocity;
  var currentYVelocity = startYVelocity;
  var bestY = 0;
  while (currentY >= minTargetY) {
    // console.log(currentX + ',' + currentY);
    if (currentX >= minTargetX &&
      currentX <= maxTargetX &&
      currentY >= minTargetY &&
      currentY <= maxTargetY) {
        // console.log(startXVelocity + "," + startYVelocity);
        return bestY;
      }
    bestY = Math.max(bestY, currentY);
    currentX += currentXVelocity;
    currentY += currentYVelocity;
    currentXVelocity = Math.max(0, currentXVelocity - 1);
    currentYVelocity--;
  }
  return 0;
}