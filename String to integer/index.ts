// Implement a method stringToInteger() to convert
// a number provided as a string into an integer
// without using any prebuilt methods.

function stringToInteger(str: string): number {
    let integer: number = 0;
    let intPosition: number;
    for (let i: number = (str.length - 1), j: number = 1; i >= 0; i--, (j=j*10)) {
        switch(str[i]) {
            case "1":
                intPosition = 1;
                break;
            case "2":
                intPosition = 2;
                break;
            case "3":
                intPosition = 3;
                break;
            case "4":
                intPosition = 4;
                break;
            case "5":
                intPosition = 5;
                break;
            case "6":
                intPosition = 6;
                break;
            case "7":
                intPosition = 7;
                break;
            case "8":
                intPosition = 8;
                break;
            case "9":
                intPosition = 9;
                break;
            default:
                intPosition = 0; 
                break;
        }
        if (intPosition != 0) {
            integer = integer + (intPosition * j);
            console.log(integer);
        } // else j = j * 10;
    }
    return integer;
}

console.log(stringToInteger("1234"));
console.log(stringToInteger("9037"));
console.log(stringToInteger("10000"));