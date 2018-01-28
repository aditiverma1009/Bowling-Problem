// checkType returns type of frame : 1 stands for strike, 2 for spare and 3 for open frame
function checkType(throw1, throw2) {
  const sum = throw1 + throw2;
  if (throw1 === 10) {
    return 1;
  } else if (sum === 10) {
    return 2;
  } else if (sum <10) {
    return 3;
  } else{//invalid
    return 4;
  }
}

function validate(scoreArr){
  if(scoreArr===null ||scoreArr===undefined){
    return false;
  }
  if(scoreArr.length<12 || scoreArr.length>22){
    return false;
  }
}
function scoringBowling(scoreArr) {
  let totalScore = 0;
  let frame = 0;
  let i = 0;
  let flag=0;
  if(validate(scoreArr)===false){
    return false;
  }
  while (frame < 10 || flag==1) {
    let typeOfFrame=0;
     typeOfFrame = checkType(scoreArr[i], scoreArr[i+1]);
    if(frame===9){
      if(typeOfFrame ===2)//spare
      {
        totalScore+=scoreArr[i]+scoreArr[i+1]+scoreArr[i+2]+scoreArr[i+3];
      } else if(typeOfFrame===1)//strike
      {
        totalScore+=scoreArr[i]+scoreArr[i+1]+scoreArr[i+2];
      } else{ //open
        totalScore+=scoreArr[i]+scoreArr[i+1];
      }
      if(isNaN(totalScore)===true){return false;}
      flag=1;
      break;
    } else if (typeOfFrame === 1) { // strike case
      totalScore += scoreArr[i]+scoreArr[i+1]+scoreArr[i+2];
      i+=1;
    } else if (typeOfFrame === 2) { // spare case
      totalScore += (scoreArr[i] + scoreArr[i + 1]+scoreArr[i+2]);
      i += 2;
    } else if (typeOfFrame === 3) { // open frame case
      totalScore += (scoreArr[i] + scoreArr[i + 1]);
      i += 2;
    }else if(typeOfFrame===4)
    {
      return false;
    }
    frame += 1;
    console.log('typeOfFrame : '+typeOfFrame+ ' \n'+'frame no : '+frame+'\ni is : '+i+' \ntotalScore : '+totalScore+'\n');
  }
  return totalScore;
};
module.exports =scoringBowling;
