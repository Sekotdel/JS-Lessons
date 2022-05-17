'use strict';
/* 
1. к числу 10 прибавляем число 10, получаем число 20, далее Конкатенация со строковым значением 10 и получаем итог (сумма чисел 10 и 10) 20 и строковое значение 10 = 2010
2. Конкатенация числового типа переменной 10 со строковой переменной 10 и далее снова числовая переменная, в итоге получаем все переменные в строку без арефметических выражений 
3. второй оператор "+" перед стрингом программа преобразовывает в интеджер (number)
4. Отрицательная бесконечность в виду деления на пустой оператор
5. оператор "+ " перед "2,5" превратил бы его в число, только в синтаксисе JS дробные числа пишутся через точку, следовательно программа не видит это как дробное число, а видит как стринг, следовательно ответ нот э намбер, так как число не складывается со стрингом.
*/

let result1 = 10 + 10 + "10";
let result2 = 10 + "10" + 10;
let result3 = 10 + 10 + +"10";
let result4 = 10 / -"";
let result5 = 10 / +"2,5";

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);