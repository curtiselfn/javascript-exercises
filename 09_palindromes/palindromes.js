const palindromes = function (str) {
    let originalStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '')
    let newStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '').split('').reverse().join('');
    return newStr === originalStr;

};

// Do not edit below this line
module.exports = palindromes;
