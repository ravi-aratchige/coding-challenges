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
    // for (let i = 0; i < (array.length - 1); i++) {
    //     for (let j = 0; j < maxLength; j++) {
    //         if (array[i][j] === array[i+1][j]) {
    //             prefix = prefix + array[i][j];
    //         }
    //     }
    //     if (prefix === "") {
                
    //     } else {
    //         // 
    //     }
    // }

    // getting prefix of first 2 words
    // prefix = checkCommonCharacters[array[0], array[1]];

    console.log(array[0], array[1]);
    console.log(typeof(array[0]));

    for (let i = 0; i < array.length; i++) {
        if (prefix === "") {
            prefix = checkCommonCharacters(array[0], array[1]);
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

    console.log(minimumLength);

    // check common characters between 2 words
    let prefix = "";

    for (let i = 0; i < minimumLength; i++) {
        if (word1[i] === word2[i]) {
            prefix = prefix + word1[i];
        } else break;
    }

    console.log(prefix);
    return prefix;
}

longestCommonPrefix(["sasanka", "flower", "florida", "flax", "four"]);     // output = "fl"
// checkCommonCharacters("flower", "florida");

// NOTE
// checkCommonCharacters() gives undefined output when both arguments are the same word. Find out why this happens.