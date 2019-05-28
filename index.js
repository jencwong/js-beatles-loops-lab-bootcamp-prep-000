// add solution here
function theBeatlesPlay(musicians, instruments){
  var phrases = [];
  for (var i = 0; i < musicians.length; i++) {
    phrases.push(musicians[i] + " plays " + instruments[i]);
  }
  return phrases;
}
  
function johnLennonFacts(facts){
  var newFacts = [];
  var i = 0;
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}
  
function iLoveTheBeatles(number){
  var newPhrase = [];
 function doWhileLoop(number){
   var i = 0;
   function incrementVariable(){
     i = 15 - i;
     return i;
   }
   do{ 
     console.log("I love the Beatles!");
   } while (incrementVariable()<15);
 } 
}  