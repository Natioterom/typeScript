export enum Nivel{
    'Informativa'= 'informativa',
    'Urgente' = 'urgente',
    'Bloqueante' ='bloqueante'
}

//Interface sirve para definir la firma y los puntos
//necesarios a implementar a quien lo use
export interface iTarea {
    titulo:string;
    descripcion:string;
    completado:boolean;
    urgencia?:Nivel;
    resumen: () => string

}