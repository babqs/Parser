// Generated from Mat.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0010f\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002",
    "\u0005\u0002!\n\u0002\u0003\u0002\u0006\u0002$\n\u0002\r\u0002\u000e",
    "\u0002%\u0003\u0003\u0005\u0003)\n\u0003\u0003\u0003\u0006\u0003,\n",
    "\u0003\r\u0003\u000e\u0003-\u0003\u0003\u0003\u0003\u0006\u00032\n\u0003",
    "\r\u0003\u000e\u00033\u0003\u0004\u0003\u0004\u0007\u00048\n\u0004\f",
    "\u0004\u000e\u0004;\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0006\u0006@\n\u0006\r\u0006\u000e\u0006A\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000fe\n\u000f\u0002",
    "\u0002\u0010\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007",
    "\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f",
    "\u001d\u0010\u0003\u0002\u0007\u0003\u00022;\u0005\u0002C\\aac|\u0006",
    "\u00022;C\\aac|\u0004\u0002\f\f\u000f\u000f\u0005\u0002\u000b\f\u000f",
    "\u000f\"\"\u0002n\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003",
    "\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003",
    "\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003",
    "\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003",
    "\u0002\u0002\u0002\u0003 \u0003\u0002\u0002\u0002\u0005(\u0003\u0002",
    "\u0002\u0002\u00075\u0003\u0002\u0002\u0002\t<\u0003\u0002\u0002\u0002",
    "\u000b?\u0003\u0002\u0002\u0002\rE\u0003\u0002\u0002\u0002\u000fG\u0003",
    "\u0002\u0002\u0002\u0011I\u0003\u0002\u0002\u0002\u0013K\u0003\u0002",
    "\u0002\u0002\u0015M\u0003\u0002\u0002\u0002\u0017O\u0003\u0002\u0002",
    "\u0002\u0019Q\u0003\u0002\u0002\u0002\u001bS\u0003\u0002\u0002\u0002",
    "\u001dd\u0003\u0002\u0002\u0002\u001f!\u0007/\u0002\u0002 \u001f\u0003",
    "\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002!#\u0003\u0002\u0002\u0002",
    "\"$\t\u0002\u0002\u0002#\"\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002",
    "\u0002%#\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&\u0004\u0003",
    "\u0002\u0002\u0002\')\u0007/\u0002\u0002(\'\u0003\u0002\u0002\u0002",
    "()\u0003\u0002\u0002\u0002)+\u0003\u0002\u0002\u0002*,\t\u0002\u0002",
    "\u0002+*\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-+\u0003\u0002",
    "\u0002\u0002-.\u0003\u0002\u0002\u0002.1\u0003\u0002\u0002\u0002/0\u0007",
    "0\u0002\u000202\t\u0002\u0002\u00021/\u0003\u0002\u0002\u000223\u0003",
    "\u0002\u0002\u000231\u0003\u0002\u0002\u000234\u0003\u0002\u0002\u0002",
    "4\u0006\u0003\u0002\u0002\u000259\t\u0003\u0002\u000268\t\u0004\u0002",
    "\u000276\u0003\u0002\u0002\u00028;\u0003\u0002\u0002\u000297\u0003\u0002",
    "\u0002\u00029:\u0003\u0002\u0002\u0002:\b\u0003\u0002\u0002\u0002;9",
    "\u0003\u0002\u0002\u0002<=\t\u0005\u0002\u0002=\n\u0003\u0002\u0002",
    "\u0002>@\t\u0006\u0002\u0002?>\u0003\u0002\u0002\u0002@A\u0003\u0002",
    "\u0002\u0002A?\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002BC\u0003",
    "\u0002\u0002\u0002CD\b\u0006\u0002\u0002D\f\u0003\u0002\u0002\u0002",
    "EF\u0007-\u0002\u0002F\u000e\u0003\u0002\u0002\u0002GH\u0007/\u0002",
    "\u0002H\u0010\u0003\u0002\u0002\u0002IJ\u0007,\u0002\u0002J\u0012\u0003",
    "\u0002\u0002\u0002KL\u00071\u0002\u0002L\u0014\u0003\u0002\u0002\u0002",
    "MN\u0007\'\u0002\u0002N\u0016\u0003\u0002\u0002\u0002OP\u0007*\u0002",
    "\u0002P\u0018\u0003\u0002\u0002\u0002QR\u0007+\u0002\u0002R\u001a\u0003",
    "\u0002\u0002\u0002ST\u0007?\u0002\u0002T\u001c\u0003\u0002\u0002\u0002",
    "UV\u0007k\u0002\u0002VW\u0007p\u0002\u0002We\u0007v\u0002\u0002XY\u0007",
    "f\u0002\u0002YZ\u0007q\u0002\u0002Z[\u0007w\u0002\u0002[\\\u0007d\u0002",
    "\u0002\\]\u0007n\u0002\u0002]e\u0007g\u0002\u0002^_\u0007u\u0002\u0002",
    "_`\u0007v\u0002\u0002`a\u0007t\u0002\u0002ab\u0007k\u0002\u0002bc\u0007",
    "p\u0002\u0002ce\u0007i\u0002\u0002dU\u0003\u0002\u0002\u0002dX\u0003",
    "\u0002\u0002\u0002d^\u0003\u0002\u0002\u0002e\u001e\u0003\u0002\u0002",
    "\u0002\u000b\u0002 %(-39Ad\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function MatLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

MatLexer.prototype = Object.create(antlr4.Lexer.prototype);
MatLexer.prototype.constructor = MatLexer;

Object.defineProperty(MatLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

MatLexer.EOF = antlr4.Token.EOF;
MatLexer.NUM_INT = 1;
MatLexer.NUM_DBL = 2;
MatLexer.VAR = 3;
MatLexer.NEWLINE = 4;
MatLexer.WS = 5;
MatLexer.SUM = 6;
MatLexer.SUB = 7;
MatLexer.MULT = 8;
MatLexer.DIV = 9;
MatLexer.REST = 10;
MatLexer.OPEN = 11;
MatLexer.CLOSE = 12;
MatLexer.EQUALS = 13;
MatLexer.TYPE = 14;

MatLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

MatLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

MatLexer.prototype.literalNames = [ null, null, null, null, null, null, 
                                    "'+'", "'-'", "'*'", "'/'", "'%'", "'('", 
                                    "')'", "'='" ];

MatLexer.prototype.symbolicNames = [ null, "NUM_INT", "NUM_DBL", "VAR", 
                                     "NEWLINE", "WS", "SUM", "SUB", "MULT", 
                                     "DIV", "REST", "OPEN", "CLOSE", "EQUALS", 
                                     "TYPE" ];

MatLexer.prototype.ruleNames = [ "NUM_INT", "NUM_DBL", "VAR", "NEWLINE", 
                                 "WS", "SUM", "SUB", "MULT", "DIV", "REST", 
                                 "OPEN", "CLOSE", "EQUALS", "TYPE" ];

MatLexer.prototype.grammarFileName = "Mat.g4";


exports.MatLexer = MatLexer;

