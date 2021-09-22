function receivesAFunction(passedFunction) {
    return passedFunction(3, 2);
}

function returnsANamedFunction(number1, number2) {
    const namedFunction = function(number1, number2) {
    const sum = number1 + number2;
    }
return namedFunction;
}

function returnsAnAnonymousFunction(passedValue) {
    return function(passedValue) {
    console.log(passedValue);
    }
}