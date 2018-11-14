

$( document ).ready(function() {
    var Random = Math.floor(Math.random()*101+19)

    $('#theMagicNumber').text(Random);
});

    var stone1= Math.floor(Math.random()*11+1)
    var stone2= Math.floor(Math.random()*11+1)
    var stone3= Math.floor(Math.random()*11+1)
    var stone4= Math.floor(Math.random()*11+1)

    var totalScoreboard = 0;
    var wins = 0;
    var losses = 0;

    $('#wins').text(wins);
    $('#losses').text(losses);

    function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);

    }