let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
];

//Update the score to the webpage find jane and getting his score
var Find_jane = data.find(function(values, index) {
    if(values.player == 'Jane')
        return true;
});
let score_jane = Find_jane.score;
document.getElementById("score").innerHTML =score_jane;

//On button click listen and update jane score to the data
document.getElementById("myBtn").addEventListener("click", function() {
    //Find jane
    let objIndex = data.findIndex((obj => obj.player == 'Jane'));
    if(objIndex != null){ 
       let jane_values = data[objIndex];
       let old_score = jane_values.score;
       let new_score = old_score + 1;
       data[objIndex].score = new_score;
       document.getElementById("score").innerHTML = new_score;
       //console.log(data);
    }
});
