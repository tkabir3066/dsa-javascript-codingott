//02.Write a program to find the sum of all values in an object

function sumOfObjectValues(obj) {
  let sum = 0;
  for (let key in obj) {
    sum = sum + obj[key];
  }
  return sum;
}

const obj = {
  a: 10,
  b: 15,
  c: 25,
  d: 30,
};
const result = sumOfObjectValues(obj);
console.log(result); //80
