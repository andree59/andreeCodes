function myFunction(){
  var x = document.getElementById('textBox').value;
  var avergeWords = 0;
  var spaceCounter = 0;
  var sentenceCounter = 0;
  var wordCounter = 1;

for(var i = 0; i <= x.length; i++){
  if(x[i] == " "){
  spaceCounter++;
  wordCounter++;
  }
  if( x[i] == "." || x[i] == "?" || x[i] == "!"){
    sentenceCounter++;
  }
}
avergeWords = wordCounter/sentenceCounter;
document.getElementById('row1').innerHTML = "there are an average of " + avergeWords + " per sentence. ";
document.getElementById('row2').innerHTML = "there are  " + spaceCounter + " spaces total. ";
document.getElementById('row3').innerHTML = "there are  " + sentenceCounter + " sentences total. ";
document.getElementById('row4').innerHTML = "there are  " + wordCounter + " words total. ";
}
