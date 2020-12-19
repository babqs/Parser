grammar Mat; 
//PARSER GRAMMAR

input : stmt*;

//falta output
stmt : atrb
     | expr
     ;

atrb : VAR EQUALS expr;

expr : expr ( MULT | DIV ) expr
     | expr ( REST ) expr
     | expr ( SUM | SUB ) expr
     | OPEN expr CLOSE
     | oprnd
     ;
     
oprnd : number
      | variavel
      ;

number : NUM_INT
       | NUM_DBL
       ;

variavel : VAR
         ;

//GRAMMAR LEXER
NUM_INT : '-'?[0-9]+;
NUM_DBL : '-'?[0-9]+('.'[0-9])+;
VAR : [a-zA-Z_][a-zA-Z_0-9]*;
NEWLINE : [\r\n];
WS  : [ \t\r\n]+ -> skip ;
SUM : '+';
SUB : '-';
MULT : '*';
DIV : '/';
REST: '%';
OPEN : '(';
CLOSE : ')';
EQUALS : '=';
TYPE : 'int'
     | 'double'
     | 'string'
     ;