//this class will be used to draw the "pixel" that's created
//	from the words

class Box{
	constructor(words, xPos, yPos){
		this.word = words;
		this.rectHeight = 12;	//Default text size in pixels
								//This will remain constant
		this.nextLine = 15;	//Default text leading in pixels
							//This will remain constant
		this.wordX = xPos;	//The words' X-location
		this.wordY = yPos;	//The words' Y-location	
		this.colors = 255;	//Set the default color to white
	}

	//Establish the width of a rectangle as the width of 
	//	the word it's measuring
	measure(){
		// this.rectWidth = textWidth(this.word);
	}

	//Determines the location and dimentions of the box
	draw(){	

		this.rectWidth = textWidth(this.word);
		
		//Set the default fill to white
		fill(this.colors);

		//Draw the rectangle at words' X and Y position
		//Draw the rectangle with the words' width
		rect(this.wordX,this.wordY,
			 this.rectWidth,this.rectHeight);		
	}

	//Determines if the box is to be filled with a new color
	fillBox(){
		//Check if mouse is within the box's X bounds
		if (mouseX > this.wordX  && 
			mouseX < (this.wordX + this.rectWidth)){

			//Check if mouse is within the box's Y bounds
			if (mouseY > this.wordY &&
				mouseY < (this.wordY + this.rectHeight)){

				//Check if mouse is pressed
				// if (mouseIsPressed){

					//Set the fill to the color from the GUI
					this.colors = fillColor;
					// console.log(mouseIsPressed);
				// }
			}
		}
		// print(mouseIsPressed);
	}
}