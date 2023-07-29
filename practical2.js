// variables can store some information
// we can use that information later
// we can change that information later

// declare a variable 
// console.log(firstName);
// var firstName = "Harshit";

// // use a variable 
// console.log(firstName);

// // change value 

// var firstName = "Mohit";

// console.log(firstName);

//  var firstName =
// console.log(firstName);


// let len  = arr.length;
// console.log(len)

// console.log(arr[5]);

arr.push(11);

// arr.forEach((item)=>{
//   console.log(item);
// });


// arr.pop(11);

// arr.forEach((item)=>{
//   console.log(item);
// });


const person={
  name : "kaumil",
  age : 19,
  gender:"male"
}

function print()
{
  console.log(person);
}
print();

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr.length);

console.log(arr[0]);
console.log(arr[1]);

console.log(arr.push(10));
console.log(arr);


console.log("\nPop array");

console.log(arr.pop());
console.log(arr);

console.log("\nShift arr");

console.log(arr.shift());
console.log(arr);

console.log("\nUnshift arr");

console.log(arr.unshift(0));
console.log(arr);

console.log("\nJoin array");

console.log(arr.join("~"));
console.log(arr);

console.log("\nConcat arr");

console.log(arr.concat([13,14,15]));
console.log(arr);

console.log("\nFlat array");

arr = [1,2,3,[4,5,6],[7,8,9]]
console.log(arr.flat());
console.log(arr);

console.log("\nSplice array");

arr.splice(1,11,999)
console.log(arr);


console.log("\nSlice array");


console.log(arr.slice(2,4));
console.log(arr);

console.log("\nDelete from arr");

delete arr[6]
console.log(arr);




