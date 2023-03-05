// Funciones
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