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
  aceptar:boolean;
  constructor(private infoService:DataIntService, private router:Router, private backService:BackService) { }

  ngOnInit(): void {
  }

  loginVisitante(){
    if(this.infoService.foto===""){
      console.log("Dale que si");   
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
          console.log(this.visitante1.id);
          console.log(this.visitante1);

          this.backService.loginVisitante(this.visitante1).subscribe(res => {
            console.log(res); 
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
