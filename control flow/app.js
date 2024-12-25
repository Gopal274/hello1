//conditional statements

let a = 20;
let b = 20;

if (a > b) {
    console.log("a is greater than b");
} else if (a > b) {
    console.log("a is smaller then b");
} else {
    console.log("a is equal to b ");
}

let time = 10;
let greet;

if (time < 10) {
    greet = "good morning";
    console.log(greet);
} else if (time < 20) {
    console.log("good night");
} else {
    console.log("good after noon");
}

let password = 5;
if (password === 8) {
    console.log("welcome");
} else if (password <= 8) {
    console.log("password is short");
} else if (password >= 8) {
    console.log("password is too long & password should have 8 character");
} else {
    console.log("please provide password");
}

//switch statements

let x = 1;
console.log;
let bulb;
switch (x) {
    case 0:
        bulb = "off";
        console.log(bulb);
        break;
    case 1:
        bulb = "on";
        console.log(bulb);
        break;
    default:
        bulb = "no velue found";
        console.log(bulb);
}

let day = "monday";
switch (day) {
    case "monday":
        console.log("today is monday");
        break;
    case "tuesday":
        console.log("today is tuesday");
        break;
    case "wensday":
        console.log("today is wensday");
        break;
    case "thursday":
        console.log("today is thursday");
        break;
    case "friday":
        console.log("today is friday");
        break;
    case "saturday":
        console.log("today is saturday");
        break;
    case "sunday":
        console.log("today is sunday");
        break;
    default:
        console.log("dont know what day is today");
}

let fruit = "banana";
switch (fruit) {
    case "banana":
        console.log("i like banana");
        break;
    case "apple":
        console.log("how you like apple");
        break;
    case "orange":
        console.log("i am not a fan of orange");
        break;
    default:
        console.log("i am not heard about that fruit");
}

// for loop

for (let i = 0; i <= 5; i++) {
    console.log("hello world", i);
    //nested loop
    for (let j = 0; j <= 2; j++) {
        console.log("hi", j);
    }
}
for (let k = 0; k <= 1000; k++) {
    console.log("Gopal", k);
}

//while loop
let l = 0;
while (l < 2) {
    console.log("hello world", l);
    l++;
}

let m = 10;
while (m <= 100) {
    console.log("Gopal", m);
    m++;
}

let c = 0;
do {
    console.log("hello", c);
    c++;
} while (c <= 10);





//Arrays --> zero index based

//empty Arrays:-->
const emptyArray =[]
console.log(emptyArray);

const numbersArray =[1,2,3,4]
console.log(numbersArray);

const stringArray = ["eat", "sleep","pleef"]
console.log(stringArray)

//accessing item from our array
console.log(stringArray[0])
console.log(stringArray[1])
console.log(stringArray[2])

//nested array

const nestArray = [1, "3at ", "float" ,[13 , "frgjgu6"], 6,"gg" ]
console.log(nestArray)
console.log(nestArray[3][0])


co