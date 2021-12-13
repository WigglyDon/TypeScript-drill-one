function add(num1, num2, showResult, phrase) {
    if (showResult) {
        var sum = num1 + num2;
        console.log(phrase + sum);
    }
    else {
        return num1 + num2;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
add(number1, number2, printResult, resultPhrase);
