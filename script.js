// elements that are required
let screen = document.querySelector(".screen");
let calcButtons = document.querySelectorAll(".calc-button");

// logical variables
let lastText = "0";

// functions we'll use

// event Listeners
calcButtons.forEach((calcButton) => {
	calcButton.addEventListener("click", () => {
		if (calcButton.innerText === "C") {
			screen.innerText = "0";
			lastText = "0";
		}
		else if (calcButton.innerText === "\u2190") {
			screen.innerText = screen.innerText.slice(0, -1);
			lastText = screen.innerText[screen.innerText.length() - 1]
		}
		else if (calcButton.innerText === "=") {
			screen.innerText = eval(screen.innerText);
		}
		else if (lastText === "+" || lastText === "-" || lastText === "/" || lastText === "*"){
			if(calcButton.innerText === "+" || calcButton.innerText === "/"){
				screen.innerText = screen.innerText.slice(0,-1) + calcButton.innerText;
				lastText = calcButton.innerText;
			}
			else if(calcButton.innerText === "\u2A2F"){
				screen.innerText = screen.innerText.slice(0,-1) + "*";
				lastText = "*";
			}
			else if(calcButton.innerText === "\u2212"){
				screen.innerText = screen.innerText.slice(0,-1) + "-";
				lastText = "-";
			}
			else{
				screen.innerText += calcButton.innerText;
			}
		}
		else if (calcButton.innerText === "\u2A2F") {
			screen.innerText += "*";
			lastText = "*";
		}
		else if(calcButton.innerText === "\u2212"){
			screen.innerText += "-";
			lastText = "-";
		}
		else {
			if (screen.innerText[0] === "0") {
				screen.innerText = calcButton.innerText;
				lastText = calcButton.innerText;
			}
			else {
				screen.innerText += calcButton.innerText;
				lastText = calcButton.innerText;
			}
		}
	})
})