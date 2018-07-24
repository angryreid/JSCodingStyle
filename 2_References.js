var a = 1;
var b = 2;

/**
 * use const replace var
 * const can't change
 */

const c = 3;
const d = 4;
// c = 5;//error
console.log(a, b, c, d)


/**
 * use let replace var
 * let can change
 */
let foo = 1;
let bar = 2;
foo = 3;
bar = 4;
console.log(foo,bar)

//  Note that both let and const are block-scoped.