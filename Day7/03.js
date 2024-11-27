//02.Write a program to check if an object is empty

function isEmptyObject(obj) {
  const keys = Object.keys(obj);
  if (keys.length === 0) {
    return true;
  }
  return false;
}

const obj = {};
const obj1 = {
  name: "tk",
};
const result = isEmptyObject(obj);
console.log(result); //true
const result1 = isEmptyObject(obj1);
console.log(result1); //false
