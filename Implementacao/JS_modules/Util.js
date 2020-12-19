function isNum(v) {
    return !isNaN(parseFloat(v)) && isFinite(v);
}

const operators = ['=', '+', '-', '*', '/', '%'];

function isOp(v) {
    for (var i = 0; i < operators.length; i++) {
        if (operators[i] == v) return true;
    }
    return false
}