//01.Write a program to print object keys with the help of loop

const data = {
  name: "Tutul",
  roll: 29,
  class: 10,
  subject: "English",
};

for (let key in data) {
  console.log(key); // name,  roll, class, subject
  console.log(data[key]); //Tutul, 29, 10, English

  console.log(" Value=>", data[key]);
}
