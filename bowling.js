// checkType returns type of frame : 1 stands for strike, 2 for spare and 3 for open frame
function checkType(throw1, throw2) {
  const sum = throw1 + throw2;
  if (throw1 === 10) {
    return 1;
  } else if (sum === 10) {
    return 2;
  }
  return 3;
}

module.exports = function scoringBowling(scoreArr) {
  let totalScore = 0;
  let frame = 0;
  let i = 0;
  while (frame < 10) {
    const throw1 = scoreArr[i];
    const throw2 = scoreArr[i + 1];
    const typeOfFrame = checkType(throw1, throw2);
    if (typeOfFrame === 1) { // strike case
      frame += 1;
      totalScore += throw1;
    } else if (typeOfFrame === 2) { // spare case
      frame += 1;
      i += 1;
      totalScore += (throw1 + throw2 + scoreArr[(i + 2)]);
    } else { // open frame case
      frame += 1;
      i += 1;
      totalScore += (throw1 + throw2);
    }
  }
  return totalScore;
};
