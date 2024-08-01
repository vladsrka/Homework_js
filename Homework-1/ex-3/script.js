function calculate(expression) {
    // Удаляем все пробелы
    expression = expression.replace(/\s/g, '');

    // Функция для выполнения операций
    function operate(a, b, op) {
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
            default: return 0;
        }
    }

    // Функция для вычисления выражения с учетом приоритета операций
    function evaluate(tokens) {
        const values = [];
        const ops = [];
        let i = 0;

        while (i < tokens.length) {
            if (tokens[i] === '(') {
                ops.push(tokens[i]);
            } else if (tokens[i] === ')') {
                while (ops.length && ops[ops.length - 1] !== '(') {
                    const b = values.pop();
                    const a = values.pop();
                    const op = ops.pop();
                    values.push(operate(a, b, op));
                }
                ops.pop(); // Удаляем '('
            } else if (!isNaN(tokens[i])) {
                values.push(parseFloat(tokens[i]));
            } else {
                while (ops.length && precedence(ops[ops.length - 1]) >= precedence(tokens[i])) {
                    const b = values.pop();
                    const a = values.pop();
                    const op = ops.pop();
                    values.push(operate(a, b, op));
                }
                ops.push(tokens[i]);
            }
            i++;
        }

        while (ops.length) {
            const b = values.pop();
            const a = values.pop();
            const op = ops.pop();
            values.push(operate(a, b, op));
        }

        return values[0];
    }

    // Определяем приоритет операций
    function precedence(op) {
        switch (op) {
            case '+':
            case '-':
                return 1;
            case '*':
            case '/':
                return 2;
            default:
                return 0;
        }
    }

    // Разбиваем выражение на токены
    const tokens = expression.match(/(\d+\.?\d*|[-+*/()])/g);

    if (!tokens) {
        throw new Error("Invalid expression");
    }

    return evaluate(tokens);
}


const expression = "3 + 5 * (20 - 18)";
const result = calculate(expression);
console.log(`Результат выражения "${expression}"= ${result}`);