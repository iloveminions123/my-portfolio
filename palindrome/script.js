const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome() {
  const alpNum = textInput.value.toLowerCase().replace(/[^0-9a-z]/gi, "");

  if (textInput.value === "") {
    alert("Please input a value");
    return;
  } else if (alpNum === [...alpNum].reverse().join("")) {
    return (result.textContent = `${textInput.value} is a palindrome`);
  } else {
    return (result.textContent = `${textInput.value} is not a palindrome`);
  }
}

checkBtn.addEventListener("click", isPalindrome);
