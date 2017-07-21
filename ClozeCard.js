
//Clozecard.prototype = function();
//module.exports = ClozeCard; 

function Clozecard(text, cloze){
	this.text  = text;
	this.cloze = cloze;
	this.partial = function(){
		console.log("..." + this.text);
	};
	this.fullText = function(){
		console.log(text + " " + cloze);
	};
};


var firstPresidentCloze = new Clozecard("George Washington was the first president of the United States.", "George Washington");
var questionTwo = new Clozecard("How many oscars did the Titanic movie got?", "eleven ");
var questionThree = new Clozecard("What is the name of the prison in the film The Rock?","Alcatraz");
var questionFour = new Clozecard("Who is the lead singer for the American rock band Pearl Jam?", "Eddie Vedder");
var questionFive = new Clozecard("What is the real name of the former wrestler turned actor who went by the ring name The Rock?", "Dwayne Douglas Johnson");



// "George Washington"
console.log(firstPresidentCloze.cloze); 
console.log(questionTwo.cloze);
console.log(questionThree.cloze);
console.log(questionFour.cloze);
console.log(questionFive.cloze);

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); 
console.log(questionTwo.partial);
console.log(questionThree.partial);
console.log(questionFour.partial);
console.log(questionFive.partial);
// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);
console.log(questionTwo.fullText);
console.log(questionThree.fullText);
console.log(questionFour.fullText);
console.log(questionFive.fullText);
// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new Clozecard("This doesn't work", "oops");