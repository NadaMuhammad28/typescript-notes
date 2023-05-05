//type Aliases

type StringOrNumber = string | number;

let a: StringOrNumber = 2;

type Guitarist = {
  name: string;
  guitare: StringOrNumber;
};

// type literatork

let names: "nada" | "john" | "dave";

names = "john";
// names="pp" -->err

type Age = number;
type Car = Age | boolean;
type Info = {
  age: Age;
  name: string;
  car: Car;
};

let p1: Info = {
  name: "nada",
  age: 24,
  car: false,
};
//------------------------------------------------------------------------------//

//Functions

//optional params

const sum = (a: number, b: number, c?: number): number => {
  if (c) return a + b + c;
  return a + b;
};

const logMsg = (obj: any): void => {
  console.log(obj);
};

logMsg(sum(2, 3));

type NumFunc = (a: number, b: number) => number;

const multiply: NumFunc = (a, b) => {
  return a * b;
};
logMsg(multiply(2, 3));

//default params
const add = (a = 10, b: number, c = 2): number => {
  return a + b + c;
};
//that's how u skip an arg in ts
logMsg(add(undefined, 3, 6));

//rest operator must be the lat arg

const addAll = (a: number, ...arr: number[]): number => {
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
const errr = (a: string) => {
  throw new Error(a);
};

//use case

const isNum = (a: any): boolean => {
  return !isNaN(a);
};

const divide = (a: number | string): string => {
  if (typeof a === "string") return "eeee";

  if (isNum(a)) return "nailed it";
  //nver type
  return errr("stupid bitch");
};

console.log(divide("3"));

type F = (a: number, c?: number) => number;

const f: F = (a, c) => {
  if (c) return a + c;
  return a;
};

console.log(f(2, 4));
