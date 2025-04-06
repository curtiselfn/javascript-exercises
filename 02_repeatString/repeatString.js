const repeatString = function(words, manyTimes) {
    let result = ""
    if (manyTimes < 0) {
        return "ERROR"
    }
    for (i = 0; i < manyTimes; i++){
        result += words;
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
