function theBeatlesPlay(musician, instrument){
  var arr = [];
  for(var i = 0;i<musician.length;i++){
    arr.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return arr;
}

function johnLennonFacts(facts){
  var i = 0;
  while(i<facts.length){
    console.log(facts[i]);
    facts[i]+='!!!';
    console.log(facts[i]);
    i++
  }
}