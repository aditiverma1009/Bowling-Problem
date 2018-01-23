module.exports = function scoringBowling(scoreArr) {
  let totalScore = 0;
  if (scoreArr.length === 12) {
    for (let i = 0; i < 20; i += 1) {
      checkType(scoreArr[i],scoreArr[i+1];
    }
  } else {
    scoreArr.forEach((value) => {
      totalScore += value;
    });
  }

  // console.log(typeof (totalScore));
  // console.log(totalScore);
  return totalScore;
};

const checkType = (throw1,throw2)=>let sum=throw1+throw2;
