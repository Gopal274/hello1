console.log("this is a warning");
console.log("this is a warning");
console.log("this is a warning");
console.log("this is a warning");
console.clear();

console.warn("this is a warning");
console.error("this is a warning");
console.table({
    name: "huzain",
    age: 20
});
console.log({
    name: "alex"
});

//comments
//console.log("hello world")

// variables

//(reserved keyword) (variables) (types of value)

//declare

let name;
console.log(name);

let hello = 5;

console.log(hello);

hello = "gopal";
console.log(hello);

//assign value
let banana;
banana = "banana";
console.log(banana);

//exercise
let name1 = "gopal";
let wanna = "doctor";
let gender = "male";
let twitterhandle = "pata nahi";

console.log(name1);
console.log(wanna);
console.log(gender);
console.log(twitterhandle);

//primitive types
//1.Number

let num = -10;
console.log(num);

let num1 = -10.06;
console.log(num1);

//basic math
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(22);
console.log(2 ** 2);

let counter = 0;
counter++;

console.log(counter);

let counter1 = 0;
counter1++;
counter1++;
counter1++;
counter1++;
counter1++;
counter1++;
counter1++;
counter1++;

console.log(counter1);

let counter2 = 10;
counter2--;

console.log(counter2);

//exercise

let firstfavnumber = 13;
let seconffavnumber = 17;

console.log(firstfavnumber - seconffavnumber);
console.log(firstfavnumber + seconffavnumber);
console.log(firstfavnumber * seconffavnumber);
console.log(firstfavnumber / seconffavnumber);
console.log(firstfavnumber % seconffavnumber);
console.log(firstfavnumber ** seconffavnumber);

//2.Boolean

let istrue = true;
console.log(istrue);

let isfalse = false;
console.log(isfalse);

let isNaN = NaN;

console.log(isNaN);

let number = 10;
console.log(number + undefined);

//falsy-->

//false
//null
//undefined
//0
//-0
//NaN
//empty--> '', "",

let notdefined = undefined;
console.log(notdefined);

let notdefined1 = null;
console.log(notdefined1);

//exercise

let isJsProgramingLangauge = true;
let isJsHard = false;
let favNumb = 17;
console.log(favNumb + undefined);

// comparison operator-->
// 1.relational operator
// 2.equality operator

// 1.relational operator
console.log(10 > 10);
console.log(10 < 10);
console.log(10 >= 10);
console.log(10 <= 10);
console.log(10 === 10);

// 2.equality operator

let firstName = "    Gopal    ";
let secondName = "ojha";

//1.concatenation
// fullName = firstName.concat(secondName);
// console.log(fullName)

//2.Append
// firstName += "something else "
// console.log(firstName)

//3.length
// console.log(firstName.length)

//4.cases

//lowercase
// console.log(firstName.toLowerCase());

//uppercase
// console.log(firstName.toUpperCase());

//slice
// console.log(firstName.slice(0,3));
// console.log(firstName.slice(1,3));

//6.split & join
// console.log(firstName.split('').join("-"))
// console.log(firstName.split(' '))

//7.includes
// console.log(firstName.includes("w"))

//Trim

// console.log(firstName.trim());

//exercise
let favActorFirstName = "Gopal";
let favActorLastName = "Ojha";

let favActorFullName = favActorFirstName.concat(favActorLastName);

console.log(favActorFullName.toUpperCase());
let message =
    "my favroite actor name is " +
    favActorFullName +
    "he is hard working person ";
message += "is best show is silicon valley";

console.log(message);

//type conversion

let money = "50";

//-convert String into number:-

// console.log(money)
// money = parseInt(money)
// money = +money;
// money = Number(money);

//converting number to String

money = toString();

console.log(money);
console.log(typeof money);
