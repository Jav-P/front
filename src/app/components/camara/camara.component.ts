import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Habitacion, Paciente, Piso, Visitante } from 'src/app/models/model';

import { BackService } from 'src/app/services/back.service';
import { DataIntService } from 'src/app/services/data-int.service';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.css']
})
export class CamaraComponent implements OnInit {

  constructor( private backService: BackService, private dataService: DataIntService) {}
  stream: any = null;
  trigger: Subject<void>= new Subject();
  imagen:string='';
  data:string='';
  base:string='';
  visitantes:Visitante[];
  visitante:Visitante = new Visitante();
  habitacion:Habitacion = new Habitacion();
  paciente:Paciente = new Paciente();
  piso1:Piso = new Piso();
  foto=false

  get $trigger():Observable<void>{
    return this.trigger.asObservable();
  }

  ngOnInit(): void {
  }  

  snapshot(event: any){
    this.base= event.imageAsDataUrl;   
    this.imagen= this.base
    this.data=this.imagen.split('data:image/jpeg;base64,')[1]
    // console.log(this.imagen);
    
  }
  acceder_camara(){
    navigator.mediaDevices.getUserMedia({video: {width: 250, height: 250} }).then(res =>{
      // console.log(res);
      this.stream=res;
      }
    ).catch((error)=>{
      console.log(error);      
    })
  }
  tomarFoto(){
    this.trigger.next()
  }

  piso(){
    this.backService.getPisos().subscribe((vist)=>{
      console.log(vist);
      console.log(vist.Pisos[0]);      
    })       
  }
  pisoID(){
    this.backService.getVisitantesID(1).subscribe((vist)=>{
      console.log(vist);
    })       
  }
  // Add
  pisoAdd(){ 
    this.backService.addPiso(this.piso1).subscribe(res => {
      console.log(res);    
    })   
  }
  // Delete
  pisoDelete(){
    this.backService.deletePiso(2).subscribe(dato=>{
      console.log(dato);
      this.piso();      
    })
  }

  prueba(){
    this.backService.getVisitantes().subscribe((vist)=>{
      console.log(vist);
      console.log(vist.Visitantes[0]);      
    })
  }
  enviarFoto(){
    this.dataService.foto=this.data    
    this.dataService.acepta=true
    this.foto=true
    // console.log(this.dataService.acepta);    
  }

  falso(){
    this.imagen=""
  }



}
