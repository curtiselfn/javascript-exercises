const removeFromArray = function(array, ...valueToRemove) {
    return array.filter(item => !valueToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
