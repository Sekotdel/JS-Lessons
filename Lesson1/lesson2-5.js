'use strict'
//**Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation)где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции (использовать switch) выполнить одну из арифметических операций (использовать функции из задания 4) и вернуть полученное значение. */

function summ(a, b){
    return a + b;
}

function diff(a, b){
    return a - b;
}

function multi(a, b) {
    return a * b;    
}

function split(a, b) {
    return a / b;
}

// То как я пытался что-то сделать
/**function mathOperation(a, b, operation){
    switch (operation) {
        case summ:
        return summ;
        

            break;
    
        default:
            break;
    }}
    console.log(mathOperation(1, 2));
    */


    // То как сделано должно быть и показано в решебнике

    function mathOperation(arg1, arg2, operation) {
        switch (operation) {
            case "+":
                return summ(arg1, arg2);
            case "-":
                return diff(arg1, arg2);
            case "/":
                return split(arg1, arg2);
            case "*":
                return multi(arg1, arg2);        
            default:
                throw new Error("Операция" + operation + "не предусмотрена");
        }
    }

    console.log(mathOperation(4, 7, "+"));
    console.log(mathOperation(4, 7, "-"));
    console.log(mathOperation(4, 7, "/"));
    console.log(mathOperation(4, 7, "*"));
    console.log(mathOperation(4, 7, "lorem"));