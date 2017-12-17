/*
The purpose of this code is to create an array of pixels, based
the length and position of words from a given piece of text,
that the user can fill in from a GUI

It also displays the word count and plays a tune from the
source material
*/

var textLines;	//this is gonna hold the text file
var boxArray = [];
var bigSTRING = "";
var splitString;

var fillColor = [180, 180, 255];	//starting color to fill in the boxes

//Load the Harry Potter text, font, and audio file before
//	doing anything
function preload(){	
	textLines = loadStrings('Text/HPch1.txt');
	hpFont = loadFont('Font/harry_p/HARRYP__.ttf');
	hpJingle = loadSound('HarryPotter_HedwigsTheme_Short.wav');
}

//---------------------------------------------------------------
function setup() {

	//Make the canvas extend to the entire length and width
	//	of the browser window
	createCanvas(windowWidth,windowHeight);
	background(0);

	// Create the color GUI
	gui = createGui('Ashers GUI');
	gui.addGlobals('fillColor');
	
	//Scrub the text file so there's no punctuation, all
	//	the letters are lower case, and eliminate
	//	unnecessary white space
	scrub();

	//search the string "bigSTRING" and break it up every time
	//	whitespace is found. Store that word in the variable
	//	"splitString"
	//"\s" is regex for whitespace
	splitString = bigSTRING.split(/\s/);
	
	//how many words are there in "splitString?"
	// console.log (splitString.length);

	var xPos = 0;	//starting X position for the boxes
	var yPos = 125;	//starting Y position for the boxes

	//Make each element in the boxArray of class type Box
	for (i = 0; i < splitString.length; i++){
		boxArray[i] = new Box(splitString[i], xPos, yPos);
		// console.log(splitString[i]);

		//Make the next box's X position the length of the previous
		//	box + 4 to account for the space between the words in
		//	the original text
		xPos += textWidth(splitString[i]) + 4;

		//If the box extends off the screen, set its X location
		//	to 0 and shift it down one line
		if ((xPos + textWidth(splitString[i])) > width){
			yPos += 15;
			xPos = 0;
		}
	}

	//Text description on the screen
	var normalFont = textFont();
	var theBeginning = "The first ";
	var theNumber = splitString.length;
	var theAfter = " words from ";
	var theBook = "Harry Potter and the Sorcerer's Stone";

	//"The first "
	textSize(32);
	text(theBeginning, width/4, 50);
	//"The first 403"
	fill(0,255,0);
	text(theNumber, (width/4)+textWidth(theBeginning), 50);
	//"The first 403 words from "
	fill(255);
	text(theAfter, (width/4)+(textWidth(theBeginning + theNumber)), 50);	
	//"The first 403 words from Harry Potter and the Sorcerer's Stone"
	//Change the last bit to Harry Potter font
	textFont(hpFont);
	textSize(38);
	text(theBook, (width/4)+(textWidth(theBeginning + theNumber + theAfter))+40, 50);
	//Change the font type and size back to normal to measure
	//	the boxes
	textFont(normalFont);
	textSize(12);

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

	//Make sure the fill of a box is based on the color selected
	//	from the GUI
	fill(fillColor);

	//Display all the boxes in boxArray
	for (i = 0; i < boxArray.length; i++){
		boxArray[i].measure();
		boxArray[i].fillBox();
		boxArray[i].draw();
	}

	//Play the Harry Potter jingle when the program opens
	hpJingle.play();
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
	// console.log("there are " + textLines.length + " lines!");

	//the WHOLE POEM in one HUGE STRING
	//var bigSTRING = "";
	
	//concatenate whole book into one string:
	for (var i = 0; i<textLines.length; i++){
		bigSTRING+=textLines[i]+" ";
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