// Generated from Mat.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by MatParser.

function MatVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

MatVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
MatVisitor.prototype.constructor = MatVisitor;

// Visit a parse tree produced by MatParser#input.
MatVisitor.prototype.visitInput = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MatParser#stmt.
MatVisitor.prototype.visitStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MatParser#atrb.
MatVisitor.prototype.visitAtrb = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MatParser#expr.
MatVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MatParser#oprnd.
MatVisitor.prototype.visitOprnd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MatParser#number.
MatVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MatParser#variavel.
MatVisitor.prototype.visitVariavel = function(ctx) {
  return this.visitChildren(ctx);
};



exports.MatVisitor = MatVisitor;