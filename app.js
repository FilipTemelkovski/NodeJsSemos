// var time = 0;

// var timer = setInterval(function(){
//     time +=2;
//     console.log(time + ' seconds have passed');
//     if (time > 5){
//         clearInterval(timer);
//     }
// }, 2000);


// console.log(__dirname);
// console.log(__filename);


//normal function statement 
// function sayHi() {
//     console.log('hi');
// };

// sayHi();

// //function expression
// var sayBye = function(){
//     console.log('bye');
// };

// sayBye();

// function callFunction(fun){
//     fun();
// };

// callFunction(sayBye);


// var counter = require('./stuff');


// console.log(counter(['shaun', 'crystal', 'ryu']));

var stuff = require('./stuff');

console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi, 5));



