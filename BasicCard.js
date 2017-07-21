 var count = 0;
 var inquirer = require("inquirer");
//module.exports = BasicCard;

function BasicCard(front, back){
	this.front = front;
	this.back  = back;
	this.printedCard = function (){
		console.log("Front: " + this.front + "\nBack: " + this.back);
	}
};

var createFlashcard = function() {
 console.log("FlashCard");

 inquirer.prompt([{
 		partialAns :"Who was the first president of the United States?",
 		backAns: "George Washington",
 		full: "George Washington was the first president of the United States."
	},{
		partialAns: "How many oscars did the Titanic movie got?",
		backAns: "eleven ",
		full: "Titanic won eleven oscars"
	},	{
		partialAns: "What is the name of the prison in the film The Rock?",
		backAns: "Alcatraz",
		full: "The Rock was filmed in Alcatraz prison"
		//END OF PROMPT
 	}]).then(function(answers) {
 		//var card = new FlashCard(answers.partialAns, answers.backAns, answers.fullAns);
 		//card.printedCard();
 		var input = answers.toLowerCase();
 // need a loop to control the questions
// add a counter to add the correct answers
// need to display error message when answer is wrong
// display the total number of correct answers  

 	});//end of answers
}//end createFlashcard


var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");
var questionTwo = new BasicCard("How many oscars did the Titanic movie got?", "eleven ");
var questionThree = new BasicCard("What is the name of the prison in the film The Rock?","Alcatraz");
var questionFour = new BasicCard("Who is the lead singer for the American rock band Pearl Jam?", "Eddie Vedder");
var questionFive = new BasicCard("What is the real name of the former wrestler turned actor who went by the ring name The Rock?", "Dwayne Douglas Johnson");


// "Who was the first president of the United States?"
console.log(firstPresident.front); 
console.log(questionTwo.front);
console.log(questionThree.front);
console.log(questionFour.front);
console.log(questionFive.front);

// " ... was the first president of the United States.
console.log(firstPresident.back); 
console.log(questionTwo.back);
console.log(questionThree.back);
console.log(questionFour.back);
console.log(questionFive.back);

