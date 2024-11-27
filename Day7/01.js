// 01.Write a program to remove keys with falsy values from an object

function removeFalsyValues(obj) {
  const newObj = {};
  for (let key in obj) {
    const value = obj[key];
    if (value) {
      newObj[key] = value;
    }
  }

  return newObj;
}

const obj = {
  username: "admin",
  password: 1234,
  isLoggedIn: false,
  status: "active",
  amount: 0,
};

const result = removeFalsyValues(obj);
console.log(result); //{ username: 'admin', password: 1234, status: 'active' }
