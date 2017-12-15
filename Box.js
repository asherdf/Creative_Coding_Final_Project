//this class will be used to draw the "pixel" that's created
//	from the words

//measure the text WIDTH

class Box{
	constructor(words, xPos, yPos){
		this.word = words;
		this.rectHeight = 12;	//default text size in pixels
		this.nextLine = 15;	//default text leading in pixels
		this.wordX = xPos;	//the words' X-location
		this.wordY = yPos;	//the words' Y-location
		// this.rectWidth = textWidth(this.wordWidth);	

	}

	measure(){
		this.rectWidth = textWidth(this.word);
	}

	draw(){
		fill(255);
		rect(this.wordX,this.wordY,
			 this.rectWidth,this.rectHeight);

		// this.wordX = this.rectWidth + 4;
		// this.wordX =  10;
		// this.wordX += 10;
		
	}

	fillBox(){
		if (mouseX > this.wordX && mouseX < this.wordWidth){
			if (mouseY > this.wordY && mouseY < this.rectHeight){
				if (mouseIsPressed){
					fill(255,0,0);
				}
			}
		}
		// print(mouseIsPressed);
	}
}