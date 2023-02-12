// Return an array of "n" numbers
// If number is divisible by 3, replace it with "Fizz"
// If number is divisible by 5, replace it with "Buzz"
// If number is divisible by both, replace it with "FizzBuzz"
// Otherwise, return a string of the number

function fizzbuzz(n) {
    let fizzBuzzArray = [];
    for (let i = 0; i < n; i++) {
        // set values to fizzBuzzArray
        fizzBuzzArray[i] = (i+1);
        // check values of fizzBuzzArray
        if ((fizzBuzzArray[i] % 3 === 0) && (fizzBuzzArray[i] % 5 === 0)) {
            fizzBuzzArray[i] = "Fizzbuzz";
        } else if (fizzBuzzArray[i] % 3 === 0) {
            fizzBuzzArray[i] = "Fizz";
        } else if (fizzBuzzArray[i] % 5 === 0) {
            fizzBuzzArray[i] = "Buzz";
        } else fizzBuzzArray[i] = fizzBuzzArray[i].toString();
    }
    return fizzBuzzArray;
}

console.log(fizzbuzz(15));