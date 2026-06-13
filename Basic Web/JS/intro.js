// console.log("external Js");

// let 

// let name = "harshit";
// console.log(name);
// let name = "Test";
// console.log(name);


// var
// var name = "Harshit";
// console.log(name);
// var name = "Test";
// console.log(name);


// const
// const name = "Harshit";
// name = "Test";
// console.log(name);


// Data Types
// String
var city = "mumbai";
//  var city = 'mumbai';
//  var city = `mumbai`;

// console.log("My City Name Is " + city)
// console.log(`My City Name Is ${city}`)

// Number
//  var count = 15;
var count = 1.3455;
// console.log(typeof count);

// Boolean 
var isCorrect = true;
var isCorrect = false;

// console.log(typeof isCorrect);


// var test;
// console.log(test)
// console.log(typeof test)

// var nullValue = null;
// console.log(nullValue)
// console.log(typeof nullValue);


// Operators 
// operand1 operator  operand2

// Types Of Operator
// Arithmetic
var num1 = 10;
var num2 = 2;
// var sum = num1 + num2;
// var sub = num1 - num2;
// var mul = num1 * num2;
// var div = num1 / num2;
// var mod = num1 % num2;
var expo = num1 ** num2;

// var sum = 10 + 5;


// console.log(sum);
// console.log(typeof num1)
// console.log(typeof num2)
// console.log(typeof sum)
// console.log(sub);
// console.log(mul);
// console.log(div);
// console.log(mod);
// console.log(expo);

// console.log(num1++);
// var incVal = num1++;
// console.log(incVal)


// Comparison
var num1 = 10;
var num2 = "10";

// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1 >= num2);
// console.log(num1 <= num2);
// console.log(num1 == num2);
// console.log(num1 === num2);
// console.log(num1 != num2);
// console.log(num1 !== num2);


// logical
// AND -> &&
// OR -> ||
// NOT -> !

// console.log(true && false)
// console.log(true || false)
// console.log(!false)

// Assignment
// =

// var num = 5;

// num += 7;
// num = num + 7;
// console.log(num);

// ternary
// var age = 18;
// var haveLicense = false
// var result = (age >= 18 && haveLicense) ? "Pass" : "Fail";
// console.log(result);

// console.log(11 + 28 + "25" - 100);
// console.log(100 > 99 > 0);

// var age = 10;

// if(age>=18){
//     console.log("Drive");
// } else{
//     console.log("Can't Drive");
// }


// const marks = 68;

// if (marks>90){
//     console.log("A");
// } else if (marks >70){
//     console.log("B");
// } else if (marks > 50){
//     console.log("c");
// }


// var operation = "Sub";
//  switch(operation){
//     case "Add":
//         console.log("Addition")
//         break;
//     case "Sub" :
//         console.log("Subtraction")
//         break;
//     case "Mul":
//         console.log("Multiplication")
//         break;
//     default:
//         console.log("Wrong Input");
//         break;
//  }

// Loops
// while
var num = 1;
// while(num<11){
//     console.log(num);
//     num++;
// }

// do{
//     console.log(num);
//     num++;
// }while(num<11);

// console.log(num);
// for (num = 1; num <= 10; num++) {
//     console.log(num);
// }


// const arr = [1, 2, 3, 4, 5];
// console.log(arr[0]);
// arr.push(21);
// arr.shift();
// arr.unshift(22);

// arr.splice(2,1,24);
// console.log(arr);


// const arr = [1, 2, 3, 4, 5];

// for(var num=0; num<arr.length; num++){
//     console.log(arr[num]);
// }

// for (const num of arr) {
//     console.log(num);
// }

// for (const num in arr) {
//     console.log(num);
// }

// arr.forEach(value=>{
//     console.log(value);
// })

// var result = arr.map(value => {
//     return(value + 2);
// })

// console.log(result);

// function greet() {
//     console.log("Hello");
// }

// greet();
// greet();
// greet();
// greet();
// greet();
// greet();
// greet();
// greet();


// Array Question
// var arr = [34, 64, 50, 21, 99, 36, 75];

// let result = arr[0];

// for (const element of arr) {
//     if (result < element) {
//         result = element;
//     }
// }

// console.log(result);

//  function greet(name) {
//     console.log("Hello "+ name);
// }

// greet("Harshit");


// function add(a, b){
//     var sum = a + b;
// console.log(a+b)
//     return sum
//     console.log("first");
// }

// var result = add(5,5);
// console.log(result);


// var sum = function add(a, b){
//     var sum = a + b;
//     // console.log(sum)
//     return sum
// }

//  var result = sum (7,7);


// const add = (a, b) =>{
//  return a + b;   
// }

// const add = (a, b) => a + b;

// const greet = name => `Hello ${name}`

// console.log(greet("Harshit"))

// var result = add(9, 9);
// console.log(result);


// const arr = [11, 32, 50, 46, 7, 10, 9, 35, 25];

// const resArr = arr.map(value => {
//     if (value > 30) {
//         return value;
//     }
// })

// console.log(resArr)

// const resArr1 = arr.filter(value => value > 30);

// console.log(resArr1)

// const arr = [1, 2, 3, 4, 5, 6];


// var sumOfArr = arr.reduce((initVal, value)=>{
//     return initVal + value;
// }, 0)

// console.log(sumOfArr);



// console.log("Start");

// setTimeout(()=>{
//     console.log("Mid")
// },3000)

// console.log("End");



// var person = {
//     name:"Xyz",
//     age:21,
//     email:"xyz@gmail.com",
//     address: {
//         city: "mumbai",
//         pincode: 123
//     }
// }

// console.log(person)
// console.log(typeof person)
// console.log(person.name)
// console.log(person.email)

// person.email = "xyz@outlook.com"
// person.mobile = "99999999999";



// const {name, email, mobile} = person;
// console.log(name);
// console.log(email);
// console.log(mobile);
// console.log(person.address.city)

// const currentDate = new Date();
// console.log(currentDate);

// var time = setInterval(() => {
//     const currentDate = new Date();
//     console.log(currentDate.toLocaleTimeString());
// }, 1000)

// setTimeout(()=>{
//     clearInterval(time);
// },5000)
var localCount = localStorage.getItem("count");
var count = localCount ? localCount : 0;

var pCount = document.getElementById("count");
var btn = document.getElementById("addBtn");
var btn2 = document.getElementById("subBtn");
var btn3 = document.getElementById("resetBtn");
pCount.textContent = count;

btn.addEventListener("click", () => {
    count++;
    pCount.textContent = count;
    localStorage.setItem("count", count);
});

btn2.addEventListener("click", () => {
    count--;
    pCount.textContent = count;
    localStorage.setItem("count", count);
});

btn3.addEventListener("click", () => {
    count = 0;
    pCount.textContent = count;
    localStorage.setItem("count", count);
});
