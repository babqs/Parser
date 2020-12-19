// Generated from Mat.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MatListener = require('./MatListener').MatListener;
var MatVisitor = require('./MatVisitor').MatVisitor;

var grammarFileName = "Mat.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0010=\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0003\u0002\u0007\u0002\u0012\n\u0002\f\u0002\u000e\u0002\u0015",
    "\u000b\u0002\u0003\u0003\u0003\u0003\u0005\u0003\u0019\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005%\n\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0007\u00050\n\u0005\f\u0005\u000e\u0005",
    "3\u000b\u0005\u0003\u0006\u0003\u0006\u0005\u00067\n\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0002\u0003\b\t\u0002\u0004\u0006",
    "\b\n\f\u000e\u0002\u0005\u0003\u0002\n\u000b\u0003\u0002\b\t\u0003\u0002",
    "\u0003\u0004\u0002<\u0002\u0013\u0003\u0002\u0002\u0002\u0004\u0018",
    "\u0003\u0002\u0002\u0002\u0006\u001a\u0003\u0002\u0002\u0002\b$\u0003",
    "\u0002\u0002\u0002\n6\u0003\u0002\u0002\u0002\f8\u0003\u0002\u0002\u0002",
    "\u000e:\u0003\u0002\u0002\u0002\u0010\u0012\u0005\u0004\u0003\u0002",
    "\u0011\u0010\u0003\u0002\u0002\u0002\u0012\u0015\u0003\u0002\u0002\u0002",
    "\u0013\u0011\u0003\u0002\u0002\u0002\u0013\u0014\u0003\u0002\u0002\u0002",
    "\u0014\u0003\u0003\u0002\u0002\u0002\u0015\u0013\u0003\u0002\u0002\u0002",
    "\u0016\u0019\u0005\u0006\u0004\u0002\u0017\u0019\u0005\b\u0005\u0002",
    "\u0018\u0016\u0003\u0002\u0002\u0002\u0018\u0017\u0003\u0002\u0002\u0002",
    "\u0019\u0005\u0003\u0002\u0002\u0002\u001a\u001b\u0007\u0005\u0002\u0002",
    "\u001b\u001c\u0007\u000f\u0002\u0002\u001c\u001d\u0005\b\u0005\u0002",
    "\u001d\u0007\u0003\u0002\u0002\u0002\u001e\u001f\b\u0005\u0001\u0002",
    "\u001f \u0007\r\u0002\u0002 !\u0005\b\u0005\u0002!\"\u0007\u000e\u0002",
    "\u0002\"%\u0003\u0002\u0002\u0002#%\u0005\n\u0006\u0002$\u001e\u0003",
    "\u0002\u0002\u0002$#\u0003\u0002\u0002\u0002%1\u0003\u0002\u0002\u0002",
    "&\'\f\u0007\u0002\u0002\'(\t\u0002\u0002\u0002(0\u0005\b\u0005\b)*\f",
    "\u0006\u0002\u0002*+\u0007\f\u0002\u0002+0\u0005\b\u0005\u0007,-\f\u0005",
    "\u0002\u0002-.\t\u0003\u0002\u0002.0\u0005\b\u0005\u0006/&\u0003\u0002",
    "\u0002\u0002/)\u0003\u0002\u0002\u0002/,\u0003\u0002\u0002\u000203\u0003",
    "\u0002\u0002\u00021/\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u0002",
    "2\t\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u000247\u0005\f\u0007",
    "\u000257\u0005\u000e\b\u000264\u0003\u0002\u0002\u000265\u0003\u0002",
    "\u0002\u00027\u000b\u0003\u0002\u0002\u000289\t\u0004\u0002\u00029\r",
    "\u0003\u0002\u0002\u0002:;\u0007\u0005\u0002\u0002;\u000f\u0003\u0002",
    "\u0002\u0002\b\u0013\u0018$/16"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, "'+'", "'-'", "'*'", 
                     "'/'", "'%'", "'('", "')'", "'='" ];

var symbolicNames = [ null, "NUM_INT", "NUM_DBL", "VAR", "NEWLINE", "WS", 
                      "SUM", "SUB", "MULT", "DIV", "REST", "OPEN", "CLOSE", 
                      "EQUALS", "TYPE" ];

var ruleNames =  [ "input", "stmt", "atrb", "expr", "oprnd", "number", "variavel" ];

function MatParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

MatParser.prototype = Object.create(antlr4.Parser.prototype);
MatParser.prototype.constructor = MatParser;

Object.defineProperty(MatParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

MatParser.EOF = antlr4.Token.EOF;
MatParser.NUM_INT = 1;
MatParser.NUM_DBL = 2;
MatParser.VAR = 3;
MatParser.NEWLINE = 4;
MatParser.WS = 5;
MatParser.SUM = 6;
MatParser.SUB = 7;
MatParser.MULT = 8;
MatParser.DIV = 9;
MatParser.REST = 10;
MatParser.OPEN = 11;
MatParser.CLOSE = 12;
MatParser.EQUALS = 13;
MatParser.TYPE = 14;

MatParser.RULE_input = 0;
MatParser.RULE_stmt = 1;
MatParser.RULE_atrb = 2;
MatParser.RULE_expr = 3;
MatParser.RULE_oprnd = 4;
MatParser.RULE_number = 5;
MatParser.RULE_variavel = 6;


function InputContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MatParser.RULE_input;
    return this;
}

InputContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InputContext.prototype.constructor = InputContext;

InputContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

InputContext.prototype.enterRule = function(listener) {
    if(listener instanceof MatListener ) {
        listener.enterInput(this);
	}
};

InputContext.prototype.exitRule = function(listener) {
    if(listener instanceof MatListener ) {
        listener.exitInput(this);
	}
};

InputContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MatVisitor ) {
        return visitor.visitInput(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MatParser.InputContext = InputContext;

MatParser.prototype.input = function() {

    var localctx = new InputContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, MatParser.RULE_input);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 17;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MatParser.NUM_INT) | (1 << MatParser.NUM_DBL) | (1 << MatParser.VAR) | (1 << MatParser.OPEN))) !== 0)) {
            this.state = 14;
            this.stmt();
            this.state = 19;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MatParser.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;

StmtContext.prototype.atrb = function() {
    return this.getTypedRuleContext(AtrbContext,0);
};

StmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

StmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof MatListener ) {
        listener.enterStmt(this);
	}
};

StmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof MatListener ) {
        listener.exitStmt(this);
	}
};

StmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MatVisitor ) {
        return visitor.visitStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MatParser.StmtContext = StmtContext;

MatParser.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, MatParser.RULE_stmt);
    try {
        this.state = 22;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 20;
            this.atrb();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 21;
            this.expr(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AtrbContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MatParser.RULE_atrb;
    return this;
}

AtrbContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtrbContext.prototype.constructor = AtrbContext;

AtrbContext.prototype.VAR = function() {
    return this.getToken(MatParser.VAR, 0);
};

AtrbContext.prototype.EQUALS = function() {
    return this.getToken(MatParser.EQUALS, 0);
};

AtrbContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AtrbContext.prototype.enterRule = function(listener) {
    if(listener instanceof MatListener ) {
        listener.enterAtrb(this);
	}
};

AtrbContext.prototype.exitRule = function(listener) {
    if(listener instanceof MatListener ) {
        listener.exitAtrb(this);
	}
};

AtrbContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MatVisitor ) {
        return visitor.visitAtrb(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MatParser.AtrbContext = AtrbContext;

MatParser.prototype.atrb = function() {

    var localctx = new AtrbContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, MatParser.RULE_atrb);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        this.match(MatParser.VAR);
        this.state = 25;
        this.match(MatParser.EQUALS);
        this.state = 26;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MatParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.OPEN = function() {
    return this.getToken(MatParser.OPEN, 0);
};

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.CLOSE = function() {
    return this.getToken(MatParser.CLOSE, 0);
};

ExprContext.prototype.oprnd = function() {
    return this.getTypedRuleContext(OprndContext,0);
};

ExprContext.prototype.MULT = function() {
    return this.getToken(MatParser.MULT, 0);
};

ExprContext.prototype.DIV = function() {
    return this.getToken(MatParser.DIV, 0);
};

ExprContext.prototype.REST = function() {
    return this.getToken(MatParser.REST, 0);
};

ExprContext.prototype.SUM = function() {
    return this.getToken(MatParser.SUM, 0);
};

ExprContext.prototype.SUB = function() {
    return this.getToken(MatParser.SUB, 0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MatListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MatListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MatVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



MatParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 6;
    this.enterRecursionRule(localctx, 6, MatParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MatParser.OPEN:
            this.state = 29;
            this.match(MatParser.OPEN);
            this.state = 30;
            this.expr(0);
            this.state = 31;
            this.match(MatParser.CLOSE);
            break;
        case MatParser.NUM_INT:
        case MatParser.NUM_DBL:
        case MatParser.VAR:
            this.state = 33;
            this.oprnd();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 47;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 45;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MatParser.RULE_expr);
                    this.state = 36;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 37;
                    _la = this._input.LA(1);
                    if(!(_la===MatParser.MULT || _la===MatParser.DIV)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 38;
                    this.expr(6);
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MatParser.RULE_expr);
                    this.state = 39;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }

                    this.state = 40;
                    this.match(MatParser.REST);
                    this.state = 41;
                    this.expr(5);
                    break;

                case 3:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MatParser.RULE_expr);
                    this.state = 42;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 43;
                    _la = this._input.LA(1);
                    if(!(_la===MatParser.SUM || _la===MatParser.SUB)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 44;
                    this.expr(4);
                    break;

                } 
            }
            this.state = 49;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function OprndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MatParser.RULE_oprnd;
    return this;
}

OprndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OprndContext.prototype.constructor = OprndContext;

OprndContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

OprndContext.prototype.variavel = function() {
    return this.getTypedRuleContext(VariavelContext,0);
};

OprndContext.prototype.enterRule = function(listener) {
    if(listener instanceof MatListener ) {
        listener.enterOprnd(this);
	}
};

OprndContext.prototype.exitRule = function(listener) {
    if(listener instanceof MatListener ) {
        listener.exitOprnd(this);
	}
};

OprndContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MatVisitor ) {
        return visitor.visitOprnd(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MatParser.OprndContext = OprndContext;

MatParser.prototype.oprnd = function() {

    var localctx = new OprndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, MatParser.RULE_oprnd);
    try {
        this.state = 52;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MatParser.NUM_INT:
        case MatParser.NUM_DBL:
            this.enterOuterAlt(localctx, 1);
            this.state = 50;
            this.number();
            break;
        case MatParser.VAR:
            this.enterOuterAlt(localctx, 2);
            this.state = 51;
            this.variavel();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MatParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.NUM_INT = function() {
    return this.getToken(MatParser.NUM_INT, 0);
};

NumberContext.prototype.NUM_DBL = function() {
    return this.getToken(MatParser.NUM_DBL, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof MatListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof MatListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MatVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MatParser.NumberContext = NumberContext;

MatParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, MatParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        _la = this._input.LA(1);
        if(!(_la===MatParser.NUM_INT || _la===MatParser.NUM_DBL)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VariavelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MatParser.RULE_variavel;
    return this;
}

VariavelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariavelContext.prototype.constructor = VariavelContext;

VariavelContext.prototype.VAR = function() {
    return this.getToken(MatParser.VAR, 0);
};

VariavelContext.prototype.enterRule = function(listener) {
    if(listener instanceof MatListener ) {
        listener.enterVariavel(this);
	}
};

VariavelContext.prototype.exitRule = function(listener) {
    if(listener instanceof MatListener ) {
        listener.exitVariavel(this);
	}
};

VariavelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MatVisitor ) {
        return visitor.visitVariavel(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MatParser.VariavelContext = VariavelContext;

MatParser.prototype.variavel = function() {

    var localctx = new VariavelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, MatParser.RULE_variavel);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this.match(MatParser.VAR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


MatParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 3:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

MatParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		case 2:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.MatParser = MatParser;
