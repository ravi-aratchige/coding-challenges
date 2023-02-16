function romanToInteger(romanNumber: string): number {
    // initialize 'integer' variable
    let integer: number = 0;
    for (let i: number = 0; i < romanNumber.length; i++) {
        // checking for C, X and I, whose value can affect the character following them
        if (romanNumber[i] === "C") {
            if (romanNumber[i+1] === "D") {
                integer += 400;
                i++;
            } else if (romanNumber[i+1] === "M") {
                integer += 900;
                i++;
            } else integer += 100;
        } else if (romanNumber[i] === "X") {
            if (romanNumber[i+1] === "L") {
                integer += 40;
                i++;
            } else if (romanNumber[i+1] === "C") {
                integer += 90;
                i++;
            } else integer += 10;
        } else if (romanNumber[i] === "I") {
            if (romanNumber[i+1] === "V") {
                integer += 4;
                i++;
            } else if (romanNumber[i+1] === "X") {
                integer += 9;
                i++;
            } else integer += 1;
        }
        // checking for M, D, L and V, which cannot affect the values that follow them
        else if (romanNumber[i] === "M") integer += 1000;
        else if (romanNumber[i] === "D") integer += 500;
        else if (romanNumber[i] === "L") integer += 50;
        else if (romanNumber[i] === "V") integer += 5;
    }
    // end of for loop. 'integer' is returned.
    return integer;
}

console.log(romanToInteger("MCMXCIV"));     // output = 1994