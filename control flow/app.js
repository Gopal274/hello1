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
