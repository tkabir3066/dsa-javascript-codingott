//06.Write a program to find key with the highest value in an object

/* // process-1
function highestValue(obj) {
  let max = 0;
  for (let key in obj) {
    const value = obj[key];
    if (value > max) {
      max = value;
    }
  }

  return max;
} */

// process-2
function highestValue(obj) {
  const values = Object.values(obj);

  return Math.max(...values);
}

const obj = {
  a: 5,
  b: 7,
  c: 25,
  d: 22,
  e: 24,
};

const result = highestValue(obj);
console.log(result); //25
