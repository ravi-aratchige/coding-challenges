function longestCommonPrefix(array) {
    // initiate the 'prefix' variable using the first 2 words of the list
    let prefix = checkCommonCharacters(array[0], array[1]);

    for (let i = 2; i < array.length; i++) {
        // if prefix of first 2 words (or any 2 other words) is empty, break and stop checking the other words
        if (prefix === "") break;
        // else get new prefix from current prefix and third (or next) word in array
        else prefix = checkCommonCharacters(prefix, array[i]);
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
console.log(longestCommonPrefix(["four", "flower", "florida", "flax"]));        // output = "f"
console.log(longestCommonPrefix(["flower", "flower"]));                         // output = "flower"
console.log(longestCommonPrefix(["ravindu", "flower", "florida", "flax"]));     // output = "No common prefixes"
console.log(longestCommonPrefix(["flower", "florida", "ravindu", "flax"]));     // output = "No common prefixes"