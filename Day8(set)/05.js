//05.Write a program to find the differences between two sets

function differencesInArrays(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const result = [...set1].filter((item) => !set2.has(item));

  return result;
}

const arr1 = [1, 5, 9, 7, 11];
const arr2 = [1, 4, 9, 10, 11];

const result = differencesInArrays(arr1, arr2);

console.log(result); //[ 5, 7 ]
