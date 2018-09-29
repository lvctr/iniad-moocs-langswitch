addButton();

function addButton() {
	var buttonSwitch = document.createElement("button");
	buttonSwitch.setAttribute("id", "buttonSwitch");
	buttonSwitch.innerHTML = "Switch Language";
	document.body.appendChild(buttonSwitch);
}

document.getElementById("buttonSwitch").onclick = function(){

	var switchTo, switchText;

	if (window.location.search == "?lang=jp") {
		switchTo = "?lang=en";
	} else if (window.location.search == "?lang=en") {
		switchTo = "?lang=jp";
	} else {
		switchTo = "?lang=jp";
	}

	window.location = window.location.protocol + '//' + window.location.hostname + window.location.pathname + switchTo;

};