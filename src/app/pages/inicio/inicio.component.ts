import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';
import { MensajePaciente, Paciente } from 'src/app/models/model';
import { AlertService } from 'src/app/services/alert.service';
import { BackService } from 'src/app/services/back.service';
import { DataIntService } from 'src/app/services/data-int.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  cc:number;
  cc_v:number;
  habitacion:boolean= false;
  pacienteNoEncontrado:boolean= false;
  pacienteBuscado:Paciente;
  habitacionPaciente=0;

  constructor(private backService: BackService, public dataService: DataIntService, private router:Router, private alert:AlertService) { }

  ngOnInit(): void {
  }

  buscar(){
    if (this.cc===undefined) {
      console.log("Alerta: Falta la cédula");    
      this.alert.showAlert("Falta la cédula del paciente", "alerta")   
    }else{
      this.habitacion=false;
      this.backService.getPacientes().subscribe((vist)=>{
        let pacienteBuscado=vist.Pacientes.filter((paciente)=>{
          return paciente.cc_paciente ===this.cc; 
        })
        if (pacienteBuscado.length === 1) {
          this.pacienteBuscado=pacienteBuscado[0]
          this.dataService.paciente_id=this.pacienteBuscado.id
          this.dataService.habitacion=this.pacienteBuscado.habitacion_id
          this.habitacionPaciente=this.pacienteBuscado.habitacion_id
          this.backService.getHabitacionesID(this.habitacionPaciente).subscribe((hab)=>{          
            this.habitacionPaciente=hab.Habitacion.num_habitacion;
          })
          this.habitacion=true;
          this.pacienteNoEncontrado=false;
        }
        // console.log(vist.Pacientes);
        if (!this.habitacion){
          this.pacienteNoEncontrado=true
        }
      })           
    }
  }

  login(){
    if ( this.pacienteBuscado!==undefined) {
      if (this.cc_v!==undefined) {
        this.dataService.cc=this.cc_v
        this.router.navigate(['/login']);      
      }else{
        this.alert.showAlert("Falta la cédula del visitante", "alerta")    
        console.log("Alerta: cedula del visitante");  
      }
    }else{
      this.alert.showAlert("Debes buscar al paciente que se va a visitar", "alerta")  
    }
      
  }
}
