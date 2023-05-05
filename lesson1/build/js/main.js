"use strict";
const a = "nada";
let b = "hello";
console.log(b);
//************************************************************************* */
//Arrays
let strArr = [{ id: 2, name: "nada" }]; // --> empty--> any
console.log(strArr);
let guitars = ["1", "2", "3", "4"];
let mixed = ["hello", 1, "ew", 2];
//what if i want to specify the length
// what if i want to specify that in a certain index there'e another type
//--> use tuple
//************************************************************************* */
//tuple
let tuple1 = [1, false, "g"];
//tuple1[0]="hii"  -->err
//tuple1[5]= 0 --> err
let arr = [2, true, "hello"];
arr = tuple1;
let t2 = [3, "ya rab"];
// console.log(arr);
//tuple1=arr -->err
//************************************************************************* */
//OBJECTS
let obj;
obj = [1, 2, 3, 4];
obj = function () { };
// console.log(typeof obj);
obj = {
    name: "nada",
    age: 24,
};
const eng = {
    // name --> err nort declared in type
    field: "sw",
    age: 24,
    // no err for gpa
    graduated: true,
};
const greet = (eng) => {
    console.log("Hi,", eng === null || eng === void 0 ? void 0 : eng.name, "!");
};
greet(eng);
const greetWithNarrowing = (eng) => {
    eng.name ? console.log("Hi,", eng.name, "!") : console.log("hi!");
};
eng.name = "nada";
greetWithNarrowing(eng);
//when to use interface/ type?
//************************************************************************* */
//Enums
var grade;
(function (grade) {
    grade["D"] = "e";
    grade["C"] = "b";
    grade["B"] = "p";
    grade["A"] = "o";
})(grade || (grade = {}));
console.log(typeof grade);
var grad2;
(function (grad2) {
    grad2[grad2["D"] = 0] = "D";
    grad2[grad2["C"] = 1] = "C";
    grad2[grad2["B"] = 2] = "B";
    grad2[grad2["A"] = 3] = "A";
})(grad2 || (grad2 = {}));
console.log(grad2);
