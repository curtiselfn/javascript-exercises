const fibonacci = function (number) {
    if (number < 0) {
        return "OOPS";
    }
    if (number === 0 || number === "0") {
        return 0;
    }

    if (number === 1) {
        return 1;
    }

    let a = 0;
    let b = 1;
    let next;

    for (let i = 2; i <= number; i++) {
        next = a + b;
        a = b;
        b = next;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
