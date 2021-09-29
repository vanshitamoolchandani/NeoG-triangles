var correctans= ["isosceles triangle","one right angle","equilateral","right-angled","3"];


const quizform = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-button");
const output = document.querySelector(".output");
submitButton.addEventListener("click", calScore);

function calScore() {
  const formResults = new FormData(quizform);
  let score = 0, i = 0;
  for (let value of formResults.values()) {
    if (value === correctans[i]) {
      score = score + 1;
    }
    i = i + 1;
  }
  // console.log("The score is "+score);
  output.innerText = "The score is " + score;
}

