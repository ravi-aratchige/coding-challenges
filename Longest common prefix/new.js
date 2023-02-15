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
    for (let i = 0; i < (array.length - 1); i++) {
        for (let j = 0; j < maxLength; j++) {
            if (array[i][j] === array[i+1][j]) {
                prefix = prefix + array[i][j];
            }
        }
        if (prefix === "") {
                
        } else {
            // 
        }
    }
    
    console.log(prefix);
}

// checking common characters between 2 words at a time
function checkCommonCharacters(word1, word2) {
    // get word length of shortest word
    let minimumLength;

    if (word1.length < word2.length) {
        minimumLength = word1.length;
    } else if (word1.length > word2.length) {
        minimumLength = word2.length;
    } else minimumLength - word1.length;

    console.log(minimumLength);

    // check common characters between 2 words
    let prefix = "";

    for (let i = 0; i < minimumLength; i++) {
        if (word1[i] === word2[i]) {
            prefix = prefix + word1[i];
        } else break;
    }

    console.log(prefix);
}

// longestCommonPrefix(["flower", "florida", "flax"]);     // output = "fl"
checkCommonCharacters("flower", "florida");

// NOTE
// checkCommonCharacters() gives undefined output when both arguments are the same word. Find out why this happens.