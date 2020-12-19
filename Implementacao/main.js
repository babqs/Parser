var antlr4 = require('antlr4')
var Mat1Lexer = require("./MatLexer").Mat1Lexer
var Mat1Parser = require("./MatParser").Mat1Parser


var fs = require('fs'), path = require('path')

var filePath = process.argv[2]

fs.readFile(path, { encoding: 'utf-8' }, function (err, data) {
  if (!err) {
    console.log('received data:\n' + data); // comment this out if you want to time it more accurately
    var chars = new antlr4.InputStream(data)
    var lexer = new Mat1Lexer(chars)
    var tokens = new antlr4.CommonTokenStream(lexer)
    var parser = new Mat1Parser(tokens)
    parser.buildParseTrees = true
    t = parser.block()
    console.log(t) // comment this out if you want to time it more accurately
  } else {
    console.log(err);
  }
});