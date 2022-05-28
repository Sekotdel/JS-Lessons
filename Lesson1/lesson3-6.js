/** Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,

только у вашей горки должно быть 20 рядов, а не 5:

x

xx

xxx

xxxx

xxxxx 
*/

for (let a = 0, len = 20, pyr = []; a <= len; a++) {
    pyr.push('#');
    console.log(pyr.join(' '));
}
