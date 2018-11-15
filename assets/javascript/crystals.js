var Random = Math.floor(Math.random() * 101) + 19;

$(".magicNumber").text(Random);


var stone1 = Math.floor(Math.random() * 11) + 1;
var stone2 = Math.floor(Math.random() * 11) + 1;
var stone3 = Math.floor(Math.random() * 11) + 1;
var stone4 = Math.floor(Math.random() * 11) + 1;

var currentScore = 0;
var wins = 0;
var losses = 0;

$(".wins").text(wins);
$(".losses").text(losses);

function reset() {
  Random = Math.floor(Math.random() * 101) + 19;
  console.log(Random);
  $(".magicNumber").text(Random);
  stone1 = Math.floor(Math.random() * 11) + 1;
  stone2 = Math.floor(Math.random() * 11) + 1;
  stone3 = Math.floor(Math.random() * 11) + 1;
  stone4 = Math.floor(Math.random() * 11) + 1;
  currentScore = 0;
  $("#totalScoreboard").text(currentScore);
}

function excelsior() {
 alert("Excelsior!");
  wins++;
  $(".wins").text(wins);
  reset();
}

function endIsNear() {
 alert("THE END IS NEAR!");
  losses++;
  $(".losses").text(losses);
  reset();
}

$(document).ready(function() {

$(".stone1").on("click", function() {
  currentScore = currentScore + stone1;
  console.log("New currentScore= " + currentScore);
  $(".totalScoreboard").text(currentScore);

  if (currentScore == Random) {
    excelsior();
  } else if (currentScore > Random) {
    endIsNear();
  }
});

$(".stone2").on("click", function() {
    currentScore = currentScore + stone2;
    console.log("New currentScore= " + currentScore);
    $(".totalScoreboard").text(currentScore);
  
    if (currentScore == Random) {
      excelsior();
    } else if (currentScore > Random) {
      endIsNear();
    }
  });

  $(".stone3").on("click", function() {
    currentScore = currentScore + stone3;
    console.log("New currentScore= " + currentScore);
    $(".totalScoreboard").text(currentScore);
  
    if (currentScore == Random) {
      excelsior();
    } else if (currentScore > Random) {
      endIsNear();
    }
  });

  $(".stone4").on("click", function() {
    currentScore = currentScore + stone4;
    console.log("New currentScore= " + currentScore);
    $(".totalScoreboard").text(currentScore);
  
    if (currentScore == Random) {
      excelsior();
    } else if (currentScore > Random) {
      endIsNear();
    }
  });

});