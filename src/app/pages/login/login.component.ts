import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login, Visitante } from 'src/app/models/model';
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
  constructor(private infoService:DataIntService, private router:Router, private backService:BackService) { }

  ngOnInit(): void {
  }

  loginVisitante(){
    if(this.infoService.foto===""){
      console.log("Alerta: Dale que si");   
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
          // console.log(this.visitante1.id);
          // console.log(this.visitante);          
          // console.log(this.visitante1);
          this.backService.loginVisitante(this.visitante1).subscribe(res => {
            if(res.datos>0){
              this.visitante.estado="Adentro"
              this.visitante.paciente_id=this.infoService.paciente_id
              this.visitante.habitacion_id=this.infoService.habitacion
              console.log(this.visitante);              

              // Acá deben estar los pacientes y todo lo demas

              this.backService.editVisitante(this.visitante, this.visitante.id).subscribe(ed => {
                // console.log(ed);                
              })
              console.log("El valor es "+res.datos);               
            }else{
              console.log("No coincide la persona ingresanda con la registrada");             
            }
          })
                   
        }else{
          console.log("Visitante no fue encontrado");        
        }
      })     
      
    }  
    if (this.infoService.acepta){
      this.irInicio()  
    }
  }

  irInicio(){
    this.router.navigate(['']);
  }

}
