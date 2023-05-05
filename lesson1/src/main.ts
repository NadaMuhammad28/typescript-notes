const a: string = "nada";
let b: string | boolean = "hello";
console.log(b);

//************************************************************************* */
//Arrays
let strArr: [{ id: number; name: string }] = [{ id: 2, name: "nada" }]; // --> empty--> any
console.log(strArr);

let guitars: string[] = ["1", "2", "3", "4"];
let mixed: (string | number)[] = ["hello", 1, "ew", 2];

//what if i want to specify the length
// what if i want to specify that in a certain index there'e another type
//--> use tuple
//************************************************************************* */
//tuple

let tuple1: [number, boolean, string] = [1, false, "g"];
//tuple1[0]="hii"  -->err
//tuple1[5]= 0 --> err

let arr = [2, true, "hello"];

arr = tuple1;
let t2: [number, string] = [3, "ya rab"];
// console.log(arr);
//tuple1=arr -->err
//************************************************************************* */
//OBJECTS

let obj: object;

obj = [1, 2, 3, 4];
obj = function () {};
// console.log(typeof obj);

obj = {
  name: "nada",
  age: 24,
};

//all these are possible objects

//type, interface

type Engineer = {
  name?: string;
  field: string;
  age: number;
  gpa?: number;
  graduated: boolean;
};

const eng: Engineer = {
  // name --> err nort declared in type

  field: "sw",
  age: 24,
  // no err for gpa
  graduated: true,
};

const greet = (eng: Engineer) => {
  console.log("Hi,", eng?.name, "!");
};

greet(eng);

const greetWithNarrowing = (eng: Engineer) => {
  eng.name ? console.log("Hi,", eng.name, "!") : console.log("hi!");
};
eng.name = "nada";
greetWithNarrowing(eng);

interface Person {
  name: string;
  age: 24;
}
//when to use interface/ type?
//************************************************************************* */
//Enums
enum grade {
  D = "e",
  C = "b",
  B = "p",
  A = "o",
}
console.log(typeof grade);
enum grad2 {
  D,
  C,
  B,
  A,
}
console.log(grad2);
