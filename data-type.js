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

// 1. ভেরিয়েবলের নাম হিসেবে javaScript  এর  কি-ওয়ার্ড ব্যবহার করা যাবে না। যেমন: "const", "false" etc

// const false = 45; // wrong
// const const = 50; // wrong

// 2. ভেরিয়েবলের নামের মধ্যে  Space বা gap ব্যবহার করা যাবে না। পুরো নাম একসাথে লিখতে হবে।

// const is happy = false; // wrong
// const isHappy = true; //Right

// 3. ভেরিয়েবলের নামের মধ্যে Quotation '' ব্যবহার করা যাবে না।

// const "address" = xyz; //wrong

// 4. ভেরিয়েবলের নাম সংখ্যা দিয়ে শুরু করা যাবে না। তবে নামের প্রথম অক্ষর ছাড়া যেকোনো জায়গায় সংখ্যা ব্যবহার করা যাবে।

// const 3money = 45; // Wrong
// const money3 = 45; //Right
// const mon3ey = 45; //Right

// 5. এমনকি নামের মধ্যে এক বা একাধিক অক্ষর যদি ইংরেজি ছোট হাতের বা বড় হাতের হয়, তাহলেও কিন্তু আলাদা আলাদা ভেরিয়েবল হিসেবে গণ্য হবে। এইটাকে বলে ভেরিয়েবলের নাম Case sensitive।

const address = "xyz";
const Address = "abc";
const AddresS = "efg";

// 6. ভেরিয়েবলের বড় নাম লিখার নিয়ম।

const mycurrenthomeaddress = "Dhaka"; // not recommended
const my_current_home_address = "Dhaka"; // (snake case) try ot avoid
const myCurrentHomeAddress = "Dhaka"; //(camel case) recommended

// 7. ভেরিয়েবলের নামের মধ্যে কোনো স্পেশাল ক্যারেক্টার ব্যবহার করা যাবে না। শুধু মাত্র (_) আন্ডারস্কোর এবং ($) ডলার সাইন ব্যবহার করা যায়।
// কিন্তু অন্য কোনো ক্যারেক্টার (যেমন: @, #, %, &,*) ব্যবহার করলে দিবে।

// const my@name = "Rana"; //Wrong
// const price#fish = 150; //wrong
// const user$name = "Masud Rana"; // Right
//const _secretCode =1234; //Right


// javaScript Keywords ************

/* 
abstract, boolean, break, byte, case, catch, char, class, const,continue,
debugger, default, delete, do, double, else, enum, export, extends, false, final, finally, float, for, function, 
goto,if, implements, import, in, instance of, int, interface, long, native, new, null, 
package, private, protected, public, return, short, statice, super, switch, synchronized, 
this, throw, throws, transient, true, try, type of, var, void, volatile, while, with. 

*/


// Practice:

// 1. তুই একটা প্রোগ্রাম লিখে দেখ, যেখানে তুই ভেরিয়েবল ডিক্লেয়ার করবি camelCase ব্যবহার করে। ধর, তুই তোর প্রিয় খাবার নামে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার কর। আর সেটার মান দে।

const myFavouriteFood = "Kachchi";

// 2. তুই দেখ, ভেরিয়েবলের নাম case-sensitive কি না। একটা প্রোগ্রাম লিখে দুইটা ভেরিয়েবল ডিক্লেয়ার করবি, একটা নাম ‘city’, আরেকটার নাম ‘City’। প্রথমটার মান ‘Chittagong’ আর দ্বিতীয়টার মান দে ‘Dhaka’।  দিয়ে দুইটা আউটপুট দেখ।

const city = "Chittagong";
const City = "Dhaka";

console.log(city, City);

//3. তুই  userName নামে একটা ভেরিয়েবল ডিক্লেয়ার করবি এবং তার নাম Johan দে। এবার username নামে আরেকটা ভেরিয়েবল ডিক্লেয়ার করবি এবং তার মান Jovan দে। দুইটা আউটপুট দেখ console.log() দিয়ে।

const userName = "Johan";
const username = "Jovan";
console.log(userName, username);

//4. আমার বাসার ঠিকানা নামে ইংরেজিতে একটা ভেরিয়েবল ডিক্লেয়ার করবি। camelCase ব্যবহার করে ভেরিয়েবল ডিক্লেয়ার করবি। তারপর এইটার স্ট্রিং একটা মান সেট করবি।

const myHomeAddress = "Khilgaon";

console.log(myHomeAddress);

//5. সুপার ওভারে কত রান হইছে, সেটার জন্য super নামে একটা ভেরিয়েবল ডিক্লেয়ার কর এবং মান সেট কর। করার পর যে আউটপুট দেখতে পাচ্ছস, সেটা কি ঠিক আছে নাকি কোনো সমস্যা আছে।

// const super = 21;

//console.log(super); //there is a problem because 'super' is a javaScript keyword.so, it does not work.

//6. তুই কোন ক্লাসে পড়স,সেটা লেখার জন্য class নামে একটা ভেরিয়েবল লিখ। তারপর আউটপুটে দেখ, কী দেখায়।

//const class = "ten";

//console.log(class); //there is a problem because 'class' is a javaScript keyword. so, it does not work.

//7. সেকেন্ড পজিশনে কে ব্যাট করবে, সেটার জন্য 2ndPosition নামে একটা ভেরিয়েবল লিখে সেখানে একজন ব্যাটসম্যানের নাম লিখে দে। দেখ আউটপুট দেখায় কি না। যদি সমস্যা করে, তাহলো কী করা লাগে, সেটা কমেন্ট করে ভেরিয়েবলের উপর লিখ।


//const 2ndPosition = "Kamal";

//console.log(2ndPosition);   //there is a problem because we can not use any number at the starting of any variable name. but we can use in word like "secondPosition" then it will work. or we use number in the middle or last position of any name.



// Parse-----NaN *********


// User website-এ সংখ্যা  ইনপুট দিলে সেটা সংখ্যা হিসেবে দেখায় না, স্ট্রিং ডাটা হয়ে যায়। তখন যোগ করতে সমস্যা হয়।

const fatherAge = '50';
const sonAge = '20';
const totalAge = fatherAge + sonAge;
console.log(totalAge); // there is a problem because output showed as a string data like 5020.

// এইটা ঠিক করার জন্য স্ট্রিং ডাটাকে সংখ্যায় রুপান্তর করতে হবে। তাই ভেরিয়েবলের মানের আগে parseInt()  লিখতে হবে এবং ভেরিয়েবলের মানটা () এর ভিতরে রাখতে হবে।

const sugar = parseInt('20');
console.log(sugar);

const fatherAgE = parseInt('55');
const sonAgE = parseInt('25');
const totalAgE = fatherAgE + sonAgE;
console.log(totalAgE);

//or

const brotherAgE = '22';
const brotherAgeNumber = parseInt(brotherAgE);
const sisterAgE = '19';
const sisterAgeNumber = parseInt(sisterAgE);
const toTalAgE = brotherAgeNumber + sisterAgeNumber;
console.log(toTalAgE);




// Practice:

// 1. ধর তুই একটা মজার অংক করছিস। তুই ‘20’ লিখে ফেললি, কিন্তু সেটা স্ট্রিং আকারে। স্ট্রিং থেকে আসল সংখ্যায় কনভার্ট করে তার সাথে 10 যোগ করতে পারবি?

const apple = '20'; //here value 20 is string not a number
const appleNumber = parseInt(apple); //here converted it to a number
const tomato = 10;
console.log(appleNumber + tomato); //so, addition is working here

//2. তোর কাছে একটা ভগ্নাংশ আকারে মান আছে, যেমন: ‘3.14159’। এই মানটা পূর্ণসংখ্যায় রুপান্তর করার জন্য একটা প্রোগ্রাম লিখ।

const komola = '3.14159';
const komolaIntegerNumber = parseInt('3.14159');
console.log(komolaIntegerNumber);

//3. তুই ‘premikBoy’ নামের একটা স্ট্রিংকে সংখ্যা বানানোর চেষ্টা কর। দেখ কি আউটপুট দেয়।

const yourName = 'premikBoy';
const yourNameToNumber = parseInt(yourName);
console.log(yourNameToNumber);

//4. তুই 3.456 আর 2.789 যোগ করলি। আউটপুটে তুই দশমিকের পর মাত্র 2 ঘর পর্যন্ত দেখতে চাস । কিভাবে দেখাবি? একটা প্রোগ্রাম লিখ।

const firstData = 3.456;
const lastData = 2.789;
const totalData = firstData + lastData;
const totalDataNumber = parseFloat(totalData.toFixed(2));
console.log(totalDataNumber);

//5. ধর, তুই ‘56.78’ আর ‘12.34’ স্ট্রিং আকারে পাইলি। এখন এই দুইটা যোগ করে কীভাবে আসল সংখ্যা বের করবি? সেটা বের করার একটা প্রোগ্রাম লিখ।

const priceOne = '56.78';
const priceOneToNo = parseInt('56.78');
const priceTwo = '12.34';
const priceTwoToNo = parseInt('12.34');
const totalPrice = priceOneToNo + priceTwoToNo;
console.log(totalPrice);

//6. ধর, তোর কাছে ‘10.5678’ আর ‘5.4321’ আছে। তুই আউটপুটে দশমিকের পর 1 ঘর পর্যন্ত দেখতে চাস। সেটা কীভাবে দেখাবি?

const alo = 10.5678;
const potol = 5.4321;
const totalBazar = alo + potol;
console.log(totalBazar.toFixed(1));

//7. এখন ‘42.45689754’-কে দশমিকের পর 3 ঘর পর্যন্ত রাউন্ড কর।

const maan = 42.45689754;
console.log(maan.toFixed(3));


