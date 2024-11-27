//2.Write a program to find the intersection of two array

function findIntersection(arr1, arr2) {
  const unique = new Set(arr1);

  const result = arr2.filter((item) => unique.has(item));
  return result;
}

const arr1 = [5, 12, 14, 9, 15, 11];
const arr2 = [10, 9, , 12, 11, 1, 6];

const result = findIntersection(arr1, arr2);
console.log(result); //[ 9, 12, 11 ]
