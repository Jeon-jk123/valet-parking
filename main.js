Canvas=document.getElementById("Canvas");
ctx=Canvas.getContext("2d");

width=90;
height=130;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
xposition=60;
yposition=60;

function add() {
	backimg=new Image();
	backimg.src="parkingLot.jpg";
	backimg.onload=uploadBackground;

	gcar=new Image();
	gcar.src="car2.png";
	gcar.onload=uploadgreencar;
}

function uploadBackground() {
	ctx.drawImage(backimg,0,0,Canvas.width,Canvas.height);
}

function uploadgreencar() {
    ctx.drawImage(gcar,xposition,yposition,width,height);	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	
		if (yposition >=0) {
			  yposition=yposition-10;
			  console.log("xposition of the rover is,"+xposition+"yposition of the rover is"+yposition);
			  uploadBackground();
			  uploadgreencar();
		}
		
}

function down()
{
	
		if (yposition <=500) {
			  yposition=yposition+10;
			  console.log("xposition of the rover is,"+xposition+"yposition of the rover is"+yposition);
			  uploadBackground();
			  uploadgreencar();
			}
}

function left()
{
	
		if (xposition >=0) {
			  xposition=xposition-10;
			  console.log("xposition of the rover is,"+xposition+"yposition of the rover is"+yposition);
			  uploadBackground();
			  uploadgreencar();
			}
}

function right()
{
	
		if (xposition <=700) {
			  xposition=xposition+10;
			  console.log("xposition of the rover is,"+xposition+"yposition of the rover is"+yposition);
			  uploadBackground();
			  uploadgreencar();
			}
		
}
