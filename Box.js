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
		this.colors = 255;
	}

	measure(){
		this.rectWidth = textWidth(this.word);
	}

	draw(){
		// fill(255);
		// fillBox();
		// if (mouseX > this.wordX && mouseX < this.rectWidth){
		// 	if (mouseY > this.wordY && mouseY < this.rectHeight){
		// 		if (mouseIsPressed){
		// 			fill(255,0,0);
		// 			console.log("YES");
		// 		}
		// 	}
		// }
		fill(this.colors);
		rect(this.wordX,this.wordY,
			 this.rectWidth,this.rectHeight);
				// fill(255);

		// this.wordX = this.rectWidth + 4;
		// this.wordX =  10;
		// this.wordX += 10;
		
	}

	fillBox(){
		if (mouseX > this.wordX  && 
			mouseX < (this.wordX + this.rectWidth)){
			if (mouseY > this.wordY &&
				mouseY < (this.wordY + this.rectHeight)){
				if (mouseIsPressed){
					//fill(255,0,0);
					this.colors = 100;
					// console.log(mouseIsPressed);
				}
			}
		}
		// print(mouseIsPressed);
	}
}