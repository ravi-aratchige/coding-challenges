function romanToInteger(romanNumber: string): number {
    // initialize 'integer' variable
    let integer: number = 0;
    for (let i: number = 0; i < romanNumber.length; i++) {
        // checking for C, X and I, whose value can affect the character following them
        if (romanNumber[i] === "C") {
            console.log("C detected");
            if (romanNumber[i+1] === "D") {
                console.log("D after C detected (400 added)");
                integer = integer + 400;
                console.log(integer);
                i++;
            } else if (romanNumber[i+1] === "M") {
                console.log("M after C detected (900 added)");
                integer = integer + 900;
                console.log(integer);
                i++;
            } else {
                console.log("Just C on its own (100 added)");
                integer = integer + 100;
                console.log(integer);
            }
        } else if (romanNumber[i] === "X") {
            console.log("X detected");
            if (romanNumber[i+1] === "L") {
                console.log("L after X detected (40 added)");
                integer = integer + 40;
                console.log(integer);
                i++;
            } else if (romanNumber[i+1] === "C") {
                console.log("C after X detected (90 added)");
                integer = integer + 90;
                console.log(integer);
                i++;
            } else {
                console.log("Just an X on its own (10 added)");
                integer = integer + 10;
                console.log(integer);
            }
        } else if (romanNumber[i] === "I") {
            console.log("I detected");
            if (romanNumber[i+1] === "V") {
                console.log("V after I detected (4 added)");
                integer = integer + 4;
                console.log(integer);
                i++;
            } else if (romanNumber[i+1] === "X") {
                console.log("X after I detected (9 added)");
                integer = integer + 9;
                console.log(integer);
                i++;
            } else {
                console.log("Just I on its own (1 added)");
                integer = integer + 1;
                console.log(integer);
            }
        }
        // checking for M, D, L and V, which cannot affect the values that follow them
        else if (romanNumber[i] === "M") {
            console.log("M on its own (1000 added)");
            integer = integer + 1000;
            console.log(integer);
        } else if (romanNumber[i] === "D") {
            console.log("D on its own (500 added)");
            integer = integer + 500;
            console.log(integer);
        } else if (romanNumber[i] === "L") {
            console.log("L on its own (50 added)");
            integer = integer + 50;
            console.log(integer);
        } else if (romanNumber[i] === "V") {
            console.log("V on its own (5 added)");
            integer = integer + 5;
            console.log(integer);
        }
    }
    return integer;
}

console.log(romanToInteger("MCMXCIV"));