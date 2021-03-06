const OPERATIONS: string[] = [
    '=',//equal
    '+',//plus
    '-',//minus
    '*',//multi
    '/',//div
    'print',
    'if',
    'define'
];

export class Token {
    tokenString: string;
    
    constructor(tokenString: string) {
        this.tokenString = tokenString;
    }
    
    get isOperation() {
        return OPERATIONS.indexOf(this.tokenString) !== -1;
    }

    get isNumber() {
        return !Number.isNaN(parseFloat(this.tokenString)) && Number.isFinite(+this.tokenString);
    }

    get isBrace() {
        return [')', '('].indexOf(this.tokenString) !== -1;
    }

    get isOpenBrace() {
        return this.tokenString === '(';
    }

    get isCloseBrace() {
        return this.tokenString === ')';
    }
    
    get kind() {
        return this.isOperation ? 'operation' : !this.isBrace ? 'data' : null;
    }
    
    get value() {
        if (this.isNumber) {
            return +this.tokenString;
        }
        throw new Error(`O_o: '${this.tokenString}' is not a Data`);
    }
}
