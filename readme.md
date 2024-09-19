Para comenzar con TypeScript, aquí tienes una guía básica:

### 1. **Instalar TypeScript**
   - **Requisito previo:** Asegúrate de tener Node.js instalado en tu máquina.
   - Instala TypeScript globalmente utilizando npm (el gestor de paquetes de Node.js):
     ```bash
     npm install -g typescript
     ```

### 2. **Configuración Básica**
   - Crea un archivo TypeScript (`.ts`). Por ejemplo, `index.ts`.
   - Puedes compilar este archivo a JavaScript usando el siguiente comando:
     ```bash
     tsc index.ts
     ```
   - Esto generará un archivo `index.js` que puedes ejecutar con Node.js o incluir en un proyecto web.

### 3. **Iniciar un Proyecto con TypeScript**
   - Inicializa un nuevo proyecto de TypeScript dentro de un directorio raíz:
     ```bash
     tsc --init
     ```
   - Esto creará un archivo `tsconfig.json`, donde puedes configurar opciones como el directorio de salida, soporte para ES6+, etc.
   - Una configuración básica del `tsconfig.json` para el uso de typescript en este curso que podrías utilizar es el siguiente:
   ```json
  {
  "compilerOptions": {
    "outDir": "./dist",   // Carpeta donde se colocarán los archivos compilados
    "rootDir": "./src",   // Carpeta donde están tus archivos TypeScript 
    "strict": true,       // Activar todas las comprobaciones estrictas
    "esModuleInterop": true,  // Importaciones más fáciles con módulos ES
    "target": "ES6"       // Definir el estándar de JavaScript de salida
    }
  }
  ```
  Después de configurar el tsconfig.json, cuando ejecutes el comando tsc en la raíz del proyecto, los archivos JavaScript compilados se generarán en la carpeta dist y no estarán mezclados con los archivos TypeScript.
  ```typescript   
  tsc
  ```

### 4. **Escribir Código TypeScript**
   - Empieza a escribir código en tu archivo `.ts`. Por ejemplo, el siguiente código define una función que suma dos números:
     ```typescript
     function add(a: number, b: number): number {
       return a + b;
     }

     const sum = add(5, 10);
     console.log(sum);
     ```
   - Aquí, se especifican los tipos de las variables (`number`), que es una de las características clave de TypeScript.

### 5. **Compilar y Ejecutar**
   - Después de escribir el código, compílalo:
     ```bash
     tsc index.ts
     ```
   - Luego, puedes ejecutar el archivo JavaScript generado:
     ```bash
     node index.js
     ```

### 6. **Integración con Editores de Código**
   - **Visual Studio Code**: Es el editor más popular para trabajar con TypeScript. Ofrece soporte nativo para TypeScript con características como autocompletado, depuración, y más.
   - Instala extensiones útiles como `ESLint` para mantener la calidad del código.

### 7. **Buenas Prácticas**
   - Usa `interfaces` y `types` para definir tipos complejos.
   - Aprovecha los `Generics` para crear funciones y clases reutilizables.
   - Siempre compila tu código con `tsc` para asegurarte de que no haya errores antes de ejecutar el archivo JavaScript resultante.

### 8. **Recursos para Aprender Más**
   - **Documentación Oficial**: [TypeScript](https://www.typescriptlang.org/docs/)
   - **Tutoriales en línea**: Busca en plataformas como [w3schools](https://www.w3schools.com/typescript/index.php/)

### Introducción Teórica: Diferencias entre JavaScript (JS) y TypeScript (TS)

TypeScript es un **superset de JavaScript** que añade **tipado estático** y otras características que mejoran la robustez y mantenimiento del código. Como cualquier código JavaScript válido es también código TypeScript, aprender TypeScript es simplemente un paso más allá de JavaScript.

A continuación, exploramos las diferencias clave entre ambos lenguajes a través de conceptos fundamentales como la **transpilación**, **compilación**, **tipado**, y **sintaxis**.

---

### 1. **Transpilación y Compilación**

#### JavaScript
- JavaScript es un **lenguaje interpretado**. Los navegadores ejecutan el código directamente sin necesidad de un proceso de compilación previo.
  
#### TypeScript
- TypeScript es un **lenguaje compilado** o, más precisamente, **transpilado**. Esto significa que el código TypeScript debe ser convertido (transpilado) a JavaScript para que pueda ser ejecutado por un navegador o entorno de Node.js.
- El compilador TypeScript (`tsc`) convierte los archivos `.ts` en archivos `.js`.

**Ejemplo de Transpilación:**

Archivo TypeScript (`saludo.ts`):
```typescript
const saludo: string = "Hola, TypeScript";
console.log(saludo);
```

Archivo JavaScript transpilado (`saludo.js`):
```javascript
var saludo = "Hola, TypeScript";
console.log(saludo);
```

Aquí, TypeScript añade el tipo de variable (`string`), pero en el archivo JavaScript resultante este tipo desaparece, ya que JavaScript no tiene tipado estático.

---

### 2. **Tipado Estático vs. Dinámico**

#### JavaScript
- JavaScript es **dinámicamente tipado**, lo que significa que las variables no están restringidas a un tipo de dato en particular, y pueden cambiar de tipo en tiempo de ejecución.
  
```javascript
let mensaje = "Hola";  // mensaje es un string
mensaje = 42;          // Ahora mensaje es un número
```

#### TypeScript
- TypeScript es **estáticamente tipado**, lo que significa que puedes (y deberías) definir el tipo de dato de cada variable en el momento de la declaración. Esto permite al compilador detectar errores antes de ejecutar el código.

```typescript
let mensaje: string = "Hola";
// mensaje = 42;  // Error: Type 'number' is not assignable to type 'string'
```

- **Inferencia de tipos**: TypeScript también puede inferir tipos automáticamente si no los defines explícitamente.
  
```typescript
let mensaje = "Hola";  // TypeScript infiere que 'mensaje' es un string
```

**Ventajas del Tipado Estático en TS**:
- **Prevención de errores**: TypeScript detecta errores de tipo en tiempo de compilación, lo que ayuda a evitar problemas en tiempo de ejecución.
- **Mejor autocompletado**: Los editores de código pueden ofrecer sugerencias más precisas.

---

### 3. **Sintaxis**

#### JavaScript
- La sintaxis de JavaScript es flexible, pero carece de algunas características avanzadas que facilitan la organización y seguridad del código, como las interfaces, modificadores de acceso, y clases abstractas.

```javascript
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}
```

#### TypeScript
- TypeScript extiende la sintaxis de JavaScript con **modificadores de acceso**, **tipos**, y **interfaces** que hacen el código más seguro y estructurado.

```typescript
class Persona {
  private nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  public saludar(): void {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

const persona = new Persona("Juan");
// persona.nombre = "Pedro";  // Error: 'nombre' es privado
```

- **Modificadores de acceso** (`private`, `public`, `protected`): Permiten controlar la visibilidad de propiedades y métodos, algo que no está presente en JavaScript puro.
- **Tipado explícito**: Como ya vimos, podemos definir los tipos de datos para las propiedades y los parámetros de los métodos.

---

### 4. **Interfaces y Tipos**

#### JavaScript
- JavaScript no tiene una forma nativa de definir **interfaces** o contratos de cómo deben lucir los objetos.

```javascript
const coche = { marca: "Toyota", modelo: 2021 };
```

#### TypeScript
- TypeScript permite crear **interfaces** que definen la forma de los objetos. Esto asegura que el objeto tenga una estructura consistente.

```typescript
interface Coche {
  marca: string;
  modelo: number;
}

const coche: Coche = { marca: "Toyota", modelo: 2021 };
// const cocheErroneo: Coche = { marca: "Toyota" };  // Error: falta la propiedad 'modelo'
```

---

### 5. **Características adicionales de TypeScript**

- **Generics**: TypeScript permite trabajar con tipos genéricos que pueden adaptarse a múltiples tipos de datos.
  
  ```typescript
  function identidad<T>(valor: T): T {
    return valor;
  }

  console.log(identidad<string>("Hola"));  // Output: "Hola"
  console.log(identidad<number>(42));      // Output: 42
  ```

- **Enums**: TypeScript introduce los enumerados (enums) que no existen en JavaScript.

  ```typescript
  enum Color {
    Rojo,
    Verde,
    Azul
  }

  let miColor: Color = Color.Verde;
  ```

---

### 6. **Errores y depuración en tiempo de compilación**

#### JavaScript
- En JavaScript, los errores de tipo u otros problemas generalmente se descubren en tiempo de ejecución, lo que puede hacer que el proceso de depuración sea más complicado.

#### TypeScript
- TypeScript detecta muchos errores en tiempo de compilación, evitando así problemas antes de ejecutar el código.

```typescript
let edad: number = "treinta";  // Error: 'string' no es asignable a 'number'
```

Esto te ahorra tiempo y posibles errores difíciles de rastrear en grandes proyectos.

---

### Resumen de las diferencias clave:

| Concepto       | JavaScript                           | TypeScript                          |
|----------------|--------------------------------------|-------------------------------------|
| **Tipado**     | Dinámico                             | Estático                            |
| **Compilación**| No requiere compilación              | Requiere transpilación a JS         |
| **Modificadores de acceso**| No soporta                   | `public`, `private`, `protected`    |
| **Interfaces** | No soporta                           | Soporta                             |
| **Tipos genéricos** | No soporta                           | Soporta                             |
| **Errores**    | Detectados en tiempo de ejecución     | Detectados en tiempo de compilación |


### Conceptos Básicos en Programación Orientada a Objetos (POO) con TypeScript

#### 1. **Clase**
   - Una **clase** es una plantilla o molde a partir de la cual se pueden crear objetos. Las clases definen las **propiedades** (datos) y los **métodos** (funcionalidades) que los objetos creados a partir de esa clase tendrán.
   - En TypeScript, las clases se declaran usando la palabra clave `class`.

   **Ejemplo:**
   ```typescript
   class Persona {
     nombre: string;
     edad: number;
   }
   ```

   Aquí hemos definido una clase `Persona` con dos propiedades: `nombre` y `edad`.

#### 2. **Constructor**
   - El **constructor** es un método especial dentro de una clase que se ejecuta automáticamente cuando se crea una nueva instancia (objeto) de esa clase. Se utiliza para inicializar las propiedades del objeto.
   - En TypeScript, el constructor se define usando la palabra clave `constructor`.

   **Ejemplo:**
   ```typescript
   class Persona {
     nombre: string;
     edad: number;

     constructor(nombre: string, edad: number) {
       this.nombre = nombre;
       this.edad = edad;
     }
   }

   const persona1 = new Persona("Juan", 30);
   console.log(persona1.nombre);  // Output: Juan
   console.log(persona1.edad);    // Output: 30
   ```

   En este ejemplo, el constructor recibe dos parámetros (`nombre` y `edad`) y los asigna a las propiedades de la clase.

#### 3. **Métodos de una clase**
   - Un **método** es una función que pertenece a una clase y define el comportamiento o acciones que un objeto de esa clase puede realizar. Los métodos se declaran dentro de la clase como funciones normales.
   
   **Ejemplo:**
   ```typescript
   class Persona {
     nombre: string;
     edad: number;

     constructor(nombre: string, edad: number) {
       this.nombre = nombre;
       this.edad = edad;
     }

     saludar(): void {
       console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
     }
   }

   const persona2 = new Persona("Ana", 25);
   persona2.saludar();  // Output: Hola, me llamo Ana y tengo 25 años.
   ```

   Aquí, hemos añadido un método llamado `saludar()` que muestra un mensaje utilizando las propiedades de la clase.

---

### Resumen:
- **Clase**: Es una plantilla para crear objetos que define sus propiedades y métodos.
- **Constructor**: Método especial que se ejecuta al crear una nueva instancia de la clase para inicializar las propiedades.
- **Métodos**: Son las funciones de una clase que definen el comportamiento de los objetos.

   ### Introducción teórica a la Programación Orientada a Objetos (POO) en TypeScript

La **Programación Orientada a Objetos (POO)** es un paradigma de programación que organiza el código en torno a **objetos** que representan entidades del mundo real. Estos objetos contienen **propiedades** (datos) y **métodos** (funcionalidades), lo que permite una estructura modular, reutilizable y fácilmente mantenible.

#### Principios Fundamentales de la POO

1. **Encapsulamiento**:
   - Es el principio de ocultar los detalles internos de un objeto y exponer solo lo necesario. Los datos y métodos se agrupan dentro de los objetos, lo que protege la información interna de modificaciones no controladas.
   - **Ejemplo en TypeScript**:
     ```typescript
     class Persona {
       private nombre: string;

       constructor(nombre: string) {
         this.nombre = nombre;
       }

       public saludar(): string {
         return `Hola, mi nombre es ${this.nombre}`;
       }
     }

     const persona = new Persona("Juan");
     console.log(persona.saludar());  // "Hola, mi nombre es Juan"
     // persona.nombre no es accesible directamente por ser private
     ```

2. **Herencia**:
   - La herencia permite crear nuevas clases que reutilizan y extienden el comportamiento de una clase existente. La clase "hija" hereda las propiedades y métodos de la clase "padre", lo que fomenta la reutilización del código.
   - **Ejemplo en TypeScript**:
     ```typescript
     class Animal {
       protected nombre: string;

       constructor(nombre: string) {
         this.nombre = nombre;
       }

       hacerSonido(): void {
         console.log("Sonido genérico");
       }
     }

     class Perro extends Animal {
       hacerSonido(): void {
         console.log("Guau, guau");
       }
     }

     const perro = new Perro("Fido");
     perro.hacerSonido();  // "Guau, guau"
     ```

3. **Polimorfismo**:
   - Es la capacidad de que diferentes clases respondan al mismo método de diferentes maneras. Esto permite usar una interfaz común para objetos de distintas clases.
   - **Ejemplo en TypeScript**:
     ```typescript
     class Vehiculo {
       mover(): void {
         console.log("El vehículo se mueve");
       }
     }

     class Coche extends Vehiculo {
       mover(): void {
         console.log("El coche se mueve sobre ruedas");
       }
     }

     class Avion extends Vehiculo {
       mover(): void {
         console.log("El avión vuela");
       }
     }

     const vehiculos: Vehiculo[] = [new Coche(), new Avion()];
     vehiculos.forEach((vehiculo) => vehiculo.mover());
     // Output:
     // "El coche se mueve sobre ruedas"
     // "El avión vuela"
     ```

4. **Abstracción**:
   - La abstracción se refiere a la capacidad de definir una estructura común para clases sin especificar los detalles de implementación. Esto se logra usando **clases abstractas** o **interfaces**.
   - **Ejemplo en TypeScript con clases abstractas**:
     ```typescript
     abstract class Figura {
       abstract calcularArea(): number;
     }

     class Circulo extends Figura {
       constructor(private radio: number) {
         super();
       }

       calcularArea(): number {
         return Math.PI * Math.pow(this.radio, 2);
       }
     }

     const circulo = new Circulo(5);
     console.log(circulo.calcularArea());  // Output: 78.53981633974483
     ```

### POO en TypeScript
TypeScript es un lenguaje ideal para la POO porque, además de las características propias de JavaScript, añade tipado estático, acceso a modificadores (`public`, `private`, `protected`), interfaces y abstracción. Esto hace que la escritura de código orientado a objetos sea más robusta y segura, ayudando a detectar errores en tiempo de compilación.

### Beneficios de POO en TypeScript:
- **Modularidad**: Las clases permiten organizar el código en componentes reutilizables.
- **Reutilización de código**: A través de la herencia y la composición, puedes reutilizar código sin duplicarlo.
- **Mantenimiento y escalabilidad**: Los sistemas grandes son más fáciles de gestionar cuando están bien encapsulados.
- **Seguridad de tipos**: El tipado estático de TypeScript ayuda a evitar errores comunes al programar.

### Arrays en TypeScript

Los **arrays** en TypeScript son listas de elementos que tienen el mismo tipo. Los arrays permiten almacenar múltiples valores en una sola variable, y en TypeScript, es posible tipar los arrays para asegurarse de que solo contengan valores de un tipo específico.

#### Sintaxis de Arrays en TypeScript

Puedes declarar un array de dos formas principales:
1. Usando el tipo seguido de `[]` (por ejemplo, `number[]` para un array de números).
2. Usando la sintaxis genérica `Array<tipo>` (por ejemplo, `Array<number>`).

#### Ejemplo de Arrays:

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: Array<string> = ['apple', 'banana', 'orange'];

// Acceder a elementos
console.log(numbers[0]); // 1
console.log(fruits[1]);  // banana

// Añadir elementos
numbers.push(6);
fruits.push('grape');

// Recorrer el array
for (let fruit of fruits) {
    console.log(fruit);
}

// Modificar un valor
numbers[2] = 10;
console.log(numbers); // [1, 2, 10, 4, 5, 6]
```

#### Métodos comunes para trabajar con Arrays:

- **`push`**: Añade un elemento al final del array.
- **`pop`**: Elimina el último elemento del array.
- **`map`**: Aplica una función a cada elemento del array y retorna un nuevo array con los resultados.
- **`filter`**: Filtra los elementos del array según una condición.
- **`forEach`**: Ejecuta una función para cada elemento del array.
  
### Tuplas en TypeScript

Las **tuplas** en TypeScript son similares a los arrays, pero se utilizan para definir un conjunto de elementos con un número fijo y tipos específicos en cada posición. A diferencia de los arrays, que contienen elementos de un solo tipo, una tupla puede contener múltiples tipos.

#### Ejemplo de una Tupla:

```typescript
let person: [string, number];
person = ['Alice', 30]; // Correcto
// person = [30, 'Alice']; // Error, el orden debe coincidir con el tipo

console.log(person[0]); // 'Alice'
console.log(person[1]); // 30

// Modificar la tupla
person[1] = 31;
console.log(person); // ['Alice', 31]
```

En este ejemplo, la tupla `person` debe contener un `string` en la primera posición y un `number` en la segunda. Si intentas cambiar el orden o los tipos de los elementos, TypeScript mostrará un error.

#### Acceder a elementos y métodos con tuplas

Aunque puedes acceder a los elementos de una tupla de la misma manera que lo haces con un array, ten en cuenta que las tuplas están tipadas en términos de posición, lo que significa que TypeScript sabe qué tipo debe haber en cada posición.

### Tuplas con más de dos elementos

Las tuplas no están limitadas a dos elementos. Puedes definir tuplas más complejas que incluyan diferentes tipos en distintas posiciones:

```typescript
let car: [string, number, boolean];
car = ['Toyota', 2020, true];

console.log(car[0]); // 'Toyota'
console.log(car[1]); // 2020
console.log(car[2]); // true
```

En este caso, `car` es una tupla que contiene:
- Un `string` para el nombre del automóvil.
- Un `number` para el año.
- Un `boolean` para indicar si es nuevo o no.

### Diferencias clave entre Arrays y Tuplas

1. **Tipo de datos**:
   - Un **array** normalmente contiene elementos del mismo tipo (aunque puede contener diferentes tipos usando `any[]`).
   - Una **tupla** puede contener elementos de distintos tipos y tiene un número fijo de elementos.

2. **Longitud**:
   - Los **arrays** pueden crecer dinámicamente.
   - Las **tuplas** tienen una longitud fija definida al momento de su declaración.

3. **Orden**:
   - En los **arrays**, el tipo de dato es uniforme y no depende de la posición.
   - En las **tuplas**, el tipo de cada elemento depende de su posición en la tupla.

### Ejemplo combinando Arrays y Tuplas:

Puedes tener un array de tuplas, donde cada tupla representa una estructura más compleja:

```typescript
let students: [string, number][];
students = [['Alice', 30], ['Bob', 25], ['Charlie', 28]];

for (let student of students) {
    console.log(`Nombre: ${student[0]}, Edad: ${student[1]}`);
}
```

Este array contiene múltiples tuplas, donde cada tupla tiene un `string` (nombre del estudiante) y un `number` (edad del estudiante).

### Resumen:
- **Arrays**: Listas de elementos del mismo tipo que pueden crecer dinámicamente.
- **Tuplas**: Estructuras de datos que contienen un número fijo de elementos con tipos específicos para cada posición.

