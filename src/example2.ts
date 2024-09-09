/* Ejercicio 1: Gestión de Estudiantes
Crea una clase Estudiante que tenga las propiedades nombre y calificacion. Luego, crea un array de objetos Estudiante y usa el método filter para obtener a los estudiantes que tienen una calificación mayor o igual a 7. */

class Student {
    name: string;
    grade: number;

    constructor(name: string, grade: number){
        this.name = name;
        this.grade = grade;
    }
}

const students: Student[] = [
    new Student("Juan", 8),
    new Student("Pedro", 6),
    new Student("Laura", 9),
]

const passedStudents = students.filter(student => student.grade >= 7);

console.log(passedStudents);