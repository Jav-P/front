import { Component, OnInit } from '@angular/core';
import { Visitante } from 'src/app/models/model';
import { BackService } from 'src/app/services/back.service';
import { DataIntService } from 'src/app/services/data-int.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private infoService:DataIntService, private backService:BackService) { }
  cc:number;
  visitante1:Visitante = new Visitante();
  ngOnInit(): void {
  }


  prueba(){
    // console.log(this.infoService.foto);    
    console.log(this.visitante1);
  }

  crearVisitante(){
    this.visitante1.cc_visitante=this.cc;
    this.visitante1.foto="b'"+this.infoService.foto+"'";
    console.log(this.visitante1.foto);
    
    this.prueba()
    if(this.visitante1.foto==="b''"){
      console.log("Dale que si");      
    }else{
      this.backService.addVisitante(this.visitante1).subscribe(res => {
        console.log(res); 
      })
    }

  }

}
