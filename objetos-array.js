
//Fundamentos y destructuración
const fruta = {
    nombre: "Manzana",
    color: "Rojo",
    tipo: "Fruta",
    detalles: {
      vitaminas: ["Vitamina C", "Vitamina A"],
      origen: "Árbol frutal",
      sabor: "Dulce"
    },
    precio: 1.5,
    estaDisponible: true,
    obtenerInfo() {
      return `Una ${this.nombre} de color ${this.color} y sabor ${this.detalles.sabor}.`;
    }
  };
  
  console.log(fruta.obtenerInfo());
  console.log("Vitaminas:", fruta.detalles.vitaminas);
  console.log("Precio:", fruta.precio);
  console.log("¿Está disponible?", fruta.estaDisponible);

//DESESTRUCTURACION
const persona = {
  nombre: "Ana",
  apellido: "García",
  edad: 30,
  direccion: {
    ciudad: "Madrid",
    codigoPostal: "28001"
  }
};

// Desestructuración de un objeto
const { nombre, apellido, edad, direccion: { ciudad, codigoPostal } } = persona;

console.log(nombre); 
console.log(apellido); 
console.log(edad); 
console.log(ciudad); 
console.log(codigoPostal); 


//Rest vs Spread

//rest operator

const [auto,moto,...rest] = ['Chevrolet','Susuki','Ford','Nissan']
console.log(auto)
console.log(moto)
console.log(rest)

//Spread Operator

const carnes = ["Carne roja","pollo","pescado"]
const vegeteles = ["Zanahoria","Col","Brocoli","Calabaza"]

const comidas = [...carnes,...vegeteles]
console.log(comidas)

// Congelar Objetos
// Uso de freeze
const perfilUsuario = {
    nombre: "María",
    apellido: "Gómez",
    edad: 28,
    detalles: {
        ciudad: "Guayaquil",
        telefono: "3025698",
        direccion: "Avenida Principal 123"
    }
};

Object.freeze(perfilUsuario);
console.log('Uso del freeze: ' + Object.isFrozen(perfilUsuario));
perfilUsuario.foto = "t.ly/AbCd";
console.log(perfilUsuario);
console.log("\n")

// Uso de seal
const empleado = {
    nombre: "Ana",
    apellido: "González",
    cargo: "Desarrollador de Software",
    departamento: "Tecnología",
    detalles: {
        salario: 60000,
        fechaContratacion: "01/02/2022",
        ubicacion: "Ciudad de México"
    }
};

Object.seal(empleado);
console.log('Uso del seal: '+ Object.isSealed(empleado));
empleado.detalles.salario = 65000;
console.log(empleado)
console.log("\n")

// Copiar dos objetos
console.log("Copiar Elementos")
const informacionPersonal = {
    nombre: "David",
    apellido: "Simba",
    edad: 28
};

const informacionSocial = {
    direccion: {
        ciudad: "Quito",
        telefono: "38401928",
        calle: "Avenida Maldonado"
    },
    amigos: ['Erick', 'Gylmar', 'Ismael'],
    activo: true,
};

const informacionCompleta = { ...informacionPersonal, ...informacionSocial };

console.log(informacionCompleta);

//nombres abreviados de propiedades
let nombre = "Eli"
let edad = 29
let estatura = 1.68
let email = "elinavarroh@gmail.com"

const persona_1 = {
    nombre,
    edad,
    estatura,
    email
}

console.log(persona_1)

//array fundamentos
let celulares = ["Samsung", "iPhone", "Huawei", "Xiaomi"]
let notas = [15.6,14,12,18,11]
let persona1 = ["Eli", 29, 1.68, "elinavarroh@gmail.com"]

console.log(celulares)
console.log("Cantidad de notas:", notas.length)
console.log(persona1[0])

// Ejemplo de el uso de métodos en arreglos, en este caso para gestionar una lista de tareas
// Lista inicial de tareas
let tareas = ["Hacer la compra", "Estudiar para el examen", "Hacer ejercicio"];
// Agregar una nueva tarea al final del arreglo
tareas.push("Limpiar la casa");
// Agregar una nueva tarea al principio del arreglo
tareas.unshift("Preparar el desayuno");
// Eliminar la última tarea del arreglo
let tareaEliminada = tareas.pop();
// Eliminar la primera tarea del arreglo
let primeraTarea = tareas.shift();
// Encontrar una tarea específica en el arreglo
let tareaEspecifica = tareas.find(tarea => tarea === "Estudiar para el examen");
// Encontrar el índice de una tarea específica en el arreglo
let indiceTarea = tareas.findIndex(tarea => tarea === "Ir al gym");
// Filtrar tareas que contienen la palabra "Hacer"
let tareasConHacer = tareas.filter(tarea => tarea.includes("Hacer"));
// Concatenar dos arreglos de tareas
let nuevasTareas = ["Ir al banco", "Revisar el correo"];let todasLasTareas = tareas.concat(nuevasTareas);
// Verificar si una tarea específica está incluida en el arreglo
let tareaIncluida = tareas.includes("Hacer compras");
// Verificar si al menos una tarea cumple cierta condición
let algunaTareaCompleja = tareas.some(tarea => tarea.length > 20);
// Invertir el orden de las tareas en el arreglo
tareas.reverse();
// Verificar si todas las tareas cumplen cierta condición
let todasLasTareasLargas = tareas.every(tarea => tarea.length > 5);
// Ordenar las tareas alfabéticamente
tareas.sort();
// Reducir el arreglo a una única cadena de texto
let tareasComoTexto = tareas.reduce((acumulador, tarea) => acumulador + ", " + tarea);
// Imprimir los resultados
console.log("Tareas después de push y unshift:", tareas);
console.log("Tarea eliminada con pop:", tareaEliminada);
console.log("Primera tarea eliminada con shift:", primeraTarea);
console.log("Tarea específica encontrada:", tareaEspecifica);
console.log("Índice de tarea específica:", indiceTarea);
console.log("Tareas que contienen 'Hacer':", tareasConHacer);
console.log("Todas las tareas:", todasLasTareas);
console.log("¿'Hacer la compra' incluida?:", tareaIncluida);
console.log("¿Alguna tarea compleja?:", algunaTareaCompleja);
console.log("Tareas invertidas:", tareas);
console.log("¿Todas las tareas son largas?:", todasLasTareasLargas);
console.log("Tareas ordenadas alfabéticamente:", tareas);
console.log("Tareas como texto:", tareasComoTexto);

//Ejemplo uso del this
// Definir un objeto Persona
let Persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
    console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años.");
    }
    };
    
    // Llamar al método saludar
    Persona.saludar();

//FOR.. IN 
var persona = { nombre: "FERNANDO", edad: 23, ciudad: "CUENCA" };

for (const atributo in persona) {
  if (persona.hasOwnProperty(atributo)) {
    console.log(`persona.${atributo} = ${persona[atributo]}`);
  }
}


//FOR ...OF
const estudiantes = [
   
    { nombre: "Ana", edad: 22 },
    { nombre: "Juan", edad: 25 },
    { nombre: "Elena", edad: 20 }
  ];
  
  for (const estudiante of estudiantes) {
    console.log(`Estudiante ${estudiante.nombre} tiene ${estudiante.edad} años.`);
  }

//Métodos:

'use strict';
 const general= ["Carrera: Sistemas","Nombre: Cristian","Apellido: Paredes" ,{ciudad:"Quito"}] 
const datos = ["17278956273","Ecuatoriano"] 
const titulo ="DATOS PERSONALES" 

//push() Agrega al final del arreglo 
general.push(datos) 

//unshif() Agregar al inicio del arreglo 
general.unshift(titulo) ;
console.log(general);


//pop() – Remueve un elemento del final del arreglo.

let Deportes = ["Futboll", "Voley", "Basquet", "Tenis"];

console.log("Array inicial:", Deportes);

const Eliminar = Deportes.pop();

console.log("Deporte eliminado:", Eliminar);
console.log("Array después de pop():", Deportes);


//shift()-  Remueve un elemento del principio del arreglo.

const Eliminar2 = Deportes.shift();
console.log("Deporte eliminado Inicio:", Eliminar2);
console.log("Array Final ",Deportes)

//slice() – Crea una copia sombra del arreglo.

let colores = ["rojo", "verde", "azul", "amarillo", "morado", "naranja"];
let coloresSeleccionados = colores.slice(1, 5);

console.log("Array inicial:", colores);
console.log("Colores seleccionados:", coloresSeleccionados);

//Array.isArray() – Determina si el valor es un arreglo.

let Array1 = ["cris", 2, 3, 4, 5];//si cambia por () este no seria un array

if (Array.isArray(Array1)) {
  console.log("La variable es un array.");
} else {
  console.log("La variable no es un array.");
}

//length – Determina el tamaño del arreglo.
let frutas = ["manzana", "banana", "uva", "pera","sandia","naranja"];

console.log("Array inicial:", frutas);
console.log("Longitud del array:", frutas.length);

//Destructuración
const Raza_perro = ["Doberman","chihuaha","Pitbull","Coquer","Dogo argentino"]
const[grande,pequeño,mediano,orejon,fuerte] = Raza_perro
console.log(grande)
console.log(pequeño)
console.log(mediano)
console.log(orejon)
console.log(fuerte)


