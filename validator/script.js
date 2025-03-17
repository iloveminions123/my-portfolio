const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

function validNumber() {
  const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
  if (input.value === "") {
    alert("Please provide a phone number");
    return;
  } else if (regex.test(input.value)) {
    results.textContent = `Valid US number: ${input.value}
`;
  } else {
    results.textContent = `Invalid US number: ${input.value}`;
  }
}
function clear() {
  return (results.textContent = "");
}
checkBtn.addEventListener("click", validNumber);
clearBtn.addEventListener("click", clear);

//NOTE: backlash \ is an escape character. it allows literal interpretation of character following it. for example s for space or - for hypen or d for digits.

/*console.log(regex.test("555-555-5555"))
output:true. this means regex works
/* THE MAIN PLANNING:
Regex: Remember ^=beginning and $=end to keep everything.
 1. Optional one with a space-> (1\s?)?
 NOTE:? makes things optional. Hence ? after space means space is optional.
 Then? after that entire capture group means that entire group is optional.
 2.Three digits with optional parenthesis-->(\(\d{3})\)|(\d{3})
NOTE: this is a digit with multiplier--any 3 digits. Then you have optional parenthesis so you have to use escape open \( and close \)parenthesis so that Java can take the characters literally.
Use Or operator in case when no parenthesis at all.
Capture groups are in () directly
Also from internet:" escape an open parenthesis in JavaScript, a backslash `\` is used before the parenthesis (. The combination \( tells the JavaScript engine to treat the parenthesis as a literal character rather than its special meaning in regular expressions or other contexts.
3.Optional hypen or space-->([\s-]?)
Either white space or hyphen. And it's optional.
4.Three digits-->\d{3}
We don't need a capture group-hence no (). Nor do we need a character class
5. Optional hypen or space-->([\s-]?)
We just repeat from step 3
6. Four digits-->\d{4}
We just repeat from step 4
 */
