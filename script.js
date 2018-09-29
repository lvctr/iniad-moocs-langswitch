addButton();

function addButton() {
	var buttonSwitch = document.createElement("button");
	buttonSwitch.setAttribute("id", "buttonSwitch");
	document.body.appendChild(buttonSwitch);
}

document.getElementById("buttonSwitch").onclick = function(){
	
	if (window.location.search == "?lang=jp") {
		var switchTo = "?lang=en";
	} else if (window.location.search == "?lang=en") {
		var switchTo = "?lang=jp";
	} else {
		var switchTo = "?lang=jp";
	}

	window.location = window.location.protocol + '//' + window.location.hostname + window.location.pathname + switchTo;
};