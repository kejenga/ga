//math.random()

//click a button
//get a corresponding computer response
//clicking any button results in a computer response - event
//but need to know which button you clicked - console.log
//compare the values and if one is higher than the other
//add one point to the score point
//update the text beneath the scoreboard (status)

var d = document;

var rockButton = d.getElementById("rock"),
	paperButton = d.getElementById("paper"),
	scissorsButton = d.getElementById("scissors");


rockButton.onclick = function() {
	console.log(rockChosen)
}

//rockChosen = update status