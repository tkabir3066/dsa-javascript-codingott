// 03.Write a program to check if one set is a subset of another

function subsetOfArr(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);

  const isSubset = [...set2].every((item) => set1.has(item));
  return isSubset;
}

const arr1 = [1, 2, 4, 5, 7];
const arr2 = [2, 5, 7, 9]; // arr2 er sob vlue arr1 er sathe match korlei tobe true return korbe // ekhane false return korbe karon arr2 te 9 ache but arr1 e 9 nei

const result = subsetOfArr(arr1, arr2);
console.log(result); //false
