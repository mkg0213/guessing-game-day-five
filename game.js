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
	document.getElementById('correct1').innerHTML = "You guessed " + questionOne + "! You were right :) My favorite color is red (much like Tedd's cowboy boots)!";
	document.getElementById('image1').innerHTML = '<div><img src="http://www.hercampus.com/sites/default/files/styles/full_width_embed/public/2014/03/27/Red%20cowboy%20boots.jpg?itok=67dXqRY3" alt="Red cowboy boots" width="200" height="135" /></div>';
} else {
	console.log("Guess 1 is: " + questionOne);
	document.getElementById('incorrect1').innerHTML = "You guessed " + questionOne + "! You were wrong :(";
}

var questionTwo = prompt(questions[1]);
questionTwo = questionTwo.toLowerCase();
if(questionTwo === answers[0] || questionTwo === answers[1]) {
	console.log("Guess 2 is: " + questionTwo);
  	document.getElementById('correct2').innerHTML = "You guessed " + questionTwo + "! You were right :) I am from Seattle! Here's a pretty picture of it!";
	document.getElementById('image2').innerHTML = '<div><img src="http://www.socialventurepartners.org/seattle/wp-content/uploads/sites/40/2013/06/shutterstock_137180738.jpg" alt="Seattle Skyline" width="200" height="80" /></div>';
} else {
	console.log("Guess 2 is: " + questionTwo);
	document.getElementById('incorrect2').innerHTML = "You guessed " + questionTwo + ". You were wrong :(";
}

var questionThree = prompt(questions[2]);
questionThree = questionThree.toLowerCase();
if(questionThree === answers[2] || questionThree === answers[3]) {
	console.log("Guess 3 is: " + questionThree);
  	document.getElementById('correct3').innerHTML = "You guessed " + questionThree + "! You were right :) I am actually 26! This was my Halloween costume this year!";
	document.getElementById('image3').innerHTML = '<div><img src="https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xtp1/v/t1.0-9/11260783_10205329939559758_5326235292908423515_n.jpg?oh=4f7c559266a5277cb08e296771ad0e71&oe=56BFB30E" alt="Mary" width="200" height="200" /></div>';
} else {
	console.log("Guess 3 is: " + questionThree);
	document.getElementById('incorrect3').innerHTML = "You guessed " + questionThree + ". You were wrong :( I am actually 26.";
}