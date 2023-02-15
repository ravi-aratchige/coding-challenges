// CHALLENGE:
// Return a string containing the longest common prefix from a list of strings.
// EXAMPLE:
// Input - ["flower", "florida", "flax"]
// Output - "fl"

function longestCommonPrefix(array) {
    let prefix = "";
    console.log(array.length);
    console.log(array[1][0]);   // prints the "f" in "florida"

    // finding word having the longest length
    let maxLength = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > maxLength) {
            maxLength = array[i].length;
        }
    }
    console.log(maxLength);

    // checking prefix between 2 words at a time
    
    
    console.log(prefix);
}

longestCommonPrefix(["flower", "florida", "flax"]);     // output = "fl"