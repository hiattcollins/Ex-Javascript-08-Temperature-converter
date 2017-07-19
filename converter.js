console.log("converter.js");

function toCelsius (input) {
	var tempCelsius = input * 2;
	return tempCelsius;
}

function toFahrenheit (input) {
	var tempFahrenheit = input * 100;
	return tempFahrenheit;
}

// console.log("toFahrenheit", toFahrenheit(123)); 

// Get a reference to the button element in the DOM
var convertButton = document.getElementById("converter");
var clearButton = document.getElementById("clear")


  var tempToConvert = document.getElementById("inputTemp").value;

  console.log("Initial tempToConvert value", tempToConvert);



// var chosenConverter = document.getElementById("farToCel").checked;

// console.log("initial check converter", chosenConverter)

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("convert button event", clickEvent);

  var tempToConvert = document.getElementById("inputTemp").value;

  console.log("tempToConvert", tempToConvert);



 	var farToCelChecked = document.getElementById("farToCel").checked;
  	var celToFarChecked = document.getElementById("celToFar").checked;
  console.log("farToCelChecked", farToCelChecked);
  console.log("celToFarChecked", celToFarChecked);

  if (farToCelChecked === true) {
  	console.log(toCelsius(tempToConvert));
  	document.getElementById("printConvertedTemp").innerHTML = `<p>Your converted temp is: ${toCelsius(tempToConvert)}</p>`
  } else {
  	console.log(toFahrenheit(tempToConvert));
  	document.getElementById("printConvertedTemp").innerHTML = `<p>Your converted temp is: ${toFahrenheit(tempToConvert)}</p>`
  }


}

function clearInputTemp (clickEvent) {
	console.log("clear button event", clickEvent);
	document.getElementById("printConvertedTemp").innerHTML = `<p></p>`
}

// Assign a function to be executed when the button is clicked
convertButton.addEventListener("click", determineConverter);

clearButton.addEventListener("click", clearInputTemp);


// Requirements

// Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.

// In the HTML, have one input field where someone can enter in a temperature.
// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
// Create a block level element that will hold the text of the converted temperature.
// Create a button that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.