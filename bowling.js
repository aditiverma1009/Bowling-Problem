module.exports = function scoringBowling(scoreArr) {
  let totalScore = 0;
  scoreArr.forEach((value) => {
    totalScore += value;
  });
  // console.log(typeof (totalScore));
  // console.log(totalScore);
  return totalScore;
};
