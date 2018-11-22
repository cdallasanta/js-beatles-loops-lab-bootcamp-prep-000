function theBeatlesPlay(musician, instrument){
  var arr = [];
  for(var i = 0;i<musician.length;i++){
    arr.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return arr;
}