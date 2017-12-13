var boxWidth;
var boxHeight;
var poemLines;	//this is gonna hold the text file

var testText = "Please,excuse.my!dear?aunt-sally";

function preload(){
	
	//load the text file into an array based on lines in the
	//	original:
	poemLines = loadStrings('Shel_Silverstein.txt');

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

	var splitString = splitTokens(testText, " ,.!?-");
	for (i = 0; i < testText.length; i++){
		text(splitString[i], 5, 30 + (i*20));
	}
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
function scrub(){	//this generates a "cooked text file"

	//how many lines are there?
	console.log("there are " + poemLines.length + " lines!");

	var bigSTRING = ""; //the WHOLE POEM in one HUGE STRING
	
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
// ------------------------
	// var alicelines; // this is gonna hold the text file

	// // you load text files in preload() just like images
	// function preload() {
	//   // ignore the bullshit error that happens when you do this:
	//   // load the text file into an array based on lines in the original:
	//   alicelines = loadStrings('./data/aliceinwonderland.txt');
	  
	// }

	//function setup() {

	  // //console.log(alicelines); // print out the whole damn thing as an array
	  // console.log("there are " + alicelines.length + " lines!"); // how many lines?

	  // var bigstring = ""; // the WHOLE BOOK in one HUGE STRING
	  // // concatenate whole book into one string:
	  // for (var i = 0; i<alicelines.length; i++)
	  // {
	  //   //console.log(i);
	  //   bigstring+=alicelines[i]+" ";
	  // }

	  // this is the whole original book:
	  //console.log(bigstring);
	  
	  
	  // this is how this works:
	  // this is a regular expression that replaces
	  // every instance of the word Rabbit with the word
	  // Fox.  the / / are the boundaries of the search string.
	  // the 'g' at the end means 'global', which will replace
	  // *every* instance of 'Rabbit' with 'Fox'.
	  //
	  // there's a good regex cheat sheet here:
	  // http://atarininja.org/~wxs/dump/ref/reference.html
	  //
	  
	  // TEST: replace Rabbit with Fox:
	  //bigstring = bigstring.replace(/Rabbit/g, "Fox");


	  // regular expressions can be ranges:
	  //bigstring = bigstring.replace(/[A-G]/g, "#");
	  //bigstring = bigstring.replace(/[H-K]/g, "!");
	  //bigstring = bigstring.replace(/[L-Z]/g, "&");
	  //bigstring = bigstring.replace(/[a-z]/g, "%");

	  
	  // // strip all punctuation (regex):
	  // // the ^ character is a negation
	  // // the [] say we're talking regular expression-eese, not literal strings
	  // // you still start and end with / characters and slap a 'g' on the end.
	  // bigstring = bigstring.replace(/[^a-zA-Z0-9' ]/g, " ");

	  // fix apostrophe catastrophe
	  // bigstring = bigstring.replace(/ '/g, " "); // apostrophe at beginning
	  // bigstring = bigstring.replace(/' /g, " "); // apostrophe at end

	  // // move to lowercase
	  // // bigstring = bigstring.toUpperCase();
	  // bigstring = bigstring.toLowerCase();

	  // // strip leading and extra whitespace (regex):
	  // // a + will take into account repeats
	  // bigstring = bigstring.replace(/ +/g, " ");
	  // bigstring = bigstring.trim();

	  // view:
	  // console.log(bigstring);

	//   // the split will cut a string into an array of substrings
	//   // based on a matching pattern:
	//   var chapters = bigstring.split(/chapter [a-z]+/);
	//   // how many chapters?
	//   console.log("there are " + chapters.length + " chapters!");
	  
	//   // one last strip of whitespace
	//   for(var i = 0;i<chapters.length;i++)
	//   {
	//     chapters[i] = chapters[i].trim();
	//   }
	  

	//   // step 4: output a "cooked" text file
	//   // write line-by-line:
	//   saveStrings(chapters, 'alice_cooked.txt');

	//}
}