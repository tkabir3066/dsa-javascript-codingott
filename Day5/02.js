//02.Write a program to create an object from an object using loop

const data = {
  name: "Tutul",
  roll: 29,
  class: 10,
  subject: "English",
};

const newObj = {};

for (let key in data) {
  newObj[key] = data[key];
}

console.log(newObj); //{ name: 'Tutul', roll: 29, class: 10, subject: 'English' }
