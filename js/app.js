$(function(){

  //Basic variables
  //Screens
  var startBox = $("#start");
  var gameBox = $("#game");
  var endBox = $("#end");

  //Buttons
  var startButton = $(".pig-place");
  var rollButton = $(".roll");
  var holdButton = $(".hold");

  //Other
  var dice = $("img.dice");
  var score0 = $("#score-0");
  var score1 = $("#score-1");
  var current0 = $("#current-0");
  var current1 = $("#current-1");
  var name0 = $("#name-0");
  var name1 = $("#name-1");
  var player0Panel = $(".player-0-panel");
  var player1Panel = $(".player-1-panel");

  var scores, roundScore, activePlayer;

  //Start button
  startButton.on("click",function(){
    startBox.hide();
    gameBox.show();
    newGame();
  });

  rollButton.on("click",function(){
    console.log("RollButton is clicked!")
  })

  holdButton.on("click",function(){
    console.log("HoldButton is clicked!")
  })


  function newGame(){
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    dice.hide();
    score0.innerText = "0";
    score1.innerText = "0";
    current0.innerText = "0";
    current1.innerText = "0";
    name0.innerText = "Player 1";
    name1.innerText = "Player 2";
    player0Panel.removeClass("active");
    player1Panel.removeClass("active");
    player0Panel.addClass("active");
  }



  // button.on("click", function(){
  //   gameBox.css("display", "none");
  //   endBox.css("display", "block");
  // })


});
