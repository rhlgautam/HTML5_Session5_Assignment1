//Write a JavaScript function to find the area of a circle. Pass the parameter in a function.

// Function to calculate area of circle.
function getCircleArea(r) {
	var circleArea= r*r* Math.PI;
	circleArea= Math.round(circleArea);
	document.getElementById("demo").innerHTML = "<b>Circle Area:" + circleArea +"</b>";
}

// Event Handler for Button click event
function btnClicked()
{
	var val= document.getElementById("getRad").value;
	if(!isNaN(val))
	{
		getCircleArea(val);
	}
	else{
		document.getElementById("demo").innerHTML = "<b>Please enter a correct number</b>";
	}
}