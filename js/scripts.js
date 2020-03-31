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
    words.forEach(function (word) {
      if (word.length >= 3) {
        threePlus.push(word);
      }
    })
    newSentence = threePlus.reverse().join(" ");
    $("#output").text(newSentence);
   
    
  });
});