// Implement a method stringToInteger() to convert
// a number provided as a string into an integer
// without using any prebuilt methods.

function stringToInteger(str: string): number {
    let integer: number = 0;
    let intPosition: number;
    for (let i: number = (str.length), j: number = 1; i > 0; i--, (j=j+10)) {
        switch(str[i]) {
            case "1":
                intPosition = 1;
                break;
            case "2":
                intPosition = 1;
                break;
            case "3":
                intPosition = 1;
                break;
            case "4":
                intPosition = 1;
                break;
            default:
                intPosition = 0;
                break
        }
        integer = integer + (intPosition * j);
    }
    return integer;
}

console.log(stringToInteger("1234"));