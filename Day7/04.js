//04.Write a program to return the keys of any object as an array

//using common js
function objectKeys(obj) {
  let arr = [];
  for (let key in obj) {
    arr.push(key);
  }

  return arr;
}
//====== using ES6 ======//
// function objectKeys(obj) {
//   return Object.keys(obj);
// }

const obj = {
  name: "Tutul",
  roll: 11,
  class: 12,
  subject: "Maths",
};

const result = objectKeys(obj);
console.log(result); //[ 'name', 'roll', 'class', 'subject' ]
