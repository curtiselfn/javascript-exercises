const sumAll = function(firstNumber, lastNumber) {
    if (firstNumber < 0 || lastNumber < 0 ||
         firstNumber === String || lastNumber === String || 
         typeof firstNumber !== 'number' || 
         typeof lastNumber !== 'number' || 
         !Number.isInteger(firstNumber) ||
         !Number.isInteger(lastNumber) ){
        return "ERROR";
    }
    if (firstNumber > lastNumber) {
        [firstNumber, lastNumber] = [lastNumber, firstNumber];
    }
    
    let finalSum = 0;
    for (let i = firstNumber; i <= lastNumber; i++) {
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
