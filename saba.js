
var input = document.getElementById('input'),
number = document.querySelectorAll('.number div'), 
nishnebi = document.querySelectorAll('.mimateba-gamokleba div'), 
result = document.getElementById('result'),
clear = document.getElementById('clear'),
pasuxi = false;

for (var i = 0; i < number.length; i++) {
number[i].addEventListener("click", function(e) {
  var currentString = input.innerHTML;
  var lastChar = currentString[currentString.length - 1];
  if (pasuxi === false) {
    input.innerHTML += e.target.innerHTML;
  } else if (pasuxi === true && lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
    pasuxi= false;
    input.innerHTML += e.target.innerHTML;
  } else {
    pasuxi = false;
    input.innerHTML = "";
    input.innerHTML += e.target.innerHTML;
  }
});
}

for (var i = 0; i < nishnebi.length; i++) {
nishnebi[i].addEventListener("click", function(e) {

  var currentString = input.innerHTML;
  var lastChar = currentString[currentString.length - 1];
  if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
      var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
      input.innerHTML = newString;  
    } else {
      input.innerHTML += e.target.innerHTML;
    }
});
}

result.addEventListener("click", function() {

var inputString = input.innerHTML;

var numbers = inputString.split(/\+|\-|\*|\//g);
var nishnebi = inputString.replace(/[0-9]|\./g, "").split("");

console.log(inputString);
console.log(nishnebi);
console.log(numbers);

var divide = nishnebi.indexOf("/");
while (divide != -1) {
  numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
  nishnebi.splice(divide, 1);
  divide = nishnebi.indexOf("/");
}

var multiply = nishnebi.indexOf("*");
while (multiply != -1) {
  numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
  nishnebi.splice(multiply, 1);
  multiply = nishnebi.indexOf("*");
}

var subtract = nishnebi.indexOf("-");
while (subtract != -1) {
  numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
  nishnebi.splice(subtract, 1);
  subtract = nishnebi.indexOf("-");
}
var add = nishnebi.indexOf("+");
while (add != -1) {
  numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
  nishnebi.splice(add, 1);
  add = nishnebi.indexOf("+");
}

input.innerHTML = numbers[0]; 

pasuxi = true; 
});
clear.addEventListener("click", function() {
input.innerHTML = "";
})