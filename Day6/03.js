//03.Write a program to check if to objects are equal

function isObjectEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

const obj1 = {
  title: "Mobile",
  price: 2000,
  discount: "20%",
};
const obj2 = {
  title: "Laptop",
  price: 10000,
  discount: "40%",
};

const isEqual = isObjectEqual(obj1, obj2);
console.log(isEqual); //false //karon value same nei tai false return korbe
