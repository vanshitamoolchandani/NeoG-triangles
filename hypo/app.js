const input = document.querySelectorAll(".input");
const calculate = document.querySelector("#cal-button");
const clear = document.querySelector("#clear-button");
const output = document.querySelector("#output");

calculate.addEventListener("click", calculateHypotenuse);

function calculateSumOfSquare(s1, s2) {
  var sumOfSquares =0;
  if(s1<0||s2<0){
    output.innerText = "Invalid Input";
  }
  else{
  sumOfSquares = s1 * s1 + s2 * s2;
}
  return sumOfSquares;
}

function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquare(Number(input[0].value), Number(input[1].value));
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  output.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
}

clear.addEventListener('click', () => {
  input.forEach(input =>  input.value = '', output.style.display = "none"
  );
});