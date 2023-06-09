export class Visitante {
    id:number;
    cc_visitante:number;
    rostro:string;
    foto:string;
    estado:string;
    habitacion_id:number;
    paciente_id:number;
    constructor(){
        this.id=0;
        this.cc_visitante=0;
        this.rostro="";
        this.foto="";
        this.estado="Afuera";
        this.habitacion_id=1;
        this.paciente_id=1;
    }
}
export class Paciente {
    id:number;
    cc_paciente:number;
    nombre:string;
    habitacion_id:number;
    constructor(){
        this.id=0;
        this.cc_paciente=0;
        this.nombre="";
        this.habitacion_id=0;
    }
}
export class Habitacion {
    id:number;
    num_habitacion:number;
    capacidad:number;
    piso:number;
    constructor(){
        this.id=0;
        this.num_habitacion=0;
        this.capacidad=0;
        this.piso=0;
    }
}
export class Piso {
    id:number;
    num_piso:number;
    constructor(){
        this.id=0;
        this.num_piso=0;
    }
}
export class Login {
    id:number;
    foto:string;
    cc_visitante:number;
    constructor(){
        this.id=0;
        this.cc_visitante=0;
        this.foto="";
    }
}

export interface MensajeVisitante {
    message: string;
    Visitantes:   Visitante[];
}
export interface MensajePaciente {
    message: string;
    Pacientes:   Paciente[];
}
export interface MensajeHabitacion {
    message: string;
    Habitacion:  Habitacion[];
}
export interface MensajePiso {
    message: string;
    Pisos:   Piso[];
}
export interface MensajeHabitacionID {
    message:    string;
    Habitacion: Habitacion;
}
export interface MensajeLogin {
    datos: any;
}
