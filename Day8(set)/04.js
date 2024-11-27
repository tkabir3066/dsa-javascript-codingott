//04.Write a program to find the union of two array

function unionOfArrays(arr1, arr2) {
  return new Set([...arr1, ...arr2]);
}

const arr1 = ["ravi", "mavi", "ravi"];
const arr2 = ["payel", "Koyel"];

const result = unionOfArrays(arr1, arr2);
console.log(result); //Set(4) { 'ravi', 'mavi', 'payel', 'Koyel' }
