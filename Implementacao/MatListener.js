// Generated from Mat.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by MatParser.
function MatListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

MatListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
MatListener.prototype.constructor = MatListener;

// Enter a parse tree produced by MatParser#input.
MatListener.prototype.enterInput = function(ctx) {
};

// Exit a parse tree produced by MatParser#input.
MatListener.prototype.exitInput = function(ctx) {
};


// Enter a parse tree produced by MatParser#stmt.
MatListener.prototype.enterStmt = function(ctx) {
};

// Exit a parse tree produced by MatParser#stmt.
MatListener.prototype.exitStmt = function(ctx) {
};


// Enter a parse tree produced by MatParser#atrb.
MatListener.prototype.enterAtrb = function(ctx) {
};

// Exit a parse tree produced by MatParser#atrb.
MatListener.prototype.exitAtrb = function(ctx) {
};


// Enter a parse tree produced by MatParser#expr.
MatListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by MatParser#expr.
MatListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by MatParser#oprnd.
MatListener.prototype.enterOprnd = function(ctx) {
};

// Exit a parse tree produced by MatParser#oprnd.
MatListener.prototype.exitOprnd = function(ctx) {
};


// Enter a parse tree produced by MatParser#number.
MatListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by MatParser#number.
MatListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by MatParser#variavel.
MatListener.prototype.enterVariavel = function(ctx) {
};

// Exit a parse tree produced by MatParser#variavel.
MatListener.prototype.exitVariavel = function(ctx) {
};



exports.MatListener = MatListener;