// Check the data type of the variable's value

const passedExam = true;
const country = "Bangladesh";
const price = 555;

console.log(typeof passedExam);
console.log(typeof country);
console.log(typeof price);

// Types of Variable
// 1. Number:1, 2, 3, 4, 5 etc.
// 2. String: "English", "Hello World"
// 3. Boolean:true, false


// Practice-1  

const lastPrice = 666;
console.log( typeof lastPrice);

// 
const learning = true;
console.log(typeof learning);

// Practice-3 
const megaCity = "Dhaka";
console.log(typeof megaCity);

// Practice-4
const temperature = 102.5;
console.log(typeof temperature);

// Practice-5
const isHungry = true;
console.log(typeof isHungry);

// Practice-6
const isRich = false;
console.log(typeof isRich);

//  Note: const means constant or fixed. so, you can't change any value of variables.


// Use of "Let" to change or update the variables' values

let priceT = 35;
priceT = 45;
console.log(priceT);

let balance = 500;
balance = 150;
console.log(balance);


// if you use 'const' instead of 'let', you can not change or update the value and output will show error. 

// const name = "Kala Mia";
// name = "Lal Mia";

// console.log(name);


// Practice-1 তোর বর্তমান বয়স age নামে একটা ভেরিয়েবলে রাখ। কনসোল প্রিন্ট কর। তারপর age ভেরিয়েবলে নতুন নাম সেট কর এবং আবার কনসোল প্রিন্ট কর।
let age = 35;
age = 34;
console.log(age);

// Practice-2 Practice-2 তোর পকেটে এখন 500 টাকা আছে, pocketMoney নামে একটা ভেরিয়েবলে রাখ। পরে pocketMoney-এর মান 150 সেট কর এবং কনসোল প্রিন্ট কর।
let pocketMoney = 500;
pocketMoney = 150;
console.log(pocketMoney);

// Practice-3 তুই 4 ঘন্টা পড়াশোনা করার পরিকল্পনা করেছিস, studyTime নামে একটা ভেরিয়েবলে রাখ। পরে studyTime-এর মান আপডেট করে তুই আসলেই আজকে যত ঘন্টা পড়াশোনা করছস, সেটা সেট কর। মান যদি 0 হয়, তাহলে 0-ই সেট কর এবং কনসোলে দেখ।
let studyTime = 4;
studyTime = 0;
console.log(studyTime);

// Practice-4 তোর মোট 3 জন বন্ধু আছে, friendscount নামে একটা ভেরিয়েবলে এই সংখ্যা রাখ। পরে তোর 2 জন ফ্রেন্ড তোকে ছেড়ে চলে গেল। এখন friendscount-এর মান আপডেট কর এবং কনসোলে সেটার আপডেট দেখ।
let friendscount = 3;
friendscount = 1;
console.log(friendscount);

// Practice-5
let phonePrice = 25000;
phonePrice = 12000;
console.log(phonePrice);

// Practice-6
let chairsCount = 40;
chairsCount = 38;
chairsCount = 32;
console.log(chairsCount);

// Practice-7
let playTime = 3;
playTime = 0;
console.log(playTime); 



// Use "comment" to write down any important information

// one line commet 
const userLevel = 4; //make user admin
console.log(userLevel);

// to off one line code 
let price3 = 100;
// price3 = 50;
console.log(price3);

// Many lines comment 

// Total number of items in the shopping cart.
// This value is initially set tp 0 because the user has not added any items yet.
// It will increase wheneverthe user adds an item to chart.
let totallitems = 0;

// write multiple lines in a comment  

/* 
This variable stores the maximum number of attempts a user is allowed to make while logging into their account. it is set to 3. If the user exceeds this limit, their account will be temporarily locked.
*/
let maxLogAttempts = 3;

// Practice-1

//this is customers' feedback score
let score = 70;


// Practice-2

// redius for heard circle
// it is used to measure 
// user may change it
let radius = 20;

// Practice-3

/* there are 5 dresses: blue,whitw,yellow and red. these all are my favourite dress.
I wear them at special programs.
It is very cosy.
*/
let dress = 5;

// Practice-4
let giftMoney = 100; // this money has been given as a Eid Salami

// Practice-5

//bangla 1hour
//english 2 hour
//math 2 hour
//islam 2 hour
let studyTimes = 7;

// Practice-6

//he will get 1500 Tk 
//Service charge that is 5 tk  will be cut from my balance  
let sendMoney = 1500;

// Practice-7

//here product price is 600 tk and delivery fee is 55 tk.
let pay = 655;


// About using variable "name"******

1. ভেরিয়েবলের নাম হিসেবে javaScript  এর  কি-ওয়ার্ড ব্যবহার করা যাবে না। যেমন: "const", "false" etc

const false = 45; // wrong
const const = 50; // wrong

2. ভেরিয়েবলের নামের মধ্যে  Space বা gap ব্যবহার করা যাবে না। পুরো নাম একসাথে লিখতে হবে।

const is happy = false; // wrong
const isHappy = true; //Right

3. ভেরিয়েবলের নামের মধ্যে Quotation '' ব্যবহার করা যাবে না।

const "address" = xyz; //wrong

4. ভেরিয়েবলের নাম সংখ্যা দিয়ে শুরু করা যাবে না। তবে নামের প্রথম অক্ষর ছাড়া যেকোনো জায়গায় সংখ্যা ব্যবহার করা যাবে।

const 3money = 45; // Wrong
const money3 = 45; //Right
const mon3ey = 45; //Right

5. এমনকি নামের মধ্যে এক বা একাধিক অক্ষর যদি ইংরেজি ছোট হাতের বা বড় হাতের হয়, তাহলেও কিন্তু আলাদা আলাদা ভেরিয়েবল হিসেবে গণ্য হবে। এইটাকে বলে ভেরিয়েবলের নাম Case sensitive।

const address = "xyz";
const Address = "abc";
const AddresS = "efg";

6. ভেরিয়েবলের বড় নাম লিখার নিয়ম।

const mycurrenthomeaddress = "Dhaka"; // not recommended
const my_current_home_address = "Dhaka"; // (snake case) try ot avoid
const myCurrentHomeAddress = "Dhaka"; //(camel case) recommended

7. ভেরিয়েবলের নামের মধ্যে কোনো স্পেশাল ক্যারেক্টার ব্যবহার করা যাবে না। শুধু মাত্র (_) আন্ডারস্কোর এবং ($) ডলার সাইন ব্যবহার করা যায়।
কিন্তু অন্য কোনো ক্যারেক্টার (যেমন: @, #, %, &,*) ব্যবহার করলে দিবে।

const my@name = "Rana"; //Wrong
const price#fish = 150; //wrong
const user$name = "Masud Rana"; // Right
const _secretCode =1234; //Right











