// Funciones

import { Nivel, iTarea } from './Interface/iTarea'
import { Programar } from './Programar'
/**
 * Función que muestra un saludo por consola.
 */
function saludar() {
    let nombre = "nati"
    console.log(`Hola ${nombre}`)
}
saludar()

/**
 * Funcion que muestra saludo por consola
 * @param nombre Nombre de la persona a saludar
 */
function saludo(nombre:string){
    console.log(`Buenos días ${nombre}`)
}
saludo('Seba')

/**
 * Funcion para saludar (el nombre sale con "?", eso quiere decir que es opcional)
 * @param nombre Nombre de la persona a saludar, por defecto
 */
function despedirPersona(nombre:string = 'Pepe'){
 console.log(`Adios ${nombre}!!`)
}
despedirPersona()

function apellido(apellido?:string) {
    apellido ? console.log(`Adios ${apellido}!!`) : console.log(`Adios!!`)
}
apellido()
apellido('Otero')

/**
 * Varios parametro con uno opcional
 */
function variosParametros(nombre:string, edad:number, apellido?:string) {
    apellido ? console.log(` ${nombre} ${apellido} tiene ${edad} años!!`) : console.log(` ${apellido}tiene ${edad} años!!`)
}
variosParametros('Natalia',33,'Otero')
variosParametros('Natalia',33)

//Varios tipos (el error no se lanzará por que esta asigndo como string o num)
function variosTipos(a:string | number){
    if(typeof(a)=== 'string'){
        console.log(`${a} es un string`)
    }else if(typeof(a)=== 'number'){
        console.log(`${a} es un número`)
    }else{
        throw Error(`${a}, no es ni un string ni un número`)
    }
}
variosTipos('Hello')
variosTipos(5)

//Retornos
function retornos(nombre:string, apellido:string){
    return `Hola ${nombre} ${apellido}, como estas?`
}
console.log(retornos('Sebastian', 'Cisternas'))

//Multiples parametros
function ejemploMultiParam(...nombres:string[]):void{
    nombres.forEach((name) =>{
        console.log(name)
    })

}
ejemploMultiParam('Nati','Seba','Facu','Bruno','Moka','Manchas')

type Empleado = {
nombre:string
apellido:string
edad:number
}
let empleadoMartin:Empleado = {
    nombre:'Martin',
    apellido:'Huito',
    edad:52
}
const mostrarEmpleado = (empleado:Empleado) => ` ${empleado.nombre} ${empleado.apellido} tiene ${empleado.edad} años!!`
console.log(mostrarEmpleado(empleadoMartin))

const datosEmpleado = (empleado:Empleado):string => {
if(empleado.edad < 70 ){
    return `${empleado.nombre} ${empleado.apellido} esta en edad de trabajar `
}else {
 return `${empleado.nombre} ${empleado.apellido} no esta en edad de trabajar `
} 
}
console.log(datosEmpleado(empleadoMartin))

const cobrarSalario = () => {
    console.log('Cobrar nómina de empleado')
}
const obtenerSalario = (empleado:Empleado, cobrar: ()=> void) =>{
    if(empleado.edad < 70 ){
        return 
    }else {
     cobrar()//callback a ejecutar
    } 
}

console.log(obtenerSalario(empleadoMartin, ()=>'Cobrar Martin'))

//Async Functions
async function ejemploAsync():Promise<string>{
 await  console.log('Tarea a completar antes de ejecutar la secuencia')
 return 'Completado'
}
ejemploAsync()

//Funciones generadoras (generar como iterador)
function* ejemploGeneretor() {
    //yield emite un nuevo valor
    let index = 0
    while(index < 5){
        yield index ++
    }    
}
// Guardamos la funcion generadora en una variable
let generadora = ejemploGeneretor()
//Acceder a los valores emitidos
console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)

//Worker
function* watcher(valor:number){
    //llama al worker
    yield valor; // emitimos el valor inicial
    yield* worker(valor)//llamamos a las emisiones del worker
    yield valor + 10;// emitimos valor final + 10
}
function* worker(valor:number) {
    yield valor + 1
    yield valor + 2
    yield valor + 3
}
let generatorSaga = watcher(6)
console.log(generatorSaga.next().value)// watcher
console.log(generatorSaga.next().value)//worker
console.log(generatorSaga.next().value)//worker
console.log(generatorSaga.next().value)//worker
console.log(generatorSaga.next().value)//watcher
// clase temporizador

class Temporizador {
    public terminar? : () => void;

    public empezar(): void {
        setTimeout(() => {
            //Comprobar que existe la función terminar
            if(!this.terminar) return
            //Cuando paso el tiempo se ejecutara la funcion terminar
            this.terminar()
        }, 10000);
    }
}

const miTemporizador: Temporizador = new Temporizador();
//Definir la función del callback a ejecutar cuando terime el tiempo

miTemporizador.terminar = () =>{
    console.log('Hemos terminado la tarea')
}
//Iniciamos el temporizador y se inicia el TimeOut
miTemporizador.empezar()
//Eliminar la ejecución de la función
delete miTemporizador.terminar;
const ejemplo = () => {

    setInterval(()=> console.log('Tic'), 1000)//Imptime tic c/seg
}

//Clases
class Curso {
    nombre:string;
    horas:number;

    constructor(nombre:string, horas:number){
        this.nombre = nombre;
        this.horas = horas
    }
}
class Estudiantes {
    //Propiedades de clase
    nombre:string;
    apellido?:string;
    cursos: Curso[];
    private ID: string = '12'
    //Constructor
    constructor(nombre:string, cursos:Curso[],apellido?:string){
        //Inicializamos las propiedades
        this.nombre = nombre;
        this.apellido = apellido ? apellido :'';
        this.cursos = cursos
    }
    //Obtener una propiedad
    get horasEstudiadas():number{
        let horasEstudiadas = 0
        this.cursos.forEach((curso:Curso) => {
            horasEstudiadas += curso.horas
        })
        return horasEstudiadas
    }
    //Setear una propiedad
    set ID_Estudiante(id:string){
        this.ID = id
    }
}

//Creamos un curso

const cursoTs: Curso = new Curso('Typescript', 15)
const cursoJs: Curso = new Curso('Javascript', 20)

const listaCursos: Curso[] = []

listaCursos.push(cursoTs,cursoJs);

//Creamos un estudiante
const nati: Estudiantes = new Estudiantes('Natalia',listaCursos,'Otero')
console.log(`${nati.nombre}, esta estudiando:`),
nati.cursos.forEach((curso:Curso)=>{
    console.log(`-${curso.nombre} duración:${curso.horas} horas`)
})
console.log(nati.horasEstudiadas)
console.log(nati.ID_Estudiante = '25')
//Saber las instancia de un objeto/variable
//typeOf
//instanceOf : Saber es una instancia de...
 let fechaNacimiento = new Date(1989,27,4
    )
if(fechaNacimiento instanceof Date){
    console.log('Es una instancia')
}
console.log(fechaNacimiento)

class Persona {
    nombre:string;
    apellido:string;
    edad:number;
    constructor(nombre:string, apellido: string,edad:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludar():void{
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
    }
}
 class Trabajador extends Persona{
    sueldo:number;
    constructor(nombre:string, apellido: string,edad:number, sueldo:number){
        super(nombre,apellido, edad);
        this.sueldo = sueldo;
    }
    saludar(): void {
        super.saludar();
        console.log(`Mi sueldo es de ${this.sueldo}`)
    }
}

class Jefe extends Persona {
    empleados:Trabajador[] = []
    constructor(nombre:string, apellido: string,edad:number){
        super(nombre,apellido, edad);
    
}
}

//Herencia y polimorfismoo
let empleado1 = new Trabajador('Natalia','Otero',33,1200)
let empleado2 = new Trabajador('Sebastian','Cisternas',38,25000)

empleado1.saludar()

let jefe = new Jefe('Facundo', 'Cisternas', 50);
jefe.empleados.push(empleado1,empleado2)

jefe.empleados.forEach((empleado:Trabajador)=>empleado.saludar())

//Uso de interfaces

let programar:iTarea = {
    titulo: 'Programar en TypeScript',
    descripcion: 'Prácticas para aprender a desarrollar',
    completado: false,
    urgencia:Nivel.Urgente,
    resumen: function (): string {
       return `${this.titulo} - ${this.completado}- ${this.urgencia}`
    }
}
console.log(programar.resumen())
// Tarea de Programación (implementa iTarea)
 programar = new Programar('typeScript', 'tarea de programación', false,  Nivel.Bloqueante)
console.log('bloqueante',programar.resumen())
console.log(Nivel.Urgente)
console.log(Nivel.Informativa)
console.log(Nivel.Bloqueante)
//Decoradores: funciones declaradas a trvés de un simbolo @
// Decoradores Experimentales -->@ :
//- Clases
//- Parametros
//- Métodos
//- Propiedades

function Override(label:string){
    return function (target:any, key:string){
        Object.defineProperty(target,key, {
            configurable: false,
            get: () => label
        })
    }
}
class PruebaDecorador{
    @Override('prueba')//llamar a la funcion override
    nombre: string = 'Martin'
}
let prueba = new PruebaDecorador
console.log(prueba.nombre)

//Otra funcion para usarla como decorador
function SoloLectura(target:any, key:string){
    Object.defineProperty(target, key, {
        writable: false
})
}
class PruebaSoloLectura{
    @SoloLectura
    nombre: string = '';
}
let pruebaLectura = new PruebaSoloLectura();
pruebaLectura.nombre = 'Natutu'
console.log(pruebaLectura.nombre)

//Decorador para parametros de un método
function mostrarPosicion(target: any, key:string, parameterIndex:number){
 console.log('posicion', parameterIndex)
}

class pruebaMetodoDecorador {
    prueba(a:string,@mostrarPosicion b:boolean){
    console.log(b)
}
}

new pruebaMetodoDecorador().prueba('Hola', false)