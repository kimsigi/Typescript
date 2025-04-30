class User {
    constructor(private name: string, private age: number, protected test?: string) {}
  
    sayHello() {
      console.log(`Hi, I'm ${this.name}`);
      console.log(`testValue: ${this.test}`);
    }
}
  
const usr = new User('Jane', 27, '테테테테');
usr.sayHello();
  
function wrapValue<T>(val: T): { value: T } {
    return { value: val };
}
  
const wrappedString = wrapValue('hello');
const wrappedNumber = wrapValue(123);
  
console.log(wrappedString.value, wrappedNumber.value);
  