function parttwo(input) {
  const lines = input.split('\n');
  const parts = lines[0].split(' ');
  const targetXParts = parts[2].split('=')[1].split('..');
  const targetYParts = parts[3].split('=')[1].split('..');
  const minTargetX = parseInt(targetXParts[0]);
  const maxTargetX = parseInt(targetXParts[1]);
  const minTargetY = parseInt(targetYParts[0]);
  const maxTargetY = parseInt(targetYParts[1]);
  // return itHits(8,-2, minTargetX, maxTargetX, minTargetY, maxTargetY);
  return totalHits(
    minTargetX,
    maxTargetX,
    minTargetY,
    maxTargetY
  );
}
module.exports = parttwo;

const totalHits = (minTargetX, maxTargetX, minTargetY, maxTargetY) => {
  // even with no drag anything higher than this would pass over the target area completely
  const maxYVelocity = maxTargetY + maxTargetX;
  var hits = 0;
  for (x = maxTargetX; x > 0; x--) {
    for (y = minTargetY; y < maxYVelocity; y++) {
      if (itHits(x, y, minTargetX, maxTargetX, minTargetY, maxTargetY)) {
        hits++;
      }
    }
  }
  return hits;
}

const itHits = (startXVelocity, startYVelocity, minTargetX, maxTargetX, minTargetY, maxTargetY) => {
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
        return true;
      }
    bestY = Math.max(bestY, currentY);
    currentX += currentXVelocity;
    currentY += currentYVelocity;
    currentXVelocity = Math.max(0, currentXVelocity - 1);
    currentYVelocity--;
  }
  return false;
}