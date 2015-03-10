function triangle(ctx,x,y)
{
	ctx.fillStyle="#09F";
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x+50,y-100);
	ctx.lineTo(x+100,y);
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

function init()
{
	var colours = ["red", "yellow", "blue", "green"]

	var canvas=document.getElementById("canvas");
	if ( canvas.getContext )
	{
		var ctx=canvas.getContext("2d");
		ctx.fillStyle="#F30";
		ctx.fillRect(75,10,100,100);

	 	circle(ctx,275,60,50);	 

	 	for(i=0;i<40;i++)
	 	{
	 		x = Math.floor(Math.random() * canvas.width); 	
	 		y = Math.floor(Math.random() * canvas.height);
	 		size = Math.floor(Math.random() * 50);
	 		colour = colours[Math.floor(Math.random() * 4) ];
	 		circle(ctx,x,y,size,colour);
		}

		triangle(ctx,375,110);		
		triangle(ctx,0,210);

	}

	var canvas2=document.getElementById("canvas2");
	if ( canvas2.getContext )
	{
		var ctx=canvas2.getContext("2d");
	 		 
	 	for(i=0;i<40;i++)
	 	{
	 		x = Math.floor(Math.random() * canvas2.width); 	
	 		y = Math.floor(Math.random() * canvas2.height);
	 		size = Math.floor(Math.random() * 50);
	 		colour = colours[Math.floor(Math.random() * 4) ];
	 		circle(ctx,x,y,size,colour);
		}

	}

}
onload=init;