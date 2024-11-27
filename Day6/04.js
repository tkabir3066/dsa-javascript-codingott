//04.Write a program to invert the keys and values of an object

function invertObject(obj) {
  let inverted = {};
  for (let key in obj) {
    const value = obj[key];
    inverted[value] = key;
  }
  return inverted;
}
const obj = {
  price: 20,
  quantity: 14,
  rate: 12,
};

const result = invertObject(obj);
console.log(result); //{ 12: 'rate', 14: 'quantity', 20: 'price' }
