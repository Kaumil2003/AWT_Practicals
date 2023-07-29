// var first$name  = "kaumil";
// console.log(first$name);

// var first_name = "patni";
// console.log(first_name);// rules for naming variables 

// // you cannot start with number 
// // example :- 
// // 1value (invalid)
// // value1 (valid)

// var value1 = 2;
// console.log(value1);

// you can use only undersore _ or dollar symbol 
// first_name (valid)
// _firstname (valid) 

// first$name (valid)
// $firstname (valid)

// you cannot use spaces 
// var first_name = "harshit"; // snake case writing 
// var firstName = "harshit"; // camel case writing 
// first name (invalid)

// convention 
// start with small letter and use camelCase 
let p = 108;
console.log(p);

const a = 108;
console.log(a);

let mul = (p,q) => q * p;
console.log("My ID : " + mul(54, 2));

let arry1 = [1,2,3,4,5,6,7];
console.log(...arry1);

for (let i of arry1) {
  console.log(i);
}

let map = new Map();
map.set('name', 'kaumil');
map.set('age', 19);
console.log(map);

let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.delete(3);
console.log(set);


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let person = new Person('kaumil', 19);
console.log(person);


let promise = new Promise((resolve, reject) => {
  resolve('Done');
  reject('Error');
});
promise.then((value) => {
  console.log(value);
});


let s = Symbol('hello world');
console.log(s);


function sum(a = 100, b = 8) {
  return a+b;
}
console.log("My ID : " + sum());


function sub(...args) {
  let sub = 0;
  for (let i of args) {
    sub= sub-i;
  }
  return sub;
}
console.log(sub(1,2,3,4,4,5,6));