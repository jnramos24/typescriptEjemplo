"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log('Hola me llamo ' + person.name + ' y mi edad es: ' + person.age);
    }
}
const person = new Person("Juan", 34);
person.sayHello();
