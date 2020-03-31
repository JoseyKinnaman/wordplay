$(document).ready(function () {
  var threePlus = [];
  var newSentence;
  $("#formOne").submit(function(event) {
    event.preventDefault();
    threePlus = []
    var sentence = $("input#sentence").val();
    console.log(sentence);
    var words = sentence.split(" ");
    console.log(words);
    
    for (i = 0; i <= words.length - 1; i++) {
      if (words[i].length >= 3) {
        threePlus.push(words[i]);
      }

    }
    
    newSentence = threePlus.reverse().join(" ");
    $("#output").text(newSentence);
   
    
  });
});

//words.forEach(function (word) {
  

  