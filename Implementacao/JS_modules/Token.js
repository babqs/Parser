//import {isNum , isOp} from '/Users/Uso Exclusivo/Documents/UENP/Compiladores/Implementacao/Util.js';

class Token {
    constructor() {
        this.inst = null
        this.tokens = []
    }
    static getInst() {
        if (!this.inst)
            this.inst = new Token()
        return this.inst
    }
    tokenize(str) {
        str = str.trim();
        var s = '';
        for (var index = 0; index < str.length; index++) {
            s += str[index];
            const peek = str[index + 1]
            if (isNum(s.trim()) && !isNum(peek)) {
                this.tokens.push({ type: 'NUM', value: s.trim() })
                s = '';
            }
            if (s.trim() == '(' || s.trim() == ')') {
                s.trim() == '(' ? this.tokens.push({ type: 'OPEN' }) : this.tokens.push({ type: 'CLOSE' })
                s = '';
            }
            if (isOp(s.trim()) && !isOp(peek)) {
                this.tokens.push({ type: 'OP', value: s.trim() })
                s = '';
            }
            if (s == ';' || s == '\n') {
                this.tokens.push({ type: 'EOL' })
                s = '';
            }
            if (index == (str.length - 1)) {
                this.tokens.push({ type: 'EOF' })
                s = '';
            }
        }
        return this.tokens;
    }
}
exports.Token = Token;


function isNum(v) {
    return !isNaN(parseFloat(v)) && isFinite(v)
}

const operators = ['=', '+', '-', '*', '/', '>', '<', '>=', '<=', '==', '!=']

function isOp(v) {
    for (var i = 0; i < operators.length; i++) {
        if (operators[i] == v) return true
    }
    return false
}

const tokenizer = Token.getInst()
const tokens = tokenizer.tokenize('234+90')
console.log(tokens)