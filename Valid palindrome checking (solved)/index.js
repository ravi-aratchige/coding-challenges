// Define a valid palindrome checking function.
// The function only considers alphanumeric characters, no special characters or spaces.

pal = "Satan, oscillate my metallic sonatas";
notPal = "Ok I pull up";

function checkPalindrome(input) {
    // removing spaces from input
    input = input.split(" ").join("");
    // 1. SPLIT()
    // split() separates a string into an array of substrings.
    // It does so using the "separator" it takes as a parameter.
    // The string is separated into substrings at each occurence of the separator.
    // The separator isn't included in any of the substrings.
    // 2. JOIN()
    // join() concatenates all objects in an array into a single string.
    // It also takes a "separator" as a parameter.
    // It connects the objects using the separator.
    // If no parameter has been passed, it connects the objects using commas.
    
    // removing special characters
    input = input.replace(/[^a-zA-Z0-9 ]/g, "");
    // REPLACE()
    // replace() searches for a "pattern" (first parameter) in a string
    // then changes the first instance of the pattern
    // with a "replacement" (second parameter).
    // In the above code, replace() switches any character
    // that is not alphanumeric with and empty string (using the RegEx).
    // The "g" flag ensures that replace() does not terminate
    // after the first instance of a non-alphanumeric character.

    // converting all characters to lower case
    input = input.toLowerCase();
    
    // reversing the input string into an array
    let reverse = [];
    for (let i = 0, j = (input.length - 1); i < input.length && j >= 0; i++, j--) {
        reverse[j] = input[i];
    }
    
    // This results in an array, which must be converted to a string.
    // The toString() method allows us to do this.
    // This string still contains the commas separating the elements of the array.
    // These commas must be removed using replace() as given below:
    reverse = reverse.toString().replace(/[,]/g,"");
    
    // checking whether the input and reverse match
    if (input === reverse) {
        return true;
    } else return false;
}

console.log(checkPalindrome(pal));
console.log(checkPalindrome(notPal));