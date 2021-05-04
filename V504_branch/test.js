const speak = Symbol("speak");
class Person {
  constructor() {
    this[speak] = "speak";
  }
}
const p = new Person();
console.log(Object.keys(p));
// []
console.log(Object.getOwnPropertyNames(p));
// []