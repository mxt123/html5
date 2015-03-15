function triangle(ctx,x,y,size,colour)
{
	ctx.fillStyle=colour;
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x+size/2,y-size);
	ctx.lineTo(x+size,y);
	ctx.closePath();
	ctx.fill();
}

function circle(ctx,x,y,size,colour)
{
	ctx.fillStyle=colour;
	ctx.beginPath();
	ctx.arc(x,y,size,0,Math.PI*2,true);
	ctx.fill();
}

function square(ctx,x,y,size,colour)
{
	ctx.fillStyle=colour;
	ctx.fillRect(x,y,x+size,y+size/10,colour);
}


function fullScreen(canvasId)
{
	var canvas=document.getElementById(canvasId);
	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight;
}

function drawShapes(numShapes,canvasId)
{

	var colours = ["red", "yellow", "blue", "green"]
	var shapeFunctions = [square,triangle,circle]

	var canvas=document.getElementById(canvasId);
	if ( canvas.getContext )
	{
		var ctx=canvas.getContext("2d");

	 	for(i=0;i<numShapes;i++)
	 	{
	 		x = Math.floor(Math.random() * canvas.width); 	
	 		y = Math.floor(Math.random() * canvas.height);
	 		size = Math.floor(Math.random() * 50);
	 		colour = colours[Math.floor(Math.random() * 4) ];
	 		shapeFunction = shapeFunctions[Math.floor(Math.random() * 3)]
	 		shapeFunction(ctx,x,y,size,colour);
		}

	}
}

function init()
{
	fullScreen("canvas");
	drawShapes(50,"canvas");
}
onload=init;