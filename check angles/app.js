var angleInput = document.querySelectorAll(".input");
var checkButton = document.querySelector("#check-button");
var clearButton = document.querySelector("#clear-button");
var output = document.querySelector("#output");
var message = document.querySelector("#message");


// console.log(typeof angleInput[0].value);

checkButton.addEventListener("click", checkAngles);


function checkAngles() {
    const sum = calSumAngles( Number(angleInput[0].value), Number(angleInput[1].value), Number(angleInput[2].value));
    console.log(sum);
    if(sum === 180){
        getMessage("YES IT IS A TRIANGLE!!");
    }
    else{
        getMessage("SORRY IT'S NOT A TRIANGE! TRY AGAIN");
    }
}

function calSumAngles(input1,input2,input3){
    var sum = input1+input2+input3;
    return sum;
}

function getMessage(msg){
    output.innerText = msg;

}

clearButton.addEventListener('click', () => {
    angleInput.forEach(input =>  input.value = '', output.style.display = "none"
    );
});