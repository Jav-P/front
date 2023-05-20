import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Visitante } from 'src/app/models/model';
import { AlertService } from 'src/app/services/alert.service';
import { BackService } from 'src/app/services/back.service';
import { DataIntService } from 'src/app/services/data-int.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private infoService:DataIntService, private backService:BackService, private router:Router, private alert:AlertService) { }
  cc:number;
  visitante1:Visitante = new Visitante();
  ngOnInit(): void {
  }
  
  crearVisitante(){
    this.visitante1.cc_visitante=this.cc;
    this.visitante1.foto=this.infoService.foto;
    if (this.cc!==undefined) {
      this.backService.getVisitantes().subscribe((vist)=>{
        let visitanteBuscado=vist.Visitantes.filter((visitante)=>{
          return visitante.cc_visitante===this.cc; 
        })
        if (visitanteBuscado.length === 1) {
          this.alert.showAlert("Esta cédula ya está registrada", "alerta")           
          return
        }else{
          if(this.visitante1.foto===""){
            this.alert.showAlert("Toma la foto y acepta", "alerta") 
            // console.log("Dale que si");   
            return   
          }else if(this.cc===undefined){
            console.log("Coloca la cedula");      
            return
          }else{
            this.backService.addVisitante(this.visitante1).subscribe((res:any) => {
              // console.log(res.message);
              
              if (res.message==="Succes") {
                this.alert.showAlert("Visitante se registro correctamente", "succes") 
                this.infoService.foto=''
                this.router.navigate(['/inicio']);          
              }
            }, error=>{
              this.alert.showAlert("Se presento un error, vuelva a intentarlo", "error") 
              this.router.navigate(['']);          
            })
          } 
          
        }
      })
    }else{
      this.alert.showAlert("Ingrese la cédula del visitante", "alerta") 
    }
  }
}
