var questions = [
	'Is my favorite color red?',
	'Am I from Seattle?',
	'Am I younger than 25?'
];

var answers = [
	'y',
	'yes',
	'n',
	'no'
];

var questionOne = prompt(questions[0]);
questionOne = questionOne.toLowerCase();
if(questionOne === answers[0] || questionOne === answers[1]) {
	console.log("Guess 1 is: " + questionOne);
	document.getElementById('q1').innerHTML = "You guessed " + questionOne + "! You were right :) My favorite color is red!";
} else {
	console.log("Guess 1 is: " + questionOne);
	document.getElementById('q1').innerHTML = "You guessed " + questionOne + "! You were wrong :(";
}

var questionTwo = prompt(questions[1]);
questionTwo = questionTwo.toLowerCase();
if(questionTwo === answers[0] || questionTwo === answers[1]) {
	console.log("Guess 2 is: " + questionTwo);
  	document.getElementById('q2').innerHTML = "You guessed " + questionTwo + "! You were right :) I am from Seattle!";
} else {
	console.log("Guess 2 is: " + questionTwo);
	document.getElementById('q2').innerHTML = "You guessed " + questionTwo + ". You were wrong :(";
}

var questionThree = prompt(questions[2]);
questionThree = questionThree.toLowerCase();
if(questionThree === answers[2] || questionThree === answers[3]) {
	console.log("Guess 3 is: " + questionThree);
  	document.getElementById('q3').innerHTML = "You guessed " + questionThree + "! You were right :) I am actually 26!";
} else {
	console.log("Guess 3 is: " + questionThree);
	document.getElementById('q3').innerHTML = "You guessed " + questionThree + ". You were wrong :( I am actually 26.";
}
