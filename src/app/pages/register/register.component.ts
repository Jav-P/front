import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Visitante } from 'src/app/models/model';
import { BackService } from 'src/app/services/back.service';
import { DataIntService } from 'src/app/services/data-int.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private infoService:DataIntService, private backService:BackService, private router:Router) { }
  cc:number;
  visitante1:Visitante = new Visitante();
  ngOnInit(): void {
  }
  
  crearVisitante(){
    this.visitante1.cc_visitante=this.cc;
    this.visitante1.foto=this.infoService.foto;
    if(this.visitante1.foto===""){
      console.log("Dale que si");   
      return   
    }else if(this.cc===undefined){
      console.log("Coloca la cedula");      
      return
    }else{
      this.backService.addVisitante(this.visitante1).subscribe(res => {
        console.log(res); 
      })
    }  
    if (this.infoService.acepta){
      this.irInicio()  
    }
  }

  irInicio(){
    this.router.navigate(['/inicio']);
  }

}
