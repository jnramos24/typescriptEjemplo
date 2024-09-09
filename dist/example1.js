"use strict";
/* Ejercicio 1: Inventario de Productos
Crea una clase Producto con las propiedades nombre, precio, y cantidad. Luego, crea un array de productos y usa map para calcular el precio total (precio * cantidad) de cada producto, devolviendo un nuevo array con los resultados. */
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    calculateTotal() {
        return this.price * this.quantity;
    }
}
const products = [
    new Product("Laptop", 500, 2),
    new Product("Mouse", 30, 10),
    new Product("Teclado", 50, 5)
];
const totals = products.filter(product => product.quantity > 5)
    .map(product => product.calculateTotal());
console.log(totals);
