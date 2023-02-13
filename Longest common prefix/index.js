// CHALLENGE:
// Return a string containing the longest common prefix from a list of strings.
// EXAMPLE:
// Input - ["flower", "florida", "flax"]
// Output - "fl"

function longestCommonPrefix(array) {
    let prefix = "";
    console.log(array[1][0]);   // prints the "l" in "florida"
    // for (let i = 0; i < 20; i++) {
    //     if (array[i][i] === array[i+1][i]) {
    //         prefix = prefix + array[i][i];
    //         console.log(prefix);
    //     }
    // }

    // finding word having the longest length
    let maxLength = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > maxLength) {
            maxLength = array[i].length;
        }
    }
    console.log(maxLength);

    // checking prefix
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < maxLength; j++) {
            if (array[i][j] === array[i+1][j]) {
                prefix = prefix + array[i][j];
                console.log(prefix);
            } else break;
        }
    }
    console.log(prefix);
}

longestCommonPrefix(["flower", "florida", "flax"]);