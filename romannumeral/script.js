const numberInput = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanNumeralLookUp = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

button.addEventListener("click", romanNumeral);

function romanNumeral() {
  let num = numberInput.value;

  if (num === "") {
    return (output.textContent = "Please enter a valid number");
  } else if (num < 0) {
    return (output.textContent =
      "Please enter a number greater than or equal to 1");
  } else if (num > 3999) {
    return (output.textContent =
      "Please enter a number less than or equal to 3999.");
  } else {
    let romanAccumulator = "";
    for (const key in romanNumeralLookUp) {
      let value = romanNumeralLookUp[key];
      while (value <= num) {
        num -= value;
        romanAccumulator += key;
      }
    }
    return (output.innerText = romanAccumulator);
  }
}

/*Basically step by step.
1.Create Roman Numeral LookUp table: maps the number to Roman Numeral.

2.Create Roman Numeral Accumulator. let romanAccumulator=""

3.Note: you have to go through Roman Numeral Look up Table-loop through every key(which here are the roman numberals.) while that value is less than numberInput.value, you will go through the while loop- where you take out the value of numberInput.value and add to the accumulator.

At that match---
Current Number=Value at Roman Numeral
key =Roman Numeral
If Current Number <=NumberInput.Value,then subtract Current Number from NumberInput.Value.--> num-value
Add Roman Numeral to Accumulator-->
romanAccumulator+key
Repeat this loop until that Current Number >NumberInput.Value

(Hence num will go down and roman acc go up.
use operators for minus or plus. thus use let instead of const for num and accumulator)*/
