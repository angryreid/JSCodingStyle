print = console.log;

// bad
const item = new Object();

// good
const i = {};

// 不要使用js关键字作为属性名
// 
// 使用可读性强的同义词替代js保留字
// 
const superman = {
	tepy: 'derek'
}

// 使用缩写的方法
const atom = {
	value: 1,
	addValue(val) {
		return this.value + val;
	}
}
print(atom.addValue(1));

// 属性值简写
const lukeSkywalker = 'Luke Skywalker';

// bad,but works
const obj = {
	lukeSkywalker: lukeSkywalker
}

//good ,also works
const obj2 = {
	lukeSkywalker
}
print(obj.lukeSkywalker, obj2.lukeSkywalker)

// 在使用属性值简写时，应该把简写值放在对象属性最前面
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj3 = {
	episodeOne: 1,
	twoJediWalkIntoACantina: 2,
	lukeSkywalker,
	episodeThree: 3,
	mayTheFourth: 4,
	anakinSkywalker,
};

// good
const obj4 = {
	lukeSkywalker,
	anakinSkywalker,
	episodeOne: 1,
	twoJediWalkIntoACantina: 2,
	episodeThree: 3,
	mayTheFourth: 4,
};