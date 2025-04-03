// function to check if the input string is a palindrome
function is_palindrome(string) {
  // remove all non-alphabetic characters from the string and convert to lowercase
  let original = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  // check if the string is equal to its reverse
  return original === original.split('').reverse().join('');
}

// function to handle button click
document.getElementById("check-btn").addEventListener("click", function() {
    let input = document.getElementById("text-input").value.trim();
    let result = document.getElementById("result");

    if (input === "") {
        alert("Please input a value");
        return;
    }

    if (is_palindrome(input)) {
        result.textContent = `${input} is a palindrome.`;
        result.style.color = "green";
    } 
    else {
        result.textContent = `${input} is not a palindrome.`;
        result.style.color = "red";
    }
});
