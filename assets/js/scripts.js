var curretNumberWrapper = document.getElementById("currentNumber")
currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    curretNumberWrapper.innerHTML = currentNumber;
}

function decrement (){
    currentNumber = currentNumber - 1;
    curretNumberWrapper.innerHTML = currentNumber;
}

