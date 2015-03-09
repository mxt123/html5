function toggle()
{
	var tag = document.getElementById("lemon");
	var hid = (tag.style.visibility !== "visible");
	tag.style.visibility=( hid ) ? "visible" : "hidden";
	tag.style.height= ( hid ) ? "100px" : "0px";
}