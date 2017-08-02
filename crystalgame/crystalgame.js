var randomNum = Math.floor(Math.random() * 101 + 19);
var crystal1 = Math.floor(Math.random() * (12 - 1)) + 1;
var crystal2 = Math.floor(Math.random() * (12 - 1)) + 1;
var crystal3 = Math.floor(Math.random() * (12 - 1)) + 1;
var crystal4 = Math.floor(Math.random() * (12 - 1)) + 1;
var totalscore = 0;
var wins = 0;
var losses = 0;
$("#randomNumber").html(randomNum);

function restart(){
	randomNum = Math.floor(Math.random() * 101 + 19);
	crystal1 = Math.floor(Math.random() * (12 - 1)) + 1;
	crystal2 = Math.floor(Math.random() * (12 - 1)) + 1;
	crystal3 = Math.floor(Math.random() * (12 - 1)) + 1;
	crystal4 = Math.floor(Math.random() * (12 - 1)) + 1;
	totalscore = 0;
	$("#randomNumber").html(randomNum);
	$("#userScore").html(totalscore);


}

$("#crystal1").on("click", function(){
	totalscore = crystal1 + totalscore;
	$("#userScore").html(totalscore);
	if(totalscore === randomNum){
		wins++;
		$("#wins").html("Wins: " + wins);
		restart();
	}
	if(totalscore > randomNum){
		losses++;
		$("#losses").html("losses: " + losses);
		restart();

	}

})

$("#crystal2").on("click", function(){
	totalscore = crystal2 + totalscore;
	$("#userScore").html(totalscore);
	if(totalscore === randomNum){
		wins++;
		$("#wins").html("Wins: " + wins);
		restart();
	}
	if(totalscore > randomNum){
		losses++;
		$("#losses").html("losses: " + losses);
		restart();
	}

})

$("#crystal3").on("click", function(){
	totalscore = crystal3 + totalscore;
	$("#userScore").html(totalscore);
	if(totalscore === randomNum){
		wins++;
		$("#wins").html("Wins: " + wins);
		restart();
	}
	if(totalscore > randomNum){
		losses++;
		$("#losses").html("losses: " + losses);
		restart();
	}

})

$("#crystal4").on("click", function(){
	totalscore = crystal4 + totalscore;
	$("#userScore").html(totalscore);
	if(totalscore === randomNum){
		wins++;
		$("#wins").html("Wins: " + wins);
		restart();
	}
	if(totalscore > randomNum){
		losses++;
		$("#losses").html("losses: " + losses);
		restart();
	}

})


































