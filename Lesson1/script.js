var leftBorderWidth = 1; // var is created before executing
let second = 2; //let and const are created only after usage in code
console.log(second);
const pi = 3.1415926535897932384626;

//All 7 types of variables in JS
var number = 5;
var string = "String";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);  //infinity
console.log('string' * 9)  //NaN
let smth;
console.log(smth);


let person = {
    name: "John",
    age: 25,
    isMarried: false
}

//2 types of chosing obj property
console.log(person.name);
console.log(person["name"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[2]);

//alert("Hello World!");
/*let answer = confirm("Are you here?");
console.log(answer);*/
let ans = prompt("Are you over 18?", "Yes!");
console.log(typeof(null));