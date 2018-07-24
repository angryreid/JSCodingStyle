/**
 *simpler types
 * 
 * string
 * number
 * boolean
 * null
 * undefined
 */

// 
const foo = 1;
let bar = foo;

bar = 9;
console.log(foo,bar)

/**
 * complex types
 *
 * object
 * array
 * functions
 */

const fooArr = [1,2,3];
const barArr = fooArr;
barArr[0] = 9;

console.log(fooArr[0],barArr[0]);