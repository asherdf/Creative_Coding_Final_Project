var poemLines;	//this is gonna hold the text file
var boxArray = [];
var bigSTRING = "";
var splitString;

var testText = "Please,excuse.my!dear?aunt-sally";

var fillColor = [180, 255, 255];

function preload(){
	
	poemLines = loadStrings('Shel_Silverstein.txt');
	// potterLines = loadStrings('HarryPotter_SS.txt');

}

//---------------------------------------------------------------
function setup() { 
	createCanvas(windowWidth,windowHeight);
	background(0);

	gui = createGui('Ashers GUI');
	gui.addGlobals('fillColor');
	
	scrub();

	//search the string "bigSTRING" and break it up every time
	//	whitespace is found. Store that word in the variable
	//	"splitString"
	//"\s" is regex for whitespace
	splitString = bigSTRING.split(/\s/);
	//how many words are there in "splitString?"
	// console.log (splitString.length);

	fill(255);
	//fontSize(12);
	// text(poemLines, 0, 0, width, height);

	var xPos = 0;	//starting X position for the boxes
	var yPos = 0;	//starting Y position for the boxes

	for (i = 0; i < splitString.length; i++){
		boxArray[i] = new Box(splitString[i], xPos, yPos);
		// console.log(splitString[i]);
		xPos += textWidth(splitString[i]) + 4;
		if ((xPos + textWidth(splitString[i])) > width){
			yPos += 15;
			xPos = 0;
		}
	}

	for(i=0; i<boxArray.length; i++){
		// text(boxArray[i],0,10);
		//console.log(boxArray[i]);
	}

	/*
	//Discover the text's DEFAULT Ascent, Descent, Leading,
	//	and Size values
	var wordHeight = textAscent();
	var wordDepth = textDescent();
	var wordLeading = textLeading();
	var wordSize = textSize();
	console.log("Text Ascent = " + wordHeight);
	console.log("Text Descent = " + wordDepth);
	console.log("Text Leading = " + wordLeading);
	console.log("Text Size = " + wordSize);
	*/
}

//---------------------------------------------------------------
function draw() {
	// background(0);
	// console.log(mouseX);
	// fill(255);
	
	// scale(0.5);

	for (i = 0; i < boxArray.length; i++){
		boxArray[i].measure();
		boxArray[i].fillBox();
		boxArray[i].draw();
	}
	// print(mouseIsPressed);

	// wordArray();
	// text(bigSTRING,0,5);

}

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
	// console.log("there are " + poemLines.length + " lines!");

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

	//change to lowercase
	bigSTRING = bigSTRING.toLowerCase();

	//strip leading and extra whitespace (regex):
	//a + will take into account repeats
	bigSTRING = bigSTRING.replace(/ +/g, " ");

	//removes whitespace characters from the beginning
	//	and end of the string
	bigSTRING = bigSTRING.trim();

	// console.log(bigSTRING);

	// the split will cut a string into an array of substrings
	// based on a matching pattern:
	var chapters = bigSTRING.split(/chapter [a-z]+/);
	// how many chapters?
	// console.log("there are " + chapters.length + " chapters!");
	  
	// one last strip of whitespace
	for(var i = 0;i<chapters.length;i++)
	{
	  chapters[i] = chapters[i].trim();
	}
	  

	// step 4: output a "cooked" text file
	// write line-by-line:
	// saveStrings(chapters, 'alice_cooked.txt');
}