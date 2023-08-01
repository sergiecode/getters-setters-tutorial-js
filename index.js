class Estudiante {
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
     }
    
     get nombre() {
        return this._nombre;
 }
 
 get edad() {
        return this._edad;
 }
 
 set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
 }
 
 set edad(nuevaEdad) {
        this._edad= nuevaEdad;
 }
 
}
 
 const estudiante = new Estudiante("Glottis" , 14);
 console.log(estudiante.nombre); // Salida: "Glottis"
 console.log(estudiante.edad); // Salida: 14
 
 estudiante.nombre = "Mirtha"
 estudiante.edad = 96
 console.log(estudiante.nombre); // Salida: "Mirtha"
 console.log(estudiante.edad); // Salida: 96