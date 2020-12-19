class Evaluator {
    constructor(asts) {
        this.asts = asts
        this.visitor = new Visitor()
    }
    evaluate() {
        log('======================== RESULTS ========================')
        this.visitor.visitExpressions(this.asts)
    }
}