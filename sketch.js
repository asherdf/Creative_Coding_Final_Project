var boxWidth;
var boxHeight;
var poemLines;	//this is gonna hold the text file
var anArray = [];
var bigSTRING = "";

var testText = "Please,excuse.my!dear?aunt-sally";

function preload(){
	
	//load the text file into an array based on lines in the
	//	original:
	poemLines = loadStrings('Shel_Silverstein.txt');
	// potterLines = loadStrings('HarryPotter_SS.txt');

}

//---------------------------------------------------------------
function setup() { 
	createCanvas(1000,800);

	scrub();

	//text(poem, width/2, height/2, 80, 80);

	// var boxWidth = textWidth(poem);
	// var boxHeight;
}

//---------------------------------------------------------------
function draw() {
	background(0);
	fill(255);

	wordArray();

	// var splitString = splitTokens(poemLines, " ,.!?-");
	// for (i = 0; i < poemLines.length; i++){
	// 	anArray[i] = new Array();
	// 	text(splitString[i], 5, 30 + (i*20));
	// }
	// text(splitString[0], 5, 30);
	// text(splitString[1], 5, 50);
	// text(splitString[2], 5, 70);

	// text(poem, 0,0, width,height);

	// boxWidth = textWidth(poem);
	// boxHeight = 10;
	// rect(0,0, boxWidth*10,boxHeight);


}


/*
textSize()
https://p5js.org/reference/#/p5/textSize

textWidth()
https://p5js.org/reference/#/p5/textWidth

loadStrings()
https://p5js.org/reference/#/p5/loadStrings

textDescent()
https://p5js.org/reference/#/p5/textDescent

textAscent()
https://p5js.org/reference/#/p5/textAscent

split()
https://p5js.org/reference/#/p5/split

splitTokens()
https://p5js.org/reference/#/p5/splitTokens
*/

//--------------------------------------------------------------
//this is modeled after Luke's code (class8 / 01prepalice)
function scrub(){
//this generates a "cooked" text file whereby the entire text
//	is analyzed and changed, and information about the original
//	text file is displayed in the console. 
//		- It will change all Uppercase letters to Lowercase
//		- All punctuation is removed
//		- All whitespace is removed
//		- How many lines are there in the original text file?
//		- How many chapters are there in the original text file?

	//how many lines are there?
	console.log("there are " + poemLines.length + " lines!");

	//the WHOLE POEM in one HUGE STRING
	//var bigSTRING = "";
	
	//concatenate whole book into one string:
	for (var i = 0; i<poemLines.length; i++){
		bigSTRING+=poemLines[i]+" ";
	}

	//strip all punctuation (regex):
	//the ^ character is a negation
	//the [] say we're talking regular expression-eese, not
	//	literal strings
	//you still start and end with / characters and slap a 'g'
	//	on the end.
	bigSTRING = bigSTRING.replace(/[^a-zA-Z0-9' ]/g, " ");

	//address any apostrophe at beginning
	bigSTRING = bigSTRING.replace(/ '/g, " ");

	//address any apostrophe at end 
	bigSTRING = bigSTRING.replace(/' /g, " "); 

	//move to lowercase
	bigSTRING = bigSTRING.toLowerCase();

	//strip leading and extra whitespace (regex):
	//a + will take into account repeats
	bigSTRING = bigSTRING.replace(/ +/g, " ");

	//removes whitespace characters from the beginning
	//	and end of the string
	bigSTRING = bigSTRING.trim();

	console.log(bigSTRING);

	// the split will cut a string into an array of substrings
	// based on a matching pattern:
	var chapters = bigSTRING.split(/chapter [a-z]+/);
	// how many chapters?
	console.log("there are " + chapters.length + " chapters!");
	  
	// one last strip of whitespace
	for(var i = 0;i<chapters.length;i++)
	{
	  chapters[i] = chapters[i].trim();
	}
	  

	// step 4: output a "cooked" text file
	// write line-by-line:
	// saveStrings(chapters, 'alice_cooked.txt');
}

//----------------------------------------------------------------
function wordArray(){
//create an array where each index is a single word
	
	//search the string "bigSTRING" and break it up every time
	//	whitespace is found. Store that word in the variable
	//	"splitString"
	var splitString = bigSTRING.split(/\s/);
	
	//how many words are there in "splitString?"
	console.log (splitString.length); 

	for (i = 0; i < splitString.length; i++){		
		anArray[i] = splitString[i];
		// text(anArray[i], 5, 30 + (i*20));
		text(anArray[i] + " ", 0, 10);
	}
}