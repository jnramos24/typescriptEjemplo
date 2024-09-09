class Person {
    name: string;
    age: number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    sayHello(): void {
        console.log('Hola me llamo ' + person.name + ' y mi edad es: ' + person.age);
    }
}

const person = new Person("Juan",34);
person.sayHello();
