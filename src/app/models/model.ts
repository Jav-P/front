export class Visitante {
    cc_visitante:number;
    rostro:string;
    estado:string;
    habitacion:number;
    paciente:number;
    constructor(){
        this.cc_visitante=0;
        this.rostro="";
        this.estado="";
        this.habitacion=0;
        this.paciente=0;
    }
}
export class Paciente {
    cc_paciente:number;
    nombre:string;
    habitacion:number;
    constructor(){
        this.cc_paciente=0;
        this.nombre="";
        this.habitacion=0;
    }
}
export class Habitacion {
    num_habitacion:number;
    capacidad:number;
    piso:number;
    constructor(){
        this.num_habitacion=0;
        this.capacidad=0;
        this.piso=0;
    }
}
export class Piso {
    num_piso:number;
    constructor(){
        this.num_piso=0;
    }
}