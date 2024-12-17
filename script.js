// elements that are required
let screen = document.querySelector(".screen");
let calcButtons = document.querySelectorAll(".calc-button");


// functions we'll use


// event Listeners
calcButtons.forEach((calcButton) => {
	calcButton.addEventListener("click", () => {
		if (calcButton.innerText === "C") {
			screen.innerText = "0";
		}
		else if (calcButton.innerText === "\u2190") {
			screen.innerText = screen.innerText.slice(0, -1);
		}
		else if (calcButton.innerText === "=") {
			screen.innerText = eval(screen.innerText);
		}
		else if (calcButton.innerText === "\u2A2F"){
			screen.innerText += "*";
		}
		else {
			if (screen.innerText[0] === "0") {
				screen.innerText = calcButton.innerText;
			}
			else {
				screen.innerText += calcButton.innerText;
			}
		}
	})
})