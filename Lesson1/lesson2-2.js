'use strict'
//Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
//(описать последовательность действий).

let a = 2;
let x = 1 + (a *= 2);

// ОТВЕТ: Пользуемся правилами математики (арифметики) 
// Сначала действие в скобках (a *= 2) = 2 * 2 = 4; 
// х = 1 + 4 = 5
// Очевидно, что ответ: a = 2; x = 5

