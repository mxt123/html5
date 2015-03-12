function init()
{
	var canvas=document.getElementById("canvas");
	if (canvas.getContext)
	{
		var ctx=canvas.getContext("2d");
		//ctx.fillStyle="#F30";
		//ctx.fillRect(0,0,canvas.width, canvas.height);
		//ctx.clearRect(225,25,100,100);

		ctx.lineWidth=6; ctx.strokeStyle="#F30";
		ctx.strokeRect(75,10,100,100);

		ctx.strokeStyle="#3C0";
		ctx.beginPath();
		ctx.arc(275,60,50,0,Math.PI*2,true);
		ctx.stroke();
	}
}

onload = init;