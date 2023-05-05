"use strict";
let a = "hi";
//assign to a less specific type
let b = a;
//assign to a more  specific type
let c = a;
console.log(c);
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let res = addOrConcat(1, 2, "concat");
/*
Reminder: Because type assertions are removed at compile-time,
there is no runtime checking associated with a type assertion.
There won’t be an exception
or null generated if the type assertion is wrong.
*/
// let res2: string = addOrConcat(1, 2, "add") as string;
// console.log(typeof res2);  -->number
//------------------------------------------
//Conversion of type 'string' to type 'number' may be a mistake because
//neither type sufficiently overlaps with the other.
//If this was intentional,
//convert the expression to 'unknown' first. --> double assertion
// let x = 10 as string; --> err
let x = 10;
console.log(x);
console.log(typeof x);
//---------------------------------------------------------------------
