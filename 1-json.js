const fs=require('fs');
// const book={
//     title:"Rich Dad, poor Dad",
//     author:'Robert kiyosaki'
// }
// let bookJSON=JSON.stringify(book);
// // Writing it to a file.
// fs.writeFileSync('1-json.json',bookJSON);
// var dataBuffer=fs.readFileSync('1-json.json');
// console.log(dataBuffer.toString());
const parseData=fs.readFileSync('1-json.json');
var ParsedData=JSON.parse(parseData);
// console.log(ParsedData);
ParsedData.name='Aditya';
ParsedData.age=22;
// console.log(ParsedData);
const StringedObj=JSON.stringify(ParsedData);
console.log(StringedObj);
fs.writeFileSync('1-json.json',StringedObj);
