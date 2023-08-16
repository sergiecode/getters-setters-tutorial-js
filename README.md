![getters y setters en js](https://raw.githubusercontent.com/sergiecode/getters-setters-tutorial-js/master/get-set.jpg)

# Getters y Setters en JavaScript

Este repositorio contiene un ejemplo simple de cómo utilizar getters y setters en JavaScript para manejar propiedades privadas de una clase. En este caso, hemos creado la clase `Estudiante` que tiene propiedades privadas `_nombre` y `_edad`, junto con sus respectivos getters y setters.

## Ejemplo de Uso

```

// Crear una instancia de Estudiante
const estudiante = new Estudiante("Glottis", 14);

// Obtener valores utilizando los getters
console.log(estudiante.nombre); // Salida: "Glottis"
console.log(estudiante.edad);   // Salida: 14

// Modificar valores utilizando los setters
estudiante.nombre = "Mirtha";
estudiante.edad = 96;

// Obtener los nuevos valores utilizando los getters
console.log(estudiante.nombre); // Salida: "Mirtha"
console.log(estudiante.edad);   // Salida: 96

```

En este ejemplo, hemos definido una clase `Estudiante` con un constructor que toma el nombre y la edad como parámetros. Luego, hemos implementado getters y setters para las propiedades `_nombre` y `_edad`. Esto nos permite acceder y modificar estas propiedades de manera controlada, manteniendo la encapsulación y evitando el acceso directo a las propiedades privadas.
