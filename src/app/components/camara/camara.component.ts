import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Habitacion, Paciente, Piso, Visitante } from 'src/app/models/model';
import { BackService } from 'src/app/services/back.service';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.css']
})
export class CamaraComponent implements OnInit {

  constructor( private backService: BackService) {}
  stream: any = null;
  trigger: Subject<void>= new Subject();
  imagen:string='';
  base:string='';
  visitantes:Visitante[];
  visitante:Visitante = new Visitante();
  habitacion:Habitacion = new Habitacion();
  paciente:Paciente = new Paciente();
  piso1:Piso = new Piso();

  get $trigger():Observable<void>{
    return this.trigger.asObservable();
  }

  ngOnInit(): void {}  

  snapshot(event: any){
    // console.log(event); 
    this.base= event.imageAsDataUrl;   
    this.imagen= this.base
    console.log(this.imagen.split('data:image/jpeg;base64,')[1]);   
    // this.pruebaBack(); 
  }
  acceder_camara(){
    navigator.mediaDevices.getUserMedia().then(res =>{
      console.log(res);
      this.stream=res;
      }
    ).catch((error)=>{
      console.log(error);      
    })
  }
  tomarFoto(){
    this.trigger.next()
  }

  visit(){
    this.backService.getVisitantes().subscribe((vist)=>{
      console.log(vist);
    })       
  }
  habit(){
    this.backService.getHabitaciones().subscribe((vist)=>{
      console.log(vist);
    })       
  }
  paci(){
    this.backService.getPacientes().subscribe((vist)=>{
      let pacientes=vist;
      console.log(pacientes);
      console.log(vist);
    })       
  }
  piso(){
    this.backService.getPisos().subscribe((vist)=>{
      console.log(vist);
    })       
  }
  visitID(){
    this.backService.getVisitantesID(1).subscribe((vist)=>{
      console.log(vist);
    })       
  }
  habitID(){
    this.backService.getHabitacionesID(1).subscribe((vist)=>{
      console.log(vist);
    })       
  }
  paciID(){
    this.backService.getPacientesID(1).subscribe((vist)=>{
      console.log(vist);
    })       
  }
  pisoID(){
    this.backService.getVisitantesID(1).subscribe((vist)=>{
      console.log(vist);
    })       
  }
  // Add
  visitAdd(){
    console.log(this.visitante);           
  }
  habitAdd(){
    console.log(this.habitacion);     
  }
  paciAdd(){
    console.log(this.paciente);      
  }
  pisoAdd(){    
    console.log(this.piso1);    
    this.backService.addPiso(this.piso1)   
  }

  // Delete
  pisoDelete(){
    this.backService.deletePiso(2).subscribe(dato=>{
      console.log(dato);
      this.piso();      
    })
  }



}
