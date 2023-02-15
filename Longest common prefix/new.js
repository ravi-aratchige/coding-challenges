// CHALLENGE:
// Return a string containing the longest common prefix from a list of strings.
// EXAMPLE:
// Input - ["flower", "florida", "flax"]
// Output - "fl"

function longestCommonPrefix(array) {
    let prefix = "";

    for (let i = 0; i < array.length; i++) {
        if (prefix === "") {
            prefix = checkCommonCharacters(array[0], array[1]);
            if (prefix === "") {
                break;
            }
        } else prefix = checkCommonCharacters(prefix, array[i]);
    }
    
    if (prefix === "") {
        console.log("No common prefixes.");
    } else console.log(prefix);
}

// checking common characters between 2 words at a time
function checkCommonCharacters(word1, word2) {
    // get word length of shortest word
    let minimumLength;

    if (word1.length < word2.length) {
        minimumLength = word1.length;
        console.log(`Shorter word is ${word1}.`);
    } else if (word1.length > word2.length) {
        minimumLength = word2.length;
        console.log(`Shorter word is ${word2}.`);
    } else {
        minimumLength - word1.length;
        console.log("Both words are similar in length.");
    }

    // check common characters between 2 words and set to prefix
    let prefix = "";

    for (let i = 0; i < minimumLength; i++) {
        if (word1[i] === word2[i]) {
            prefix = prefix + word1[i];
        } else break;
    }

    return prefix;
}

longestCommonPrefix(["sasanka", "flower", "florida", "flax", "four"]);     // output = "fl"
// checkCommonCharacters("flower", "florida");

// NOTE
// checkCommonCharacters() gives undefined output when both arguments are the same word. Find out why this happens.