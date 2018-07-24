// bad
const items = new Array();

// good
const goodItems = [1,2,3,4,5];
// bad
goodItems[goodItems.length] = 'abracadabra';

// good
goodItems.push('abracadabra');

// 使用三点运算符进行数组拷贝
// 
// bad
const len = goodItems.length;
let itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
  itemsCopy[i] = goodItems[i];
}

// good
itemsCopy = [...goodItems];
console.log(itemsCopy)

// 将类数组对象转为数组，使用Array.from()
const foo = document.querySelectorAll('.foo');
const nodes = Array.from(foo);