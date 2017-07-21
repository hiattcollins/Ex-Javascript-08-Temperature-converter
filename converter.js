// console.log("converter.js");

// ******* Function to convert Fahrenheit to Celsius ******* //
function toCelsius (input) {
	let tempCelsius = ((input - 32) * (5/9)).toFixed(1);
	return tempCelsius;
}

// ******* Function to convert Celsius to Fahrenheit ******* //
function toFahrenheit (input) {
	let tempFahrenheit = ((input * 9/5) + 32).toFixed(1);
	return tempFahrenheit;
}

// ******* Function to change font color for Fahrenheit to Celsius ******* //
function toCelsiusColors (temp) {
  if (temp > 32) {
    document.getElementById("tempColor").classList.add("hot");
  } else if (temp < 0) {
    document.getElementById("tempColor").classList.add("cold");
  } else {
    document.getElementById("tempColor").classList.add("medium");
  }
}

// ******* Function to change font color for Celsius to Fahrenheit ******* //
function toFahrenheitColors (temp) {
  if (temp > 90) {
      document.getElementById("tempColor").classList.add("hot");
    } else if (temp < 32) {
      document.getElementById("tempColor").classList.add("cold");
    } else {
      document.getElementById("tempColor").classList.add("medium");
    }
}

// ******* Define variables to pull information from page re: buttons and entered value to convert ******* //
let convertButton = document.getElementById("converter");
let clearButton = document.getElementById("clear");
let tempToConvert = document.getElementById("inputTemp").value;

// ******* Function to determine which conversion chosen and to execute resulting conversion ******* //
function determineConverter (clickEvent) {

  // **** get entered temp value after click of convert button **** //
  tempToConvert = document.getElementById("inputTemp").value;

  // **** check which conversion radio button is selected **** //
 	var farToCelChecked = document.getElementById("farToCel").checked;
  var celToFarChecked = document.getElementById("celToFar").checked;

  // **** run conversion functions based on radio button choice **** //
  if (farToCelChecked === true) {
    let celsiusTemp = toCelsius(tempToConvert);
  	document.getElementById("printConvertedTemp").innerHTML = `<p>Your converted temp is: <span id="tempColor">${celsiusTemp}</span> degrees Celsius</p>`;
      toCelsiusColors(celsiusTemp);

  } else {
    let fahrenheitTemp = toFahrenheit(tempToConvert);
  	document.getElementById("printConvertedTemp").innerHTML = `<p>Your converted temp is: <span id="tempColor">${fahrenheitTemp}</span> degrees Fahrenheit</p>`;
      toFahrenheitColors(fahrenheitTemp);
  }

}

// ******* Function to clear input field and conversion message on clear button click ******* //
function clearInputTemp (clickEvent) {
	document.getElementById("printConvertedTemp").innerHTML = `<p></p>`;
  document.getElementById("inputTemp").value = "";
}


// ******* Event listeners for button clicks ******* //
convertButton.addEventListener("click", determineConverter);
clearButton.addEventListener("click", clearInputTemp);


// ******* Listener for return keypress and function trigger for keypress ******* //
document.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    determineConverter(tempToConvert);
    event.preventDefault();
  }
});




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