//05.Write a program to count the number of keys in object

//using common js
function countKeys(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }

  return count;
}
// function countKeys(obj) {
//   let arr = [];
//   for (let key in obj) {
//     arr.push(key);
//   }

//   return arr.length;
// }

//========== using ES6 ========//
// function countKeys(obj) {
//   const arr = Object.keys(obj);

//   return arr.length;
// }

const obj = {
  name: "Tutul",
  roll: 11,
  class: 12,
  subject: "Maths",
};

const result = countKeys(obj);
console.log(result); //
