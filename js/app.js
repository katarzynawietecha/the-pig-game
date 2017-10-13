$(function(){

  var startBox = $("#start");
  var gameBox = $("#game");
  var endBox = $("#end");
  var startGameButton = $("div.pig-place");
  var button = $("button");

  startGameButton.on("click",function(){
    startBox.css("display", "none");
    gameBox.css("display", "block");
  });

  // button.on("click", function(){
  //   gameBox.css("display", "none");
  //   endBox.css("display", "block");
  // })


});
