$(function(){

  //Basic variables
  //Screens
  var startBox = $("#start");
  var namesBox = $("#names");
  var gameBox = $("#game");
  var endBox = $("#end");

  //Buttons
  var startButton = $(".pig-place");
  var checkNameButton = $(".check-name");
  var rollButton = $(".roll");
  var holdButton = $(".hold");
  var playAgainButton = $(".play-again");

  //Other
  var errorMessage = $(".error-message");
  var dicePicture = $("img.dice");
  var score0 = $("#score-0");
  var score1 = $("#score-1");
  var current0 = $("#current-0");
  var current1 = $("#current-1");
  var name0 = $("#name-0");
  var name1 = $("#name-1");
  var pigEar1 = $(".pig-ear1");
  var pigEar2 = $(".pig-ear2");
  var pigEye1 = $(".pig-eye1-dot");
  var pigEye2 = $(".pig-eye2-dot");
  var pigTail = $(".pig-tail");
  var winnerNameInterval;

  //Numeral
  var diceNumber, scores, roundScore, activePlayer;


  startButton.on("click",function(){
    startBox.hide();
    namesBox.show();
  });

  startButton.on("mouseenter", function(){
    pigEar1.addClass("ear-up");
    pigEar2.addClass("ear-up");
    pigEye1.addClass("eye-dot-up");
    pigEye2.addClass("eye-dot-up");
    pigTail.addClass("tail-down");
  });

  startButton.on("mouseleave", function(){
    pigEar1.removeClass("ear-up");
    pigEar2.removeClass("ear-up");
    pigEye1.removeClass("eye-dot-up");
    pigEye2.removeClass("eye-dot-up");
    pigTail.removeClass("tail-down");
  });

  checkNameButton.on("click",function(){
    console.log("checkNameButton clicked!");
    if(($(".first-player-name").val()!="")&&($(".second-player-name").val()!="")){
      namesBox.hide();
      gameBox.show();
      newGame();
    }else{
      $(".error-message").addClass("error-color");
    }
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
        document.querySelector(".winner-name").innerText = document.getElementById('name-0').innerText;
      }else{
        document.querySelector(".winner-name").innerText = document.getElementById('name-1').innerText;
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
    // var firstPlayerName = $("input.first-player-name").val();
    // console.log(firstPlayerName);name0.innerText = "Player 1";
    document.getElementById('name-0').innerText = $("input.first-player-name").val();
    document.getElementById('name-1').innerText = $("input.second-player-name").val();
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
