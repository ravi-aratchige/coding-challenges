function stringToInteger(str: string): number {
    // initializing variables
    let integer: number = 0;
    let digit: number;

    for (let i: number = (str.length - 1), j: number = 1; i >= 0; i--, (j *= 10)) {
        // switch statement to map each character of 'str'
        // to its corresponding numerical digit / value
        switch(str[i]) {
            case "1":
                digit = 1;
                break;
            case "2":
                digit = 2;
                break;
            case "3":
                digit = 3;
                break;
            case "4":
                digit = 4;
                break;
            case "5":
                digit = 5;
                break;
            case "6":
                digit = 6;
                break;
            case "7":
                digit = 7;
                break;
            case "8":
                digit = 8;
                break;
            case "9":
                digit = 9;
                break;
            default:
                digit = 0;
                break;
        }

        // if digit is not a zero
        if (digit != 0) {
            integer += (digit * j);
        }
    }

    // checking for negative numbers
    if (str[0] === "-") {
        integer *= (-1);
    }

    return integer;
}

console.log(stringToInteger("1234"));
console.log(stringToInteger("9037"));
console.log(stringToInteger("10000"));
console.log(stringToInteger("-56"));