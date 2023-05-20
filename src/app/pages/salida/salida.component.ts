import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login, Visitante } from 'src/app/models/model';
import { AlertService } from 'src/app/services/alert.service';
import { BackService } from 'src/app/services/back.service';
import { DataIntService } from 'src/app/services/data-int.service';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit {

  constructor(private infoService:DataIntService, private router:Router, private backService:BackService, private alert:AlertService) { }

  cc:number;
  visitante1:Login = new Login();
  visitante:Visitante = new Visitante();
  ngOnInit(): void {
  }

  SaleVisitante(){
    if (this.cc!==undefined) {
      if(this.infoService.foto===""){
        // console.log("Dale que si");   
        this.alert.showAlert("Toma la foto y acepta", "alerta") 
        return   
      }else{
        this.visitante1.foto=this.infoService.foto;
        this.visitante1.cc_visitante=this.cc
        
        this.backService.getVisitantes().subscribe((vist)=>{
          let visitanteBuscado=vist.Visitantes.filter((visitante)=>{
            return visitante.cc_visitante===this.cc; 
          })       
          
          if (visitanteBuscado.length === 1) {
            if (visitanteBuscado[0].estado!=='Adentro') {
              // console.log("Alerta: Ya estaba afuera"); 
              this.alert.showAlert("Este visitante no ha ingresado o ya salio", "alerta")   
              return         
            }
            this.visitante1.id=visitanteBuscado[0].id 
  
            this.visitante.id=visitanteBuscado[0].id
            this.visitante=visitanteBuscado[0]          
  
            this.backService.loginVisitante(this.visitante1).subscribe(res => {   
              // console.log(res);
                       
              if(res.datos>0){
                this.visitante.estado="Afuera";
                // console.log(this.visitante);              
  
                // Acá deben estar los pacientes y todo lo demas
  
                this.backService.editVisitante(this.visitante, this.visitante.id).subscribe(ed => {
                  // console.log(ed);                
                })
                // console.log("El valor es "+res.datos);               
              }else{
                this.alert.showAlert("No coincide la persona que ingreso con la que intenta salir", "alerta")  
                // console.log("Alerta: No coincide la persona ingresanda con la registrada");              
              }
            }, error=>{
              this.alert.showAlert("Se presento un error, vuelta a intentarlo", "error")                
            })
            
          }else{
            this.alert.showAlert("La cédula no esta registrada", "alerta") 
            // console.log("Alerta: Visitante no fue encontrado");        
          }
        })     
        
      }  
      if (this.infoService.acepta){
        this.alert.showAlert("El visitante salio correctamente", "succes")                
        this.router.navigate(['']);
      }
    }else{
      this.alert.showAlert("Ingrese la cédula del visitante que quiere salir", "alerta") 
    }
  }

}
