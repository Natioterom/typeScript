import { Nivel, iTarea } from "./Interface/iTarea";

export class Programar implements iTarea {
    titulo: string;
    descripcion: string;
    completado: boolean;
    urgencia?: Nivel | undefined;
  
    constructor(titulo:string, description:string, completado:boolean,urgencia:Nivel){
        this.titulo = titulo;
        this.descripcion = description;
        this.completado = completado;
        this.urgencia = urgencia;
    }
    resumen = ():string => {
        return `Tarea de programación : ${this.titulo}-${this.completado}`

    }
}