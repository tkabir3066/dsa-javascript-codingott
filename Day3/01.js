// 01.Write a program to create a new array using the map() method, where each element is in uppercase

const students = ["Tutul", "Chirag", "Sourav", "Ayan"];

const newArr = students.map((student) => student.toUpperCase());

console.log(newArr); //[ 'TUTUL', 'CHIRAG', 'SOURAV', 'AYAN' ]
