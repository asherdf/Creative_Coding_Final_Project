function preload(){
	poem = loadStrings('Shel_Silverstein.txt');
}

//---------------------------------------------------------------
function setup() { 
	createCanvas(1000,800);
	//text(poem, width/2, height/2, 80, 80);
}

//---------------------------------------------------------------
function draw() {
	background(0);
	fill(255);
	text(poem, 0,0, width, height);
}