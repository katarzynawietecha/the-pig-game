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
  var playAgainButton = $(".play-again");

  //Other
  var dicePicture = $("img.dice");
  var score0 = $("#score-0");
  var score1 = $("#score-1");
  var current0 = $("#current-0");
  var current1 = $("#current-1");
  var name0 = $("#name-0");
  var name1 = $("#name-1");
  var winnerNameInterval;

  //Numeral
  var diceNumber, scores, roundScore, activePlayer;


  startButton.on("click",function(){
    startBox.hide();
    gameBox.show();
    newGame();
  });


  rollButton.on("click",function(){
    //Roll dice and display
    diceNumber = Math.floor(Math.random()*6)+1;
    dicePicture.show();
    dicePicture.attr("src", "images/dice-"+diceNumber+".png");

    if( diceNumber !== 1){ //IF the number is NOT "1": update round score
      roundScore += diceNumber;
      if(activePlayer == 0){
        // current0.innerText = roundScore; - it's not working
        document.getElementById('current-0').innerText = roundScore;
      }else{
        // current1.innerText = roundScore; - it's not working
        document.getElementById('current-1').innerText = roundScore;
      }
    }else{  //IF the number is "1": next player
      nextPlayer()
    }
  });


  holdButton.on("click",function(){
    //Add current score do global score
    scores[activePlayer] +=roundScore;
    //Update user's global score
    document.getElementById('score-'+activePlayer).innerText = scores[activePlayer];

    //Check if active player won the game
    if(scores[activePlayer] >= 40){
      var winnerName = $(".winner-name");
      if(activePlayer == 0){
        winnerName.innerText = name0.innerText;
        // document.querySelector(".winner-name").innerText = name0.innerText;
      }else{
        winnerName.innerText = name1.innerText;
        // document.querySelector(".winner-name").innerText = name0.innerText;
      }
      winnerNameInterval = setInterval(function () {
        winnerName.toggleClass("effect1");
        winnerName.toggleClass("effect2");
      }, 800);

      gameBox.hide();
      endBox.show();
    }else{
      nextPlayer()
    }
  });


  playAgainButton.on("click",function(){
    endBox.hide();
    gameBox.show();
    clearInterval(winnerNameInterval);
    newGame();
  });


  function newGame(){
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    dicePicture.hide();
    document.getElementById('score-0').innerText = "0";
    document.getElementById('score-1').innerText = "0";
    document.getElementById('current-0').innerText = "0";
    document.getElementById('current-1').innerText = "0";
    name0.innerText = "Player 1";
    name1.innerText = "Player 2";
    name0.removeClass("active");
    name1.removeClass("active");
    name0.addClass("active");
  }

  function nextPlayer(){
    //next player will be active
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    name0.toggleClass("active");
    name1.toggleClass("active");

    roundScore = 0;
    document.getElementById('current-0').innerText = 0;
    document.getElementById('current-1').innerText = 0;

    if(diceNumber == 1){
      dicePicture.hide("fast");
    }else{
      dicePicture.hide();
    }
  }

});
