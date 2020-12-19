/*var antlr4 = require('antlr4')
var MatLexer = require("./MatLexer").MatLexer
var MatParser = require("./MatParser").MatParser


var fs = require('fs')
  , path = require('path')

var filePath = process.argv[2]

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data) {
  if (!err) {
    console.log('received data:\n' + data); // comment this out if you want to time it more accurately
    var chars = new antlr4.InputStream(data)
    var lexer = new MatLexer(chars)
    var tokens  = new antlr4.CommonTokenStream(lexer)
    var parser = new MatParser(tokens)
    parser.buildParseTrees = true
    t = parser.input()
    console.log(t) // comment this out if you want to time it more accurately
  } else {
    console.log(err);
  }
});*/

   const antlr4 = require('antlr4');
   const matLexer = require('./MatLexer');
   const matParser = require('./MatParser');
   const visitor = require('./MatVisitor');

   var readline = require('readline');
   var resp = "";

   var scan = readline.createInterface({
       input: process.stdin,
       output: process.stdout
   });

   scan.question("Insira uma expressão matemática: ", function(answer){
       resp = answer;
       //console.log("Sua resposta foi salva" + resp);
       scan.close();
   });


   var chars = new antlr4.InputStream(resp);
   var lexer = new matLexer.MatLexer(chars);
   //console.log(lexer);
   var tokens  = new antlr4.CommonTokenStream(lexer);
   var parser = new matParser.MatParser(tokens);
   parser.buildParseTree = true;
   var t = parser.input();
   //console.log(t);

   class Visitor {
    visitChildren(ctx) {
      if (!ctx) {
        return;
      }
  
      if (ctx.children) {
        return ctx.children.map(child => {
          if (child.children && child.children.length != 0) {
            return child.accept(this);
          } else {
            return child.getText();
          }
        });
      }
    }
  }
  
  t.accept(new Visitor());