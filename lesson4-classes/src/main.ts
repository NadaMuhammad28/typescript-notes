// class Person {
//   name!: string;
//   age?: number;
//   ag!: boolean;
//   readonly single?: boolean;
//   gap = 3;
//   constructor(ag: boolean);
//   constructor(name: string, age: number, single: boolean);
//   constructor(param1: string | boolean, param2?: number, param3?: boolean) {
//     if (
//       typeof param1 === "string" &&
//       typeof param2 === "number" &&
//       typeof param3 === "boolean"
//     ) {
//       this.name = param1;
//       this.age = param2;
//       this.single = param3;
//     } else if (typeof param1 === "boolean") {
//       this.ag = param1;
//     } else {
//       throw new Error("invalid");
//     }
//   }
// }

// class Student extends Person {
//   grad: boolean;
//   constructor(name: string, age: number, single: boolean, grad: boolean) {
//     super(name, age, single);
//     this.grad = grad;
//   }
// }

// const p = new Person("nada", 24, true);

// const p2 = new Person(true);
// // p.gap="p" -->err
// // p.single = false; -->err
// p.gap = 4;
// console.log(p);
// console.log(p2);
// p2.age;

// /////////////////////////

// const s = new Student("nada", 34, true, true);
// console.log(s);
/////////////////////////////////////////////////////////////////

//MEMBER VISIBILITy

class Dev {
  protected m = 2;
  constructor(public name: string, protected exp: number) {}

  //pub --> default
  public greet(): void {
    console.log("Hi", this.name);
  }

  protected level(): string {
    if (this.exp > 2) return "mid";
    return "fresh";
  }
  private secret(): string {
    return "i wanna cry";
  }
}

class A extends Dev {
  constructor() {
    super("brbr", 0);
  }

  m = 2;

  public logProteted(): void {
    console.log(this.level());
  }

  public logPrivate(): void {
    // console.log(this.secret());
  }
}
const d = new Dev("john", 2);
d.greet();

const a = new A();
a.greet();
a.logProteted();
a.m;
class Animal {
  public readonly name;
  protected sound;

  constructor(name: string, sound: string) {
    this.name = name;
    this.sound = sound;
  }
}
class Dog extends Animal {
  constructor(name: string, sound: string) {
    super(name, sound);
  }

  public printSound(): void {
    console.log("this animal makes", this.sound);
  }
}

const a1 = new Animal("dog", "woof");
const d1 = new Dog("w", "haw");

console.log(a1);
// a1.name = "ma2W";
console.log(a1);

d1.printSound();

/////////////////////////////////////////////////////////////////

//GETTERS, SETTERS

// class Person {
//   constructor(public name: string, private _age: number | string) {}
//   get age(): number {
//     return this._age as number;
//   }
//   set age(val: number | string) {
//     //u can do validation first
//     if (typeof val == "number" && val > 0) this._age = val;
//     return;
//   }
// }

// const p = new Person("nada", 24);
// console.log(p.age);
// p.age = 55;
// console.log(p.age);
