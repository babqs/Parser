/**
 *  Binary Expressions
 *  *,/,-,+
 */
class Visitor {
    visitBinary(ctx) {
        const type = ctx.operator
        switch (type) {
            case 'ADD':
                return ctx.left.visit(this) + ctx.right.visit(this)
            case 'SUB':
                return ctx.left.visit(this) - ctx.right.visit(this)
            case 'MUL':
                return ctx.left.visit(this) * ctx.right.visit(this)
        }
    }
    visitLiteral(ctx) {
        return Number(ctx.value)
    }
    visitGrouping(expr) {
        const e = expr.expr
        return e.visit(this)
    }
    visitExpressions(expressions) {
        for (const expr of expressions) {
            log(expr.visit(this))
        }
    }
}