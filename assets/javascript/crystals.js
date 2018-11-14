

$( document ).ready(function() {
    var Random = Math.floor(Math.random()*101+19)

    $('#magicNumber').text(Random);
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
        $('#magicNumber').text(Random);
        stone1= Math.floor(Math.random()*11+1);
        stone2= Math.floor(Math.random()*11+1);
        stone3= Math.floor(Math.random()*11+1);
        stone4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#totalScoreboard').text(userTotal);
        } 
    
        function excelsior(){
            alert("Excelsior!");
              wins++; 
              $('#wins').text(wins);
              reset();
            }

        function endIsNear() {
            alert("THE END IS NEAR!");
            losses++;
            $('#losses').text(losses);
            reset();
        }