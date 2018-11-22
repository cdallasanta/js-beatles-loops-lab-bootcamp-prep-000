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

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

johnLennonFacts(facts);