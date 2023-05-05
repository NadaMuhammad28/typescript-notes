"use strict";
//type Aliases
let a = 2;
// type literatork
let names;
names = "john";
let p1 = {
    name: "nada",
    age: 24,
    car: false,
};
//------------------------------------------------------------------------------//
//Functions
//optional params
const sum = (a, b, c) => {
    if (c)
        return a + b + c;
    return a + b;
};
const logMsg = (obj) => {
    console.log(obj);
};
logMsg(sum(2, 3));
const multiply = (a, b) => {
    return a * b;
};
logMsg(multiply(2, 3));
//default params
const add = (a = 10, b, c = 2) => {
    return a + b + c;
};
//that's how u skip an arg in ts
logMsg(add(undefined, 3, 6));
//rest operator must be the lat arg
const addAll = (a, ...arr) => {
    return arr.reduce((p, c) => {
        p += c;
        return p;
    }, a);
};
logMsg(addAll(2, 2, 3, 4, 5, 6));
//never type
// a type for a function that throws an err or has an infinite loop inside it
//infinite loop
const infinitee = () => {
    while (true) {
        console.log("r");
    }
};
//err
const errr = (a) => {
    throw new Error(a);
};
//use case
const isNum = (a) => {
    return !isNaN(a);
};
const divide = (a) => {
    if (typeof a === "string")
        return "eeee";
    if (isNum(a))
        return "nailed it";
    //nver type
    return errr("stupid bitch");
};
console.log(divide("3"));
const f = (a, c) => {
    if (c)
        return a + c;
    return a;
};
console.log(f(2, 4));
