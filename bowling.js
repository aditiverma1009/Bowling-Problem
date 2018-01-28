// checkType returns type of frame : 1 stands for strike, 2 for spare and 3 for open frame
function checkType(throw1, throw2) {
  const sum = throw1 + throw2;
  if (throw1 === 10) {
    return 1;
  } else if (sum === 10) {
    return 2;
  } else if (sum !== 10) { return 3; }
}

module.exports = function scoringBowling(scoreArr) {
  let totalScore = 0;
  let frame = 0;
  let i = 0;
  while (frame < 10) {
    const throw1 = scoreArr[i];
    const throw2 = scoreArr[i + 1];
    const throw3 = scoreArr[i + 2];
    console.log(`throw1 : ${throw1}`);
    console.log(`throw2 : ${throw2}`);
    console.log(`throw3 : ${throw3}`);

    const typeOfFrame = checkType(throw1, throw2);
    console.log(`result of typeofframe : ${typeOfFrame}`);
    if (typeOfFrame === 1) { // strike case
      i += 1;
      totalScore += throw1;
    } else if (typeOfFrame === 2) { // spare case
      i += 2;
      totalScore += (throw1 + throw2 + throw3);
    } else if (typeOfFrame === 3) { // open frame case
      i += 3;
      totalScore += (throw1 + throw2);
    }
    frame += 1;
    console.log(`no of frame : ${frame}`);
    console.log(`totalscore : ${totalScore} ----------`);
  }
  return totalScore;
};
