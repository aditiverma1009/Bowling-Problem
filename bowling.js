let totalScore = 0;
module.exports = function scoringBowling(...scoreArr) {
  scoreArr.forEach((value) => {
    totalScore += value;
  });

  return totalScore;
};
