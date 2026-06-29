function showMessage() {
    alert("This message is inside the function")
}

showMessage();

function sum(number1, number2) {
    return number1 + number2;
}

console.log(sum(25, 5)); 

function toCelcius(f) {
    return (5/9) * (f-32);
}


var result = toCelcius(54);

console.log("54 fehrenheit is equal to " + result + " celcius");