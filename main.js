// dependency for inquirer npm package
var inquirer = require("inquirer");
var Cloze = require("./Clozecard");
var fs = require("fs");
var basic = require("./BasicCard.js");

var holdCards = [];
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
 		var card = new FlashCard(answers.partialAns, answers.backAns, answers.fullAns);
 		card.printedCard();
 	})//end of answers
};//end createFlashcard

 
