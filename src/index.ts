console.log('Funciono')
//Esto es un comentario en TS
/**
 * Esto es un comentario
 * Multilínea
 */

 //Declaración de Variables:
 const nombre = "Natalia";
 console.log(`Hola ${nombre}`);
 
 // Para asignar el tipo de dato 
 const email : string = 'natioterom@gmail.com';
 const PI : number = 3.1416;
 /**
  *  typeScripe es de tipado fuerte, email no puede
  * cambiar de tipo
  **/
//Para cambiar el tipo pero no es RECOMENDABLE se puede utilizar any
const apellidos: any = "San Jose"
//Variables booleanas
const error: boolean = false;
console.log(`¿Hay error ?, ${error}`)
//Instansación múltiple de variables
let a: string ,b:boolean ,c:number; // instancia sin valor inicial
a = "Hola";
b = true;
c = 8.9;
// Tipos primitivos: number, string, booleano, void, null y undefined

//Tipos más complejos se manejan distinto a los primitivos
//Tipos Cadena de texto
let listaTareas: string [] =["Tarea 1", "Tarea 2"]

//Combinar tipos en listas
let valores: (string | number | boolean)[] = [false, "Hola", true, 56]

//Enumerados empiezan por 0 se le puede asignar numero o string enum palabra reservada
enum Estados {
    "Completado",
    "Incompleto",
    "Pendiente"
}

let estadoTarea: Estados = Estados.Completado
console.log(estadoTarea)

enum PuestoCarrera {
    "Primero" = 1,
    "Segundo",
    "Tercero"
}
let puestoMaraton : PuestoCarrera = PuestoCarrera.Segundo
console.log(puestoMaraton)
//Interfaces
 interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia:number
 }
 //Podemos crear variables que sigen la interface Tarea
 let tarea1: Tarea = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    urgencia:10
 }

 //Types de TypeScript palabra reservada type
 type Producto = {
    precio: number,
    nombre: string
 }
 let coche: Producto = {
    nombre: "Audi",
    precio: 4500000
 }
 console.log(`El modelo de auto ${coche.nombre}, tiene un costo de ${coche.precio}`)

 //Condicionales
 if(error){
 console.log('Hay un error')
 }else{
 console.log('No hay un error')
 }
 //Ternario
 error ? console.log('Hay un error T') : console.log('No hay un error T')
 //Switch
 switch (tarea1.estado){
    case Estados.Completado:
        console.log('Tarea completada');
        break;
    case Estados.Incompleto:
        console.log('Tarea Pendiente');
        break;
    default:
        break;
 }

 // try -catch
 try{

 }catch(error){

 }
 //Bucles
 let listaTareasNuevas: Tarea[]=[
    {
        nombre:"Tarea 1",
        estado: Estados.Completado,
        urgencia:2
    },
    {
        nombre:"Tarea 2",
        estado: Estados.Pendiente,
        urgencia:3
    },
    {
        nombre:"Tarea 1",
        estado: Estados.Incompleto,
        urgencia:2
    },
 ]
 listaTareasNuevas.forEach((tarea: Tarea, index: number)=>{
    console.log(`${index}-${tarea.nombre}`)
 })
