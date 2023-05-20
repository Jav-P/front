import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login, Visitante } from 'src/app/models/model';
import { AlertService } from 'src/app/services/alert.service';
import { BackService } from 'src/app/services/back.service';
import { DataIntService } from 'src/app/services/data-int.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  visitante1:Login = new Login();
  visitante:Visitante;
  constructor(private infoService:DataIntService, private router:Router, private backService:BackService, private alert:AlertService) { }

  ngOnInit(): void {
  }

  loginVisitante(){
    if(this.infoService.foto===""){
      console.log("Alerta: Dale que si");  
      this.alert.showAlert("Toma la foto y acepta", "alerta")   
      return   
    }else{
      this.visitante1.foto=this.infoService.foto;
      this.visitante1.cc_visitante=this.infoService.cc
      
      this.backService.getVisitantes().subscribe((vist)=>{
        let visitanteBuscado=vist.Visitantes.filter((visitante)=>{
          return visitante.cc_visitante===this.infoService.cc; 
        })
        // console.log(visitanteBuscado);
        
        if (visitanteBuscado.length === 1) {
          this.visitante1.id=visitanteBuscado[0].id 
          this.visitante=visitanteBuscado[0]
          this.backService.loginVisitante(this.visitante1).subscribe(res => {
            if(res.datos>0){
              this.visitante.estado="Adentro"
              this.visitante.paciente_id=this.infoService.paciente_id
              this.visitante.habitacion_id=this.infoService.habitacion

              this.backService.editVisitante(this.visitante, this.visitante.id).subscribe(ed => {
                // console.log(ed);                
              })
              console.log("El valor es "+res.datos);   
              this.infoService.foto=''
              this.infoService.cc=0
              this.infoService.paciente_id=0
              this.infoService.habitacion=0
              this.alert.showAlert("Visitante ingresa correctamente", "succes")               
            }else{
              this.alert.showAlert("No coincide la persona que esta ingresando con la registrada", "alerta")         
            }
          }, error=>{
            this.alert.showAlert("No se pudo iniciar sesión, vuelva a intentarlo", "error")              
          })
                   
        }else{
          this.alert.showAlert("Visitante no esta registrado", "alerta")  
          this.router.navigate(['/registro']);   
          return    
        }
      })     
      
    }  
    if (this.infoService.acepta){
      this.router.navigate(['']);
      this.infoService.acepta=false
    }
  }
}
