#!/usr/bin/env node

var fb = require("./fizzbuzz");

console.log(fb.count(1,100));

/* module.exports = {
    count: count
    fizzer: fizz
    buzzer: buzz
    fizzbuzzer: fizzbuzz

}
// could use for whole program
/*for (var i=1; i <= 100; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}
/*

// if()- conditional statement evaluates to true or false
// - a Finder (usr/local/bin)