function sequenceOfOnes(input) {
    let output = 0, temp = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "0") {
            temp = 0;
        } else {
            temp++;
            if (output < temp) {
                output = temp;
            }
        }
    }

    return output;
}

let signal = "0110111001011110000000011";
console.log(sequenceOfOnes(signal));