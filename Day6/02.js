//02.Write a program to merge two objects

function mergeObject(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const obj1 = {
  name: "Tutul",
  class: 2,
  roll: 10,
};
const obj2 = {
  maths: 100,
  english: 80,
  EVS: 85,
};

const result = mergeObject(obj1, obj2);
console.log(result);
