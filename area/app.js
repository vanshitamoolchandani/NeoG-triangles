const sides = document.querySelectorAll('.input');
const calButten = document.querySelector("#cal-button");
const clearButton = document.querySelector("#clear-button");
const output = document.querySelector('#output');

function calculateValue()
{
    if((Number(sides[0].value)&& Number(sides[1].value)))
    {
        if( ((Number(sides[0].value)) >0 ) && ((Number(sides[1].value)) >0 ))
    {
        const product = prodOfBH(Number(sides[0].value), Number(sides[1].value));
        const areaOfT = product/2;
        output.innerText = "Result is "+areaOfT +" sq. cm";
    }
    else
    output.innerText = "Entered value is Negative!";
    }
    else
    output.innerText = "Input error: Enter value in both the fields";
}

function prodOfBH(b,h)
{
    const result = b*h;
    return result;
}
calButten.addEventListener("click", calculateValue);

clearButton.addEventListener('click', () => {
  sides.forEach(input =>  input.value = '', output.style.display = "none"
  );
});