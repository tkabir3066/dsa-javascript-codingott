//01.Write a program to count the occurrences of each character in string

function countOccurrences(str) {
  let obj = {};
  let count = 0;
  for (let key of str) {
    obj[key] = (obj[key] || 0) + 1;
  }
  return obj;
}

const result1 = countOccurrences("saurav");
const result2 = countOccurrences("apple");
console.log(result1); //{ s: 1, a: 2, u: 1, r: 1, v: 1 }
console.log(result2); //{ a: 1, p: 2, l: 1, e: 1 }
