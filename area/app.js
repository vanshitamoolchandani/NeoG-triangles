const sides = document.querySelectorAll('.input');
const calButten = document.querySelector("#cal-button");
const clearButton = document.querySelector("#clear-button");
const output = document.querySelector('#output');

calButten.addEventListener("click", calculateValue);

function calculateValue()
{
    if((Number(sides[0].value)&& Number(sides[1].value)))
    {
        if( ((Number(sides[0].value)) >0 ) && ((Number(sides[1].value)) >0 ))
    {
        const prod = multiBaseHeight(Number(sides[0].value), Number(sides[1].value));
        const calArea = prod/2;
        output.innerText = "Result is "+calArea +" sq. cm";
    }
    else
    output.innerText = "Sides cannot be negative";
    }
    else
    output.innerText = "Invalid Input! Try Again";
}

function multiBaseHeight(b,h)
{
    const multi = b*h;
    return multi;
}


clearButton.addEventListener('click', () => {
  sides.forEach(input =>  input.value = '', output.style.display = "none"
  );
});