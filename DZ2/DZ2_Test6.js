function add(a, b) { return a + b };
function sub(a, b) { return a - b };
function mul(a, b) { return a * b };
function div(a, b) { return a / b };
function MathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'add': return add(arg1, arg2);
        case 'sub': return sub(arg1, arg2);
        case 'mul': return mul(arg1, arg2);
        case 'div': return div(arg1, arg2);
        default: return 'Введена неизвестная операция.';
    };
};
