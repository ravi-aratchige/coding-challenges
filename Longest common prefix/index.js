// CHALLENGE:
// Return a string containing the longest common prefix from a list of strings.
// EXAMPLE:
// Input - ["flower", "florida", "flax"]
// Output - "fl"

function longestCommonPrefix(array) {
    // initiate the 'prefix' variable
    let prefix = "";

    for (let i = 0; i < array.length; i++) {
        if (prefix === "") {
            prefix = checkCommonCharacters(array[0], array[1]);
            if (prefix === "") break;
        } else prefix = checkCommonCharacters(prefix, array[i]);
    }
    
    // return prefix after checking whether a common prefix exists
    if (prefix === "") return "No common prefixes.";
    else return prefix;
}

// checking common characters between 2 words at a time
function checkCommonCharacters(word1, word2) {
    // initiate 'prefix' variable to store common prefix of arguments
    let prefix = "";

    // get word length of shortest word
    let minimumLength;

    if (word1.length < word2.length) minimumLength = word1.length;
    else minimumLength = word2.length;

    // check common characters between 2 words (arguments) and set to prefix
    for (let i = 0; i < minimumLength; i++) {
        if (word1[i] === word2[i]) prefix = prefix + word1[i];
        else break;
    }

    return prefix;
}

console.log(longestCommonPrefix(["flower", "florida", "flax"]));                // output = "fl"
console.log(longestCommonPrefix(["flower", "flower"]));                         // output = "flower"
console.log(longestCommonPrefix(["ravindu", "flower", "florida", "flax"]));     // output = "No common prefixes"

// ERROR
console.log(longestCommonPrefix(["flower", "florida", "ravindu", "flax"]));    // expected output = "No common prefixes"

// NOTE (FIXED)
// checkCommonCharacters() gives undefined output when both arguments are the same word. Find out why this happens.